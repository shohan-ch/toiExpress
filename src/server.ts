import express, { Application, Request, Response } from "express";
import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { UserController } from "./app/Controllers/UserController";
import AppDataSource from "./config/Database";

class Server {
  private app: any;
  private port = 3000;
  constructor() {
    this.dbConnect();
    this.app = createExpressServer({
      routePrefix: "/api/v1",
      controllers: [UserController],
    });
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
