import { DataTypes, Model, } from "sequelize";
import sequelize from "../config/db";
import { userAttributes, UserCreationAttributes } from "../interfaces/user.interface";


// crea una clase y esa clase hereda de model los metodos http de sequelize
// (userAtributes) se definen todos los campos que existen en la tabla 
// (UserCreationAttributes) define los campos que se pueden enviar al crear un registro.
// implements userAttributes asegurate que la clase tenga todas las propiedades de la interfaz
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
    timestamps: false,
  }
);

export default User;
