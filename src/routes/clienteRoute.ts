import { Router } from "express";
import { getClientes } from "../controllers/clienteControllers";

const router =Router()

router.get("/",getClientes)
export default router