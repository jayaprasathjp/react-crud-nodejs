import router from "./routes/user.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());
app.use("/", router);
app.get("/", (req, res) => res.send("success"));
app.all(".", (req, res) => res.send("Route doesn't exist"));
app.listen(port, () => {
  console.log("Server is running on port", port);
});
