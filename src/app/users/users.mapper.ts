import { UserDTO } from './users.dto';
import { User } from './users.entity';

export class UserMapper {
  static toDTO(user: User): UserDTO {
    let userDTO = new UserDTO();
    userDTO.id = user.id;
    userDTO.name = user.name;
    userDTO.email = user.email;
    userDTO.birth = user.birth;
    return userDTO;
  }

  static toEntity(userDTO: UserDTO): User {
    let user = new User();
    user.id = userDTO.id;
    user.name = userDTO.name;
    user.email = userDTO.email;
    user.birth = userDTO.birth;
    return user;
  }

  static toDTOs(users: User[]): UserDTO[] {
    return users.map((user) => this.toDTO(user));
  }
}
