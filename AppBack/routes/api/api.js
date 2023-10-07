import express from "express";
import checkToken from "../../utils/middlewares.js";
import usersRoutes from "./users.js"
import goalsRoutes from "./goals-savings.js";


const router = express.Router();

router.use('', usersRoutes);
router.use('', checkToken, goalsRoutes);


export default router;