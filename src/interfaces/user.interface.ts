import { Optional } from "sequelize";

export interface userAttributes {
  id:number
  name: string;
  email: string;
}

export interface UserCreationAttributes extends Optional<userAttributes,"id">{}
