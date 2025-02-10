import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/users", (req, res) => res.send({ title: "Get All Users" }));

subscriptionRouter.get("/:id", (req, res) => res.send({ title: "Get User details" }));

subscriptionRouter.post("/", (req, res) => res.send({ title: "Create New User" }));

subscriptionRouter.put("/:id", (req, res) => res.send({ title: "Update User" }));

subscriptionRouter.delete("/:id", (req, res) => res.send({ title: "Delete User" }));

export default subscriptionRouter;
