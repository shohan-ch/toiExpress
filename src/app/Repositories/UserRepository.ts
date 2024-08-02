import { Request } from "express";
import AppDataSource from "../../config/Database";
import { User } from "../../models/User";
import Validation from "../../helpers/Validation";

class UserRepository {
  private userModel;
  constructor() {
    this.userModel = AppDataSource.getRepository(User);
  }
  async store(user: any) {
    await Validation.validate(user, {
      name: "required|string",
      email: "required|email",
      password: "required|min:5",
      confirm_password: "required|min:5|matchPassword",
    });
    let newUser = this.userModel.save(user);
    return "User created";
  }
  getUsers() {
    return "All User form repository";
  }
  getUser(req: Request, id: number) {
    return {
      userId: id,
    };
  }
}

export default new UserRepository();
