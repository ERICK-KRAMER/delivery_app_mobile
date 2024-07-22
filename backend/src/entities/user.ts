class User {
  public id: string;
  public name: string;
  public email: string;
  public password: string;

  constructor(data: Omit<User, 'id'>) {
    Object.assign(this, data);
  };
} export { User };