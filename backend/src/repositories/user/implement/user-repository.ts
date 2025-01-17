import { prismaClient } from "../../../prisma/prismaClient";
import { UserDTO } from "../../../use-case/user/userDTO";
import { IUserRepository } from "../user-postgres-repository";

class UserRepository implements IUserRepository {
  async save(data: UserDTO): Promise<UserDTO | null> {
    await prismaClient.user.create({ data });
    const user = await prismaClient.user.findFirst({ where: { email: data.email } });
    return user;
  };

  async findByEmail(email: string): Promise<UserDTO | null> {
    const user = await prismaClient.user.findUnique({ where: { email } });
    return user;
  };

  async update(email: string, data: Partial<UserDTO>): Promise<void> {
    await prismaClient.user.update({ where: { email }, data: { ...data } });
  };
}

export { UserRepository };
