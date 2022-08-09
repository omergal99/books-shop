import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { serverUrl } from "../../services/httpService";
import booksStyles from "./booksStyles";
import LogsContext from "../../context/LogsContext";

export default function Books() {
  return (
    <div>
      <h2>Books</h2>
      <p>
        Fetching books from server, using <code>new AbortController()</code>
      </p>
      <p>for cases the request is cancelled and component lost data.</p>
      <BookList />
    </div>
  );
}

const BookList = () => {
  const classes = booksStyles({ defaultBackgroundColor: "#654085" });

  const { addLog } = useContext(LogsContext);

  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, toggleIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      toggleIsLoading(true);
      const url = `${serverUrl}/books`;
      fetch(url, {
        method: "GET",
        signal: abortController.signal
      })
        .then((response) => response.json())
        .then((result) => {
          setBooks(result);
          const successMessage = `GET books: Success to get books`;
          addLog({ message: successMessage, success: true });
          toggleIsLoading(false);
        })
        .catch((err) => {
          const errorMessage = `GET books: ${
            err?.message || "Error to get books"
          }`;
          setError(errorMessage);
          addLog({ message: errorMessage, success: false });
          toggleIsLoading(false);
        });
    })();
    return () => {
      abortController.abort();
    };
  }, [addLog]);

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!books?.length) {
    return <div>No books.</div>;
  }
  return (
    <div className="app-grid">
      {books.map((book, idx) => {
        return (
          <Link key={idx} to={`/books/${book.id}`}>
            <div
              className={classes.book}
              style={{ backgroundColor: book.color }}
            >
              {book.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
