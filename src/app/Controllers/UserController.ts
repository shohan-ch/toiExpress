import {
  Controller,
  Get,
  JsonController,
  Param,
  Req,
  Res,
  Redirect,
} from "routing-controllers";
import UserRepository from "../Repositories/UserRepository";
import { Request } from "express";

@JsonController()
// @Controller()
export class UserController {
  @Get("/users")
  getAll() {
    const response = UserRepository.getUsers();
    return response;
  }

  @Get("/users/:id")
  getOne(@Req() request: Request, @Param("id") id: number) {
    const response = UserRepository.getUser(request, id);
    return response;
  }
}
