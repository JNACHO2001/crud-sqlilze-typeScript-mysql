import { Router } from "express";

import { getUsers,createUser,updateUser,getUser,deleteUser } from "../controllers/userControllers";

const router = Router();

router.get("/", getUsers);
router.get("/:id",getUser)
router.post("/",createUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)

export default router
