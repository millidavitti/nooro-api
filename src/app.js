import express from "express";
import api from "./routes/api.js";

const app = express();

app.use(express.json());
app.use("/v1", api);

export default app;
