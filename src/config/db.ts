import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Cargar .env
dotenv.config();
// creamos una instancia de sequelize con sus varibles de entorno
const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST as string,
    dialect: process.env.DB_DIALECT as any,
    logging: false,
  }
);

export default sequelize;
