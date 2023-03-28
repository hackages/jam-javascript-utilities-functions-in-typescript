## The `last` function

### Before starting: 
    - Install all dependencies with `npm install`
    - Run your tests in the terminal with `npm t` or `yarn test`
    - Optionally, you can run the tests in watch mode with `npm t -- --watch` or `yarn test --watch`

### Todo


- [ ] Implement the `last` function in the `src/03-last.js`file
- [ ] The `last` function takes an array and an optional number as parameters, and returns the n last element of that collection.

```js
const array = ["apple", "orange", "pear", "banana"];
console.log(last(array));
// Output: "banana"

console.log(last(array, 2));
// Output: "[pear, banana]"
```

### Important note:
You cannot modify the tests suites. If you find an issue, please, let us know via email (007@hackages.io) or via the platform. 

The goal of these exercises is to teach you how to write code in JavaScript as you will in real world projects.