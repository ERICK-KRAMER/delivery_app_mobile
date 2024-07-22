import { UserDTO } from "../../../use-case/user/userDTO";
export interface IUserRepository {
  save(data: UserDTO): Promise<UserDTO | null>;
  findByEmail(email: string): Promise<UserDTO | null>;
  update(email: string, data: UserDTO): Promise<void>;
}