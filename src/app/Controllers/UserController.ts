import {
  Controller,
  Get,
  JsonController,
  Param,
  Req,
  Res,
  Redirect,
  Post,
  Body,
} from "routing-controllers";
import UserRepository from "../Repositories/UserRepository";
import { Request } from "express";

@JsonController("/users")
// @Controller()
export class UserController {
  @Post()
  store(@Body() user: any) {
    // return user;
    let response = UserRepository.store(user);
    return response;
  }

  @Get()
  getAll() {
    const response = UserRepository.getUsers();
    return response;
  }

  @Get("/:id")
  getOne(@Req() request: Request, @Param("id") id: number) {
    const response = UserRepository.getUser(request, id);
    return response;
  }
}
