import { Router } from "express";
// import { Controller } from "../controllers/users";
import { UserController } from "../controllers/users";
export const UserRouter = Router();

UserRouter.get("/", UserController.getUsers);
UserRouter.get("/:id", UserController.getUserById);
UserRouter.post("/", UserController.createUser);
UserRouter.put("/:id", UserController.updateUser);
UserRouter.delete("/:id", UserController.deleteUser);
