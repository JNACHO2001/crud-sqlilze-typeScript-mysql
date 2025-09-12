import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";
import {
  ClienteAttributes,
  ClienteCreationAttributes,
} from "../interfaces/cliente.interface";
class Cliente
  extends Model<ClienteAttributes, ClienteCreationAttributes>
  implements ClienteAttributes
{
  public id!: number;
  public telefono!: string;
  public direccion!: string;
  public userId!: number;
}

Cliente.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    direccion: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    userId:{
      type:DataTypes.INTEGER.UNSIGNED,
      allowNull:false
    }
  },
  {
    sequelize,
    tableName: "clientes",
    timestamps: false,
  }
);

export default Cliente;
