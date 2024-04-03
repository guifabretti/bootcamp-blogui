import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import BlogController from "./controllers/BlogController.js";
import methodOverride from 'method-override';

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(methodOverride('_method'));
app.use(express.json());

app.get("/blog", BlogController.index)
app.get("/blog/:id", BlogController.show)
app.delete("/blog/delete/:id", BlogController.delete)
app.get("/createblog", BlogController.before_store)
app.post("/createblog/submit", BlogController.store)
app.put("/blog/edit/:id", BlogController.update)

app.listen(port, () => {
  console.log(`🔥 Server started at http://localhost:${port}/blog`);
});