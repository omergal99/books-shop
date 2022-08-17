import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import booksStyles from "./booksStyles";
import LogsContext from "../../context/LogsContext";
import HttpContext from "../../context/HttpContext";
import BookPreview from "./BookPreview";

const Books = () => {
  return (
    <div>
      <BookList />
    </div>
  );
}

export default Books;


const BookList = () => {
  const classes = booksStyles({ defaultBackgroundColor: "#654085" });

  const params = useParams();
  const { bookId } = params;

  const { addLog } = useContext(LogsContext);
  const { serverUrl } = useContext(HttpContext);

  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, toggleIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      toggleIsLoading(true);

      const url = `${serverUrl}/books`;
      const options = {
        method: "GET",
        signal: abortController.signal
      }
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          setBooks(data);
          const successMessage = `Success to get books`;
          addLog({ message: successMessage, success: true });
        })
        .catch((err) => {
          const errorMessage = `Error to get books ${err?.message ? ` - ${err?.message}` : ''}`;
          setError(errorMessage);
          addLog({ message: errorMessage, success: false });
        }).finally(() => {
          toggleIsLoading(false);
        })
    })();

    return () => {
      abortController.abort();
    };
  }, [addLog]);

  if (bookId) {
    return <BookPreview />;
  }

  return <div>
    <h2>Books</h2>
    <p>
      Fetching books from server, using <code>new AbortController()</code>
    </p>
    <p>for cases the request is cancelled and component lost data.</p>
    {(() => {
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
    })()}
  </div>

};
