import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'src/app/decorators/roles.decorator';
import { UserRole } from 'src/shared/config/role/role.entity';

import * as jwt from 'jsonwebtoken';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();

    const token = this.extractTokenFromHeader(request.headers.authorization);

    if (!token) {
      return false;
    }

    const user = this.decodeToken(token);

    if (!user) {
      return false;
    }

    return requiredRoles.some((role) => user?.roles?.includes(role));
  }

  private extractTokenFromHeader(
    authHeader: string | undefined,
  ): string | null {
    if (!authHeader) {
      return null;
    }

    const [type, token] = authHeader.split(' ');
    return type === 'Bearer' ? token : null;
  }

  private decodeToken(token: string): any {
    try {
      const payload = jwt.decode(token);
      return payload;
    } catch {
      return null;
    }
  }
}
