import express, { Application, Request, Response } from "express";
import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { UserController } from "./app/Controllers/UserController";
import AppDataSource from "./config/Database";
import ErrorHandleMiddleware from "./middlewares/ErrorHandleMiddleware";
import { JsonResponseMiddleware } from "./middlewares/JsonResponseMiddleware";

class Server {
  private app: any;
  private port = 3000;
  constructor() {
    this.dbConnect();
    this.app = createExpressServer({
      routePrefix: "/api/v1",
      controllers: [UserController],
      middlewares: [JsonResponseMiddleware],
      defaultErrorHandler: false,
    });
    this.app.use(ErrorHandleMiddleware);
  }

  startServer() {
    this.app.listen(this.port, () => {
      console.log("Server listen at port " + this.port);
    });
  }

  dbConnect() {
    AppDataSource.initialize()
      .then(() => {
        console.log("Database connected");
      })
      .catch((err) => console.log(err));
  }
}

const server = new Server();
server.startServer();
