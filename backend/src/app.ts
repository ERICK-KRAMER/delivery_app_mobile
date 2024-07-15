import express, { Request, Response } from "express";
import cors from "cors";
import { prismaClient } from "./prisma/prismaClient";

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
  }

  listen(port: number) {
    this.app.listen(port, () => {
      console.log(`Server is running! http://localhost:${port}`);
    });
  }
} export { App };