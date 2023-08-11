import { Router } from "express";
import { loadUser, loginUser, logout, registerUser } from "../controllers/userController.js";
import { isLoggedIn } from "../middleware/restrictTo.js";

const router = Router();

router.post("/", registerUser);
router.post('/login',loginUser);
router.get('/logout',logout);
router.get('/me',isLoggedIn,loadUser);

export const userRouters = router;
