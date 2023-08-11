import { Router } from 'express';
import { demoRoutes } from './demoRoutes.js';
import { userRouters } from './userRoutes.js';


const router = Router();

// routes
router.use('/demo', demoRoutes);
router.use('/user',userRouters);

export default router;
