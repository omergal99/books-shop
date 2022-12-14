<h3 align="center">Books-shop</h3>



codesandbox frontend:
https://codesandbox.io/s/books-frontend-forked-ceczc4

codesandbox backend: (*fork* and *copy server link* to frontend Home)
https://codesandbox.io/s/books-server-forked-ni6773




![bookshop](https://user-images.githubusercontent.com/45643113/187538239-163b5336-b906-4551-8df9-75dfca291dd8.png)



## how to use React 'useEffect' with AbortController



```react.js
useEffect(() => {
  const abortController = new AbortController();

  (async () => {
    const url = '...';
    const options = {
      method: "GET",
      signal: abortController.signal
    }
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        ...
      })
      .catch((err) => {
        ...
      })
      .finally(() => {
        ...
      })
  })();

  return () => {
    abortController.abort();
  };
}, []);
```


the focus for react warning:
Warning: Can't perform a React state update on an unmounted component.
This is a no-op, but it indicates a memory leak in your application.
To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount
method.

and save us from memory leaks

<p></p>

In this little app, we can toggle between home page to books page.

server side return books data in a 2 seconds

If we will toggle fast we will see an aborted request in logs

and that is how we can save unhandle and not used recevied data, in case it will not aborted.

<p></p>

relevant links:

https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal

https://developer.mozilla.org/en-US/docs/Web/API/AbortController

https://medium.com/doctolib/react-stop-checking-if-your-component-is-mounted-3bb2568a4934


can be better solution: (this answer have memory leaks)
https://stackoverflow.com/a/60907638/10869929

### good solution:
https://stackoverflow.com/a/54964237/10869929


<h2></h2>

### to run locally

1. in both backend and frontend run 
```sh
npm i
```
2. in both backend and frontend run 
```sh
npm start
```
<h2></h2>

that's all :)

<h2></h2>

<span>There's no reason to keep running when the hoop doesn't want you - like look for data after user move to other page.</span>
<video src="https://user-images.githubusercontent.com/45643113/187793094-a99de5b4-c2d6-4862-8527-6afa6b29cbcc.mp4" />
