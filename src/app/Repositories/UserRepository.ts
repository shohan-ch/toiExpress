import { Request } from "express";
import AppDataSource from "../../config/Database";
import { User } from "../../models/User";

class UserRepository {
  private userModel;
  constructor() {
    this.userModel = AppDataSource.getRepository(User);
  }
  async store(user: any) {
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
