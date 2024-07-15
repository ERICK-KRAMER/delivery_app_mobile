import express, { Request, Response } from "express";
import cors from "cors";

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
    })
  }

  listen(port: number) {
    this.app.listen(port, () => {
      console.log(`Server is running! http://localhost:${port}`);
    });
  }
} export { App };