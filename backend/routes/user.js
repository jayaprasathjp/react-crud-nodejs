import express from "express";
import {
  getUsers,
  createUser,
  deleteUser,
  getUser,
  updateUser
} from "../controllers/user.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/user", createUser);
router.delete("/user/:id", deleteUser);
router.get("/user/:id", getUser);
router.patch("/user/:id", updateUser);

export default router;
