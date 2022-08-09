import React from "react";

export const LogsContext = React.createContext(null);

const { Provider } = LogsContext;

export const LogsProvider = ({ children }) => {
  const [logs, setLogs] = React.useState([]);

  const addLog = React.useCallback((newLog) => {
    const logToAdd = {
      id: Date.now(),
      message: newLog.message || "Empty log",
      success: !!newLog?.success,
      date: new Date()
    };
    setLogs((prevState) => {
      return [...prevState, logToAdd];
    });
  }, []);

  const clearLogs = React.useCallback(() => {
    setLogs([]);
  }, []);

  return (
    <Provider
      value={{
        logs,
        addLog,
        clearLogs
      }}
    >
      {children}
    </Provider>
  );
};

export default LogsContext;
