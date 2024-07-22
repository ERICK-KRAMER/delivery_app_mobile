import { User } from "../../../entities/user";
import { LoginRepository } from "../login-repository";
import { prismaClient } from "../../../prisma/prismaClient";

class PrismaLogin implements LoginRepository {

  async findUser(email: string): Promise<User | null> {
    const user = await prismaClient.user.findUnique({
      where: { email }
    });

    return user;
  };


} export { PrismaLogin };