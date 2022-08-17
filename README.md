# Books-shop

codesandbox frontend:
https://codesandbox.io/s/books-frontend-forked-ceczc4

codesandbox backend:
https://codesandbox.io/s/books-server-forked-ni6773



## how to use React 'useEffect' with AbortController


the focus for react warning:
Warning: Can't perform a React state update on an unmounted component.
This is a no-op, but it indicates a memory leak in your application.
To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount
method.

and save us from memory leaks



In this little app, we can toggle between home page to books page.

server side return books data in a 2 seconds

If we will toggle fast we will see an aborted request in logs

and that is how we can save unhandle and not used recevied data, in case it will not aborted.



relevant links:

https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal

https://developer.mozilla.org/en-US/docs/Web/API/AbortController

https://medium.com/doctolib/react-stop-checking-if-your-component-is-mounted-3bb2568a4934


can be better solution: (this answer have memory leaks)
https://stackoverflow.com/a/60907638/10869929

good solution:
https://stackoverflow.com/a/54964237/10869929



to run locally

1. in both backend and frontend run "npm i"
2. in both backend and frontend run "npm start"

that's all :)
