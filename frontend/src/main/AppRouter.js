import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { Users } from "../pages/Users";
import Books from "../pages/books/Books";
import BookPreview from "../pages/books/BookPreview";

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="users" element={<Users />} />

        <Route path="books" element={<Books />}>
          <Route path=":bookId" element={<BookPreview />} />
        </Route>

        <Route path="" element={<Home />} />
      </Routes>
    </div>
  );
}
