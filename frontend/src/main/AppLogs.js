import { useContext } from "react";
import appLogsStyles from "./appLogsStyles";
import LogsContext from "../context/LogsContext";

export default function AppLogs() {
  const classes = appLogsStyles();

  const { logs, clearLogs } = useContext(LogsContext);

  const handleClearLogs = () => {
    clearLogs();
  };

  // part-1: "to scroll bottom"
  // const listRef = useRef();
  // useEffect(() => {
  //   console.log({ listRefCurrent: listRef.current });
  //   listRef.current.scrollTo({ top: 100000, behavior: "smooth" });
  // }, [logs]);

  const logsLength = logs?.length || 0;

  return (
    <div className={classes.root}>
      <div className={classes.wrapList}>
        <div className={classes.top}>
          <div>Logs:</div>
          <div>
            <button
              onClick={handleClearLogs}
              disabled={!logsLength}
              style={{ cursor: `${logsLength ? "pointer" : "default"}` }}
            >
              Clear logs
            </button>
          </div>
        </div>
        <div
          className={classes.list}
          // part-2: "to scroll bottom"
          // ref={(element) => {
          //   if (element) {
          //     listRef.current = element;
          //   }
          // }}
        >
          {logs
            ?.slice()
            .reverse()
            .map((log, idx) => {
              const dateToShow = `${
                log.date.toLocaleTimeString().split(" ")[0]
              }:${String(log.date.getMilliseconds()).padStart(3, "0")}`;

              return (
                <div
                  key={`${log.id}-${idx}`}
                  className={`listItem ${idx === 0 ? "newItem" : ""}`}
                  style={{
                    backgroundColor: `${
                      (logsLength - idx) % 2 === 0 ? "#fafafa" : "#dbdbdb"
                    }`
                  }}
                >
                  <span style={{ fontSize: "0.9rem" }}>
                    <span className={classes.itemNumber}>
                      {logsLength - idx}
                    </span>
                    )&nbsp;{dateToShow}&nbsp;&nbsp;-&nbsp;&nbsp;
                  </span>
                  <span style={{ color: `${log.success ? "green" : "red"}` }}>
                    {log.message}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
