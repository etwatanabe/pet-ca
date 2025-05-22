import { IGetUserRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUserRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@email.com",
        password: "JohnDoe123",
      },
    ];
  }
}
