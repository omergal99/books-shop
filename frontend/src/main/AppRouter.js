import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import { Users } from "../pages/Users";
import Books from "../pages/books/Books";
import BookPreview from "../pages/books/BookPreview";

export default function AppRouter() {
  return (
    <Switch>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/books/:bookId">
        <BookPreview />
      </Route>
      <Route path="/books">
        <Books />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
