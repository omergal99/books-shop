# Books-shop

## how to use React 'useEffect' with AbortController

In this little app, we can toggle between home page to books page.

server side return books data in a 2 seconds

If we will toggle fast we will see an aborted request in logs

and that is how we can save unhandle and not used recevied data, in case it will not aborted.

relevant links:

https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal

https://developer.mozilla.org/en-US/docs/Web/API/AbortController



to run locally

1. in both backend and frontend run "npm i"
2. in both backend and frontend run "npm start"

that's all :)



codesandbox frontend:
https://codesandbox.io/s/books-frontend-forked-30xt8x

codesandbox backend:
https://codesandbox.io/s/books-server-forked-ep8d8z