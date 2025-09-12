import { Router } from "express";
import { getClientes, postClientes } from "../controllers/clienteControllers";

const router =Router()

router.get("/",getClientes)
router.post("/",postClientes)
export default router