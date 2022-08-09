import React from "react";
import { useParams } from "react-router-dom";

export default function BookPreview() {
  const params = useParams();
  const bookId = params.bookId;

  return (
    <div>
      <h2>Books</h2>
      <div>{bookId}</div>
    </div>
  );
}
