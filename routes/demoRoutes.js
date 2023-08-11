import { Router } from 'express';
import { CreateDemo, getDemo } from '../controllers/demoController.js';
//import { isLoggedIn, restrictTo } from '../middleware/restrictTo.js';

const router = Router();

//router.get('/',isLoggedIn, getDemo);
router.get('/', getDemo);
router.post('/',CreateDemo);


export const demoRoutes = router;
