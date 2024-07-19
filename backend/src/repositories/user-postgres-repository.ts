export interface IUserRepository {
  save(): Promise<void>;
  findByEmail(): Promise<void>;
  update(): Promise<void>;
}