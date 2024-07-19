import cors from "cors";
import { prismaClient } from "./prisma/prismaClient";
import express, { Request, Response } from "express";
import { createUserUseCaseController } from "./use-case/index"

class App {
  private readonly app = express();

  constructor() {
    this.configs();
    this.routes();
  };

  configs() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.get('/', (request: Request, response: Response) => {
      return response.status(200).send('Hello world!');
    });

    this.app.get('/products', async (request: Request, response: Response) => {
      try {
        const products = await prismaClient.product.findMany();
        return response.status(200).json(products);
      } catch (error) {
        if (error instanceof Error) {
          return response.status(400).json({ error: error.message });
        } else {
          return response.status(400).json({ error: 'Unexpected error.' });
        }
      }
    });


    this.app.post('/user/create', async (request: Request, response: Response) => {
      return await createUserUseCaseController.handler(request, response);
    });
  }

  listen(port: number) {
    this.app.listen(port, () => {
      console.log(`Server is running! http://localhost:${port}`);
    });
  }
} export { App };