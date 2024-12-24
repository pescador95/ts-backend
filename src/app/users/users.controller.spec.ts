import { UsersController } from "./users.controller";
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from "./users.services";


describe('AppController', () => {
    
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    
    const mockUsersService = {
        create: jest.fn()};
        
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{ provide: UsersService, useValue: mockUsersService }],
    }).compile();

    usersController = app.get<UsersController>(UsersController);
    usersService = app.get<UsersService>(UsersService);
  });
  
  const userTest = {
    id: -1,
    name: "nome teste",
    email: "teste@email.com",
    birth: new Date('1995-04-21T12:00:00'),
}

  describe('create test', () => {
    it('should return an user called "nome teste', async () => {
        
        const createdUser = { ...userTest, id: 1 }; 
        jest.spyOn(usersService, 'create').mockResolvedValue(createdUser);
        
        const result = await usersController.create(userTest);
        
        expect(result).toEqual(createdUser);
        expect(usersService.create).toHaveBeenCalledWith(userTest); 
   
    });
  });
  
});
