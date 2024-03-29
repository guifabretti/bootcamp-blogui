import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import BlogController from "./controllers/BlogController.js";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", BlogController.index)

app.listen(port, () => {
  console.log(`🔥 Server started at http://localhost:${port}`);
});