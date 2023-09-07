# JavaScript Concepts

- **Hoisting:** Variables and functions are hoisted to the top of their containing scope during compilation.

- **Window Object:** The `window` object provides features to JavaScript from the browser environment, including functions like `alert()`, `prompt()`, and more.

- **`var` in the `window` Object:** Variables declared with `var` are added to the global `window` object and are accessible globally.

- **Browser Context API:** The browser provides the execution context for JavaScript, including the call stack, heap memory, and the `window` object.

- **Stack:** The call stack in JavaScript handles the order of execution of functions, ensuring that one function finishes before the next one is called.

- **Heap Memory:** Heap memory stores data and objects that persist beyond the scope of individual function calls.

- **Execution Context:** An execution context is a container where function code is executed and contains information about variables, functions, and lexical environment (which elements the context can access) inside the parent function.

- **Spread Operator (`...`):** The spread operator allows you to spread elements of an iterable (e.g., an array) into another, making it useful for copying, merging, or manipulating data.

- **Rest Operator:** The rest operator (`...`) allows you to collect multiple elements into a single array. It's often used in function parameters to handle an arbitrary number of arguments or to collect remaining elements into an array.

- **Destructuring:** Destructuring allows you to extract values from arrays or properties from objects and assign them to variables. It provides a convenient way to access and work with the individual elements or properties.

- **Truthy and Falsy Values:** In JavaScript, values are considered falsy if they are `0`, `false`, `undefined`, `null`, or `NaN`. All other values are considered truthy.

- **`for...in` Loop:** The `for...in` loop is used to iterate over the properties of an object.

- **Asynchronous JavaScript:** JavaScript is not inherently asynchronous; it runs on a single thread. Asynchronous operations are managed using callbacks, Promises, and async/await. The main stack contains synchronous code, and the event loop handles asynchronous code execution.

- **Event Loop:** The event loop is a mechanism that moves processes from the side stack to the main stack when the latter is empty. It checks the side stack for results and automatically manages asynchronous operations.

- **Concurrency:** Concurrency refers to multiple tasks being executed in overlapping time intervals, managed by the event loop in JavaScript.

- **Parallelism:** Parallelism is the simultaneous execution of multiple tasks using different processors and cores, typically outside the scope of JavaScript itself.

- **Throttling:** Throttling is the control of the rate or frequency of the execution of a piece of code to manage performance or prevent excessive resource consumption.


- **Higher Order Function:** Function taking another function in the arguments or a function that returns a function for e.g foreach

- **First Class Function:** Function are treated like normal variable and can be stored inside a variable.

- **iife (immediately invoked function expression)** An IIFE in JavaScript is like a self-contained function that runs as soon as it's defined, providing a way to encapsulate code and prevent variable pollution in the global scope make variables private.
