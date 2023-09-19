import { Router } from "express";
import { allUsers, loadUser, loginUser, logout, registerUser } from "../controllers/userController.js";
import { isLoggedIn } from "../middleware/restrictTo.js";

const router = Router();

router.post("/", registerUser);
router.post('/login',loginUser);
router.get('/logout',logout);
router.get('/me',isLoggedIn,loadUser);
router.get('/all',allUsers);


export const userRouters = router;
