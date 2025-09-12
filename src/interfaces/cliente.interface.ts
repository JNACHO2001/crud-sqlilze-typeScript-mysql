import { Optional } from "sequelize";


// 👉 1. Atributos de la tabla
export interface ClienteAttributes {
  id: number;
  telefono: string;
  direccion:string,
  userId?: number; // si tienes relación con User
}

// 👉 2. Atributos necesarios al crear (id es autoincremental, no obligatorio al crear)
 export interface ClienteCreationAttributes extends Optional<ClienteAttributes, "id"> {}

