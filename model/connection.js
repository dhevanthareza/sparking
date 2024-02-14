import { Sequelize } from "sequelize";

const connection = new Sequelize("sparking", "root", "dhevan007", {
  host: "localhost",
  dialect: "mysql",
});

export default connection;
