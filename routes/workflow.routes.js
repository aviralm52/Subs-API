import { Router } from "express";

import { getUsers } from "../controllers/user.controller.js";
import { sendReminders } from "../controllers/workflow.controller.js";

const workflowRouter = Router();

workflowRouter.get("/", getUsers);
workflowRouter.post("/subscription/reminder", sendReminders);

export default workflowRouter;
