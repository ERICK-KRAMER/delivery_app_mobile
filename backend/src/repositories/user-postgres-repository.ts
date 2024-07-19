import { UserDTO } from "../use-case/userDTO";
export interface IUserRepository {
  save(data: UserDTO): Promise<void>;
  findByEmail(email: string): Promise<UserDTO | null>;
  update(email: string, data: UserDTO): Promise<void>;
}