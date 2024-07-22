import { UserRepository } from "../../repositories/user/implement/user-repository";
import { CreateUserUseCase } from "./create-user-use-case";
import { CreateUserUseCaseController } from "./create-user-use-case-controller";
import { EmailTrapMailProvider } from "../../providers/Nodemailer/implement/email-trap-mail-provider";

const userRepository = new UserRepository();
const emailTrapMailProvider = new EmailTrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  userRepository,
  emailTrapMailProvider
);

const createUserUseCaseController = new CreateUserUseCaseController(
  createUserUseCase
);

export { createUserUseCaseController };