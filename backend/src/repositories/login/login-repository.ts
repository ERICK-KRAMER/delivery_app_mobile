import { User } from "../../entities/user";

interface LoginRepository {
  findUser(email: string): Promise<User | null>;
} export { LoginRepository };