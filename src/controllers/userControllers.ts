import type { Request, Response } from "express";
// llamamos al modelo para hacer referencia a la tabla 
import User from "../models/user";

export const getUsers = async (_req: Request, res: Response) => {

  // este es el metodo de sequieslize para enlistar todos los usuarios de la tabla
  const users = await User.findAll();
  res.status(200).json({ message: "usuarios encontrados", data: users });
};
// este metodo es para buscar un usuario de manera individual 
export const getUser = async (req: Request, res: Response) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
  res.json(user);
};

export const createUser = async (req: Request, res: Response) => {
  try {
    // este es el metodo para insetar usuarios es las tablas 
    const user = await User.create(req.body);
    res.status(201).json({ message: "fue creado", data: user });
  } catch (error) {
    res.status(500).json({ error, message: "no fue posible la creacion" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  // este metodo es para buscar un usuario por id
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
  // este metodo es para actulizar el usuario encontrado
  await user.update(req.body);
  res.status(201).json({message:"fue actualizado ",data:user});
};


export const deleteUser = async (req: Request, res: Response) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
  // este metodo es para eliminar el usuario encontrado
  await user.destroy();
  res.status(200).json({message:"el usuario ha sido eliminado",name:user.name});
};

