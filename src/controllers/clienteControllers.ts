import type { Request, Response } from "express";
// llamamos al modelo para hacer referencia a la tabla
import Cliente from "../models/cliente";
import { ClienteCreationAttributes } from "../interfaces/cliente.interface";


export async function getClientes(_req: Request, res: Response) {
  try {
    const users = await Cliente.findAll();
    if (users.length === 0) {
      res.status(200).json({ message: "no hay clientes creados" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener clientes" });
  }
}

export async function postClientes(req:Request,res:Response) {

  try {
    const data:ClienteCreationAttributes=req.body;
    const cliente= await Cliente.create(data)
    res.status(201).json({message:"el cliente fue creado",data:cliente.telefono } )
    
  } catch (error) {
       res.status(500).json({ message: "Error al crear cliente" });
    
  }
  
}
