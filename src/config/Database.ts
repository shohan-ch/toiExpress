import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "mssql",
  host: "localhost",
  port: 1433,
  username: "sa",
  password: "sql123ch%",
  database: "toiletservice",
  entities: [],
  synchronize: true,
  logging: false,
  options: {
    encrypt: false,
  },
});

export default AppDataSource;
