import { DataSource } from "typeorm";
import { ToiletFeedback } from "../models/ToiletFeedback";
import { User } from "../models/User";

const AppDataSource = new DataSource({
  type: "mssql",
  host: "localhost",
  port: 1433,
  username: "sa",
  password: "sql123ch%",
  database: "toiletservice",
  entities: [User, ToiletFeedback],
  synchronize: true,
  logging: false,
  options: {
    encrypt: false,
  },
});

export default AppDataSource;
