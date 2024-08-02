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
import JsonReponse from "../../lib/JsonReponse";

@JsonController("/users")
// @Controller()
export class UserController {
  @Post()
  async store(@Body({ required: true }) user: any) {
    let response = await UserRepository.store(user);
    return JsonReponse.success(response);
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
