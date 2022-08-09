import express from "express";
import { sleep } from "../Utils/Promises.js";
import { books } from "../Db/books.js";

const router = express.Router();

router.get("/", async function (req, res) {
  console.count("get books sent");
  await sleep(2000);
  res.json(books);
});

router.get("/:bookId", async function (req, res) {
  await sleep(2000);

  const bookId = req?.params?.bookId;
  if (!bookId) {
    res.json(false);
  }
  const book = books.find((book) => book.id.toString() === bookId);
  res.json(book);
});

export default router;
