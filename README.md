# Recap Tasks

## Task 1

👉 Use recursion in the `calculateExponent` function in [task-1/index.js](task-1/index.js) to take in a base number and an exponent and calculate the resulting number. The exponent of a number says how many times the base number is used as a factor.

For example, 4<sup>2</sup>, where 4 is the base number and 2 is the exponent, works out to 4 _ 4, or 16. Another example: 4<sup>3</sup> works out to 4 _ 4 \* 4, or 64. If you wanted to use your function to solve these, you'd call it like `calculateExponent(4,2)` or `calculateExponent(4,3)`.

🧪 You can run the tests in this folder to check your work.

## Task 2

The `makeSneakyCounter` function in [task-2/index.js](task-2/index.js) contains a variable `secretCount` that's contained within a closure. When `makeSneakyCounter` is called, it should return an object with three methods:

- The `.increment` method should use `changeBy` to add 1 to `secretCount`.
- The `.decrement` method should use `changeBy` to subtract 1 from `secretCount`.
- The `.showCurrentValue` method should return the current value of `secretCount`.

👉 Write the code for these three methods.

🧪 You can run the tests in this folder to check your work.

## Task 3

👉 Complete all tasks within `task-3/index.ts`.

## Task 4

👉 Within the `task-4` folder, type annotations are missing and hence the app is currently broken. Complete the following to get the app working:

1. Add type annotations for the `App` function (your annotations should cover the component's props and return value).
2. If you think it's needed, add a type annotation for `useState` in the `App` component.
3. Add type annotations for `CountViewer` function (your annotations should cover the component's props and return value).
