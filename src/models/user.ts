
// importamos los tipos de datos de la base y el modelo 
import { DataTypes, Model } from "sequelize";
// llamamos a ala base de datos
import sequelize from "../config/db";
// definimos el molde de esa clase 
class User extends Model {
  public name!: string;
  public email!: string;
}

User.init(
  {
   
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
    // le decimos que esa clase corresponde a la tabla users 
    sequelize,
    tableName: "users",
    timestamps: true,
  }
);

export default User;
