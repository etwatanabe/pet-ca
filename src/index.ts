import express from "express";
import { env } from "./config/env";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";
import { GetUsersController } from "./controllers/get-users/get-users";

const app = express();

app.get("/users", async (req, res) => {
  const mongoGetUsersRepository = new MongoGetUsersRepository();
  
  const getUsersController = new GetUsersController(mongoGetUsersRepository);

  const {body, statusCode} = await getUsersController.handle();

  res.send(body).status(statusCode);
});

app.listen(env.PORT, () => {
  console.log(`Server is running on port http://localhost:${env.PORT}`);
});
