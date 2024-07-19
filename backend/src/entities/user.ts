class User {
  public id: number;
  public name: string;
  public email: string;
  public password: string;

  constructor(data: Omit<User, 'id'>) {
    Object.assign(this, data);
  };
} export { User };