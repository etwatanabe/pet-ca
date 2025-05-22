import { User } from "../../models/user";

export interface IGetUsersController {
  handle(): Promise<HttpResponse<User[]>>;
}

export interface IGetUserRepository {
  getUsers(): Promise<User[]>;
}