import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import LogsContext from "../../context/LogsContext";
import HttpContext from "../../context/HttpContext";

export default function BookPreview() {

  const params = useParams();
  const { bookId } = params;

  const { addLog } = useContext(LogsContext);
  const { serverUrl } = useContext(HttpContext);

  const [bookItem, setBookItem] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, toggleIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      toggleIsLoading(true);

      const url = `${serverUrl}/books/${bookId}`;
      const options = {
        method: "GET",
        signal: abortController.signal
      }
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          setBookItem(data);
          const successMessage = `Success to get book id ${bookId}`;
          addLog({ message: successMessage, success: true });
        })
        .catch((err) => {
          const errorMessage = `Error to get book id ${bookId} ${err?.message ? ` - ${err?.message}` : ''}`;
          setError(errorMessage);
          addLog({ message: errorMessage, success: false });
        }).finally(() => {
          toggleIsLoading(false);
        })
    })();

    return () => {
      abortController.abort();
    };
  }, [addLog, serverUrl]);

  return (
    <div>
      <h2>Book Id {bookId}</h2>
      {(() => {
        if (error) {
          return <div style={{ color: "red" }}>{error}</div>;
        }
        if (isLoading) {
          return <div>Loading...</div>;
        }
        if (!bookItem) {
          return <div>Book not found.</div>;
        }
        return <div>
          {[
            { title: 'Name', field: 'name' },
            { title: 'Pages', field: 'pages' },
            { title: 'Rate', field: 'rate' },
          ].map(item => {
            const {title, field} = item;
            return <div key={title}>
              <span style={{padding: '0 4px 0 0',display:'inline-block', minWidth: '60px'}}>{title}</span>
              <span>:&nbsp;&nbsp;{bookItem[field] || 'No data.'}</span>
            </div>
          })}
        </div>
      })()}
    </div>
  );
}
