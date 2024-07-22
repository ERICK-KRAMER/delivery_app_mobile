import { IUserRepository } from "../../repositories/user/user-postgres-repository";
import { IEmailProvider, IMessage } from "../../providers/Nodemailer/email-trap-provider";
import { UserDTO } from "./userDTO";
import { hash } from "bcryptjs";

class CreateUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly emailProvider: IEmailProvider
  ) { };

  async execute(data: UserDTO) {
    const { email, name, password } = data;

    const userAlreadyExist = await this.userRepository.findByEmail(email);

    if (userAlreadyExist) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = await this.userRepository.save({
      name,
      email,
      password: passwordHash,
    });

    const message: IMessage = {
      to: {
        name: name,
        email: email,
      },
      from: {
        name: "Email Trap",
        email: "emailtrap@localhost.com",
      },
      subject: "Welcome to Email Trap",
      body: "Usuário criado com sucesso!"
    };

    const sendEmail = await this.emailProvider.sendEmail(message);

    return {
      message: "User created successfully!",
      user,
      sendEmail,
    }
  }

} export { CreateUserUseCase };