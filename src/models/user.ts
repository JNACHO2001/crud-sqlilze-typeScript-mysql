import { DataTypes, Model, } from "sequelize";
import sequelize from "../config/db";
import bcrypt from "bcrypt"
import { userAttributes, UserCreationAttributes } from "../interfaces/user.interface";


// crea una clase y esa clase hereda de model los metodos http de sequelize
// (userAtributes) se definen todos los campos que existen en la tabla 
// (UserCreationAttributes) define los campos que se pueden enviar al crear un registro.
// implements userAttributes asegurate que la clase tenga todas las propiedades de la interfaz
class User extends Model<userAttributes, UserCreationAttributes> implements userAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
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
    password:{
      type:DataTypes.STRING(100),
      allowNull:false

    }
  },
  {
    sequelize,
    tableName: "users",
    timestamps: false,
    // Queremos que antes de crear un usuario, la contraseña se transforme en un hash seguro.
    hooks:{
      beforeCreate:async (user:User)=> {
        // Genera un salt aleatorio que se usa para hashear la contraseña.
          const salt = await bcrypt.genSalt(10)
          // Toma la contraseña que el usuario envió (user.password) y la convierte en un hash seguro usando el salt generado.
          user.password =await bcrypt.hash(user.password,salt)
         const passwordHash = user.password
         console.log(passwordHash);
         
      },
      
    }
  }
);

export default User;
