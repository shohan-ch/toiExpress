import { Request } from "express";

class UserRepository {
  store(user: any) {
    return "New User";
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
