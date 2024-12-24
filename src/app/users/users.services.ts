/* eslint-disable prettier/prettier */
import { ConflictException, Inject, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./users.entity";
import { UserDTO } from "./users.dto";
import { UserMapper } from "./users.mapper";

@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_REPOSITORY')
        private usersRepository: Repository<User>) { }

    async findAll(): Promise<UserDTO[]> {

        try {

            return UserMapper.toDTOs(await this.usersRepository.find());

        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async findById(idNumber: number): Promise<User> {

        try {

            const user: User = await this.usersRepository.findOneBy({ id: idNumber });

            if (!user) {
                throw new Error('No user found');
            }

            return UserMapper.toDTO(user);
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }

    async create(user: User): Promise<User> {

        try {
            
            user.createdAt = new Date();

            return UserMapper.toDTO(await this.usersRepository.save(user));

        } catch (error) {
            throw new ConflictException(error.message);
        }
    }

    async edit(user: User): Promise<User> {

        try {

            let oldUser: User = await this.findById(user.id);

            oldUser = { ...oldUser, ...user };

            return UserMapper.toDTO(await this.usersRepository.save(oldUser));

        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }

    async delete(idNumber: number) {

        try {

            const userDelete: User = await this.findById(idNumber);

            await this.usersRepository.remove(userDelete);

        } catch (error) {
            throw new NotFoundException('No user found or already deleted');
        }
    }

}