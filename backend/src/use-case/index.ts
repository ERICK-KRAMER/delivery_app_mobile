import { UserRepository } from "../repositories/implement/user-repository";
import { CreateUserUseCase } from "./create-user-use-case";
import { CreateUserUseCaseController } from "./create-user-use-case-controller";

const userRepository = new UserRepository();

const createUserUseCase = new CreateUserUseCase(
  userRepository
);

const createUserUseCaseController = new CreateUserUseCaseController(
  createUserUseCase
);

export { createUserUseCaseController };