# Pure autocomplete in 100 minutes ✨

This is a challenge to test how much I can do within 75 minutes.

The task was to make the autocomplete using only pure react installation without any other libraries

The result after 75 minutes you can see on the commit `7d0c3c3`.

But I've decided to spend a bit more and finish the styling and implement the ability to select one of the options. So, all together the development took 100 minutes.

And 100 minutes just sounds cooler than 75 😎

## What I get 💡

![demo](./docs/demo.gif)

If you want to check the code, they are only few files to read there:

- [App.js](./src/App.js)
- [App.css](./src/App.css)
- [retrieveOptions.js](./src/data/retrieveOptions.js)

## How to run 🛠️

```shell
yarn install && yarn start
```

## What should be done the other way? 🕵️

Oh, a lot, they are just 100 minutes!

1. Add debounce: not create new requests while the user just typing
2. Care about a11y, especially navigation through the elements using keyboard arrows
3. Split code from App.js to be in a separate component
4. It is better to use the functional components nowadays. But it was just part of the task to use the classes
5. Add tests using `@testing-library/react`
6. Styling is a very basic one, it is better to use something like styled-components or jss
