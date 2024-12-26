import { UserMapper } from "src/app/users/users.mapper";
import { Auth } from "./auth.model";
import { User } from "src/app/users/users.entity";

export class AuthMapper {
    
  static toDTO(accessToken: string, refreshToken: string, user: User): Auth {
    let auth = new Auth;
    auth.access_token = accessToken;
    auth.refresh_token = refreshToken;
    auth.sub = user.id;
    return auth;
    } 
    
  }