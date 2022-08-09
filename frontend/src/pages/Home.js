export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>In this little app, we can toggle between home page to books page.</p>
      <p>server side return books data in a 2 seconds</p>
      <p>If we will toggle fast we will see an aborted request in logs</p>
      <p>and that is how we can save unhandle and not used recevied data, in case it will not aborted.</p>
    </div>
  );
}
