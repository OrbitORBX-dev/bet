import express from "express";
import cors from "cors";
import "./watcher.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Bet backend running");
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
