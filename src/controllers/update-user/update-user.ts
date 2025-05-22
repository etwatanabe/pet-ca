import { User } from "../../models/user";
import { badRequest, ok, serverError } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IUpdateUserRepository, UpdateUserParams } from "./protocols";

export class UpdateUserController implements IController {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}

  async handle(
    httpRequest: HttpRequest<UpdateUserParams>
  ): Promise<HttpResponse<User | string>> {
    try {
      const id = httpRequest?.params?.id;
      if (!id) {
        return badRequest("Missing param: id");
      }
      
      const body = httpRequest?.body;
      if (!body) {
        return badRequest("Missing body");
      }

      const allowedFieldsToUpdate: (keyof UpdateUserParams)[] = [
        "firstName",
        "lastName",
        "email",
        "password",
      ];

      const someFieldIsNotAllowedToUpdate = Object.keys(body).some(
        (key) => !allowedFieldsToUpdate.includes(key as keyof UpdateUserParams)
      );

      if (someFieldIsNotAllowedToUpdate) {
        return badRequest("Some fields are not allowed to update");
      }

      const user = await this.updateUserRepository.updateUser(id, body);

      return ok<User>(user)
    } catch (error) {
      return serverError();
    }
  }
}
