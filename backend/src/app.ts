import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { createUserUseCaseController } from "./use-case/user/index";
import { TokenController } from "./middlewares/errorToken";
import { loginControllerUseCase } from "./use-case/login/index"
import { prismaClient } from "./prisma/prismaClient";
class App {
  private app = express();
  private readonly token = new TokenController();
  private readonly dotenv = dotenv;

  constructor() {
    this.configs();
    this.routes();
  }

  configs() {
    this.app.use(cors());
    this.dotenv.config();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.get('/', this.token.handler, (request: Request, response: Response) => {
      return response.status(200).send("<h1>Hello World</h1>");
    });

    this.app.post('/user/create', async (request: Request, response: Response) => {
      return await createUserUseCaseController.handler(request, response);
    });

    this.app.post('/user/login', async (request: Request, response: Response) => {
      return await loginControllerUseCase.handler(request, response);
    });

    this.app.get('/products', async (request: Request, response: Response) => {
      try {
        const products = await prismaClient.product.findMany();
        return response.status(200).json(products);
      } catch (error) {
        return response.status(500).json({ message: error.message });
      }
    });

  }

  listen(port?: number) {
    this.app.listen(port || 3000, () => {
      console.log("Server is running on port 3000");
    });
  }

} export { App };