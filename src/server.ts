import express, { Application, Request, Response } from "express";
import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { UserController } from "./app/Controllers/UserController";

class Server {
  private app: any;
  private port;
  constructor() {
    this.app = createExpressServer({
      routePrefix: "/api/v1",
      controllers: [UserController],
    });
    this.port = 3000;
  }

  startServer() {
    this.app.listen(this.port);
  }
}

const server = new Server();
server.startServer();

// let app = express();

// app.get("/", (req: Request, res: Response) => {
//   res.send("Welcome Page");
// });

// app.listen(4000, () => {
//   console.log("running at port 4000");
// });

// const app = createExpressServer({
//   controllers: [UserController],
// });
// app.listen(3000);
