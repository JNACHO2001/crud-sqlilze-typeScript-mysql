import type { Request, Response } from "express";
// llamamos al modelo para hacer referencia a la tabla
import User from "../models/user";
import { UserCreationAttributes } from "../interfaces/user.interface";

export async function getUsers(_req: Request, res: Response) {
  try {
    const users = await User.findAll();
    res.status(200).json({ message: "Usuarios encontrados", data: users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los usuarios" });
  }
}

// este metodo es para buscar un usuario de manera individual

export async function getUser(req: Request, res: Response) {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "no hay usuarios" });

    return res.status(200).json({ message: "usuario encontrado", data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
}

export async function createUser(req: Request, res: Response) {
  try {
    const data: UserCreationAttributes = req.body;

    // 1. Verificar si ya existe un usuario con ese email
    const existingUser = await User.findOne({ where: { email: data.email } });
    if (existingUser) {
      // 2. Si existe, respondemos con error 400 o 409 (conflicto)
      return res.status(409).json({ message: "Este correo ya existe" });
    }

    // 3. Crear el usuario porque el correo no está registrado
    const user = await User.create(data);

    // 4. Devolver respuesta exitosa
    res.status(201).json({ message: "Usuario creado correctamente", data: user.name });
  } catch (error) {
    // 5. Manejar errores inesperados
    res.status(500).json({ error, message: "No fue posible la creación" });
  }
}


export const updateUser = async (req: Request, res: Response) => {
  // este metodo es para buscar un usuario por id
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
  // este metodo es para actulizar el usuario encontrado
  await user.update(req.body);
  res.status(201).json({ message: "fue actualizado ", data: user });
};

export const deleteUser = async (req: Request, res: Response) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
  // este metodo es para eliminar el usuario encontrado
  await user.destroy();
  res
    .status(200)
    .json({ message: "el usuario ha sido eliminado", name: user.name });
};
