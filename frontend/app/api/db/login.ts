import { ILoginRepository, ISignIn, ISignUp, Message } from "./login-repository";

const endpoint: string = "http://localhost:3333/";

class Login implements ILoginRepository {

  async SignIn(data: ISignIn): Promise<string> {
    const { email, password } = data;
    try {
      const response = await fetch(endpoint + "user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const responseData: string = await response.json();
      return responseData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  async SignUp(data: ISignUp): Promise<Message> {
    const { name, email, password } = data;
    try {
      const response = await fetch(endpoint + "user/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const responseData: Message = await response.json();
      return responseData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

}

export { Login };
