import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";
import { userAttributes, UserCreationAttributes } from "../interfaces/user.interface";

class User extends Model<userAttributes, UserCreationAttributes> implements userAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
  }
);

export default User;
