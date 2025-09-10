import { Router } from "express";

import { getUsers,createUser,updateUser,getUser } from "../controllers/userControllers";

const router = Router();

router.get("/", getUsers);
router.get("/:id",getUser)
router.post("/",createUser)
router.put("/:id",updateUser)

export default router
