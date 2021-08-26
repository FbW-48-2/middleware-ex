import express from "express";
import { v4 as uuidv4 } from "uuid";
import recordsRouter from "./router/userRouter.js"; // naming is a placeholder

const app = express();
app.use(express.json());

app.use("/", recordsRouter);

const PORT = "5000";
app.listen(PORT, () => {
  console.log("api initilized");
});
