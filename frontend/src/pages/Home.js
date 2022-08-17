import { useContext } from "react";
import HttpContext from "../context/HttpContext";

export default function Home() {
  const { serverUrl, setServerUrl } = useContext(HttpContext);

  const handleChangeServerUrl = (ev) => {
    setServerUrl(ev.target.value);
  };

  return (
    <div>
      <h2>Home</h2>
      <p>In this little app, we can toggle between home page to books page.</p>
      <p>server side return books data in a <b>2 seconds.</b></p>
      <p>If we will toggle fast we will see an aborted request in logs.</p>
      <p>
        and that is how we can save unhandle and not used recevied data, in case
        it will not aborted.
      </p>
      <div>
        <div>
          Server Url at&nbsp;
          <a href={serverUrl} target="blank">
            {serverUrl}
          </a>
        </div>
        <div>
          Edit server Url:&nbsp;
          <input
            type="text"
            value={serverUrl}
            onChange={handleChangeServerUrl}
            style={{
              fontSize: '1.1rem',
              width: '100%',
              padding: '4px'
            }}
          />
        </div>
      </div>
    </div>
  );
}
