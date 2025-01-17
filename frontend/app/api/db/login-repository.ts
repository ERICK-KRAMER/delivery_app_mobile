
export type ISignIn = {
  email: string;
  password: string;
};

export type ISignUp = {
  name: string;
  email: string;
  password: string;
};

export interface Message {
  message: string
  data: Data
}

export interface Data {
  message: string
  user: User
}

export interface User {
  id: string
  name: string
  email: string
  password: string
}

export interface ILoginRepository {
  SignIn(data: ISignIn): Promise<string>;
  SignUp(data: ISignUp): Promise<Message>;
}