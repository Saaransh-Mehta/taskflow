import { Router } from "express";
import { getResult } from "../controllers/ai.controller.js";
import { authUser } from "../middleware/auth.js";

const AIRouter = Router();

AIRouter.get('/get-result',authUser,getResult)

export default AIRouter