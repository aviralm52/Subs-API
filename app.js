import express from "express";

import { PORT } from "./config/env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Subs API");
});

app.listen(PORT, () => {
  console.log(`Subs API running on port http://localhost:${PORT}`);
});

export default app;
