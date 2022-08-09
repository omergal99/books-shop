import express from "express";
import cors from "cors";

import BooksController from "./Books/BooksController.js";

const app = express();
app.use(cors());

app.use("/books", BooksController);

app.get("/", function (req, res) {
  res.write("Hello World!..."); //write a response to the client
  res.end(); //end the response
});

app.listen(9090, function () {
  console.log("server running on 9090");
});
