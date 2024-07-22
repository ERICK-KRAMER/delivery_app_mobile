import { Request, Response } from "express";
import { z, ZodError } from "zod";
import { LoginUseCase } from "./login-use-case";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

class LoginControllerUseCase {
  constructor(
    private readonly loginUseCase: LoginUseCase,
  ) { }

  async handler(request: Request, response: Response) {
    try {
      const { email, password } = loginSchema.parse(request.body);
      const signIn = await this.loginUseCase.execute({ email, password });
      return response.status(200).json(signIn);
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Zod validation error:", error.errors);
        return response.status(400).json({ errors: error.errors.map(e => e.message) });
      } else if (error instanceof Error) {
        console.error("General error:", error.message);
        return response.status(400).json({ error: error.message });
      } else {
        console.error("Unexpected error:", error);
        return response.status(400).json({ error: "Unexpected error" });
      }
    }
  }

} export { LoginControllerUseCase };