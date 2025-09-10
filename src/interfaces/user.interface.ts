import { Optional } from "sequelize";



// creamos la intefaz para implementarla en la clase 
export interface userAttributes {
id:number
  name: string;
  email: string;
  password:string
}
// le decimos que vamos a utulizar los atributos de esta interfaz  pero es opcional la id 
export interface UserCreationAttributes extends Optional<userAttributes,"id">{}