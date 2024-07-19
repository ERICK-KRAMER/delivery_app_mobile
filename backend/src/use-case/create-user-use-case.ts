import { User } from "../entities/user";
import { IUserRepository } from "../repositories/user-postgres-repository";
import { UserDTO } from "./userDTO";

class CreateUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
  ) { };

  async execute(data: UserDTO) {
    const { name, email, password } = data;
    const userAlreadyExist = await this.userRepository.findByEmail(email);

    if (userAlreadyExist) {
      throw new Error("User already exist");
    }

    const user = new User({ name, email, password });

    const newUser = await this.userRepository.save(user);

    return newUser;
  };

} export { CreateUserUseCase };