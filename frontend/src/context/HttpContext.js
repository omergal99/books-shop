import React from "react";
import { defaultServerUrl } from "../services/httpService";

export const HttpContext = React.createContext(null);

const { Provider } = HttpContext;

export const HttpProvider = ({ children }) => {
  const [serverUrl, setServerUrl] = React.useState(defaultServerUrl || '');

  return (
    <Provider
      value={{
        serverUrl,
        setServerUrl,
      }}
    >
      {children}
    </Provider>
  );
};

export default HttpContext;
