# Study - Errors and Async in JavaScript

This project serves as a study guide for fundamental JavaScript concepts, focusing on error handling and asynchronous operations.

## Project Objectives
- Understand and implement error handling with `throw new Error()`.
- Learn how to capture HTML elements using `document.getElementById`.
- Explore the `try...catch` block for handling exceptions.
- Study and simulate asynchronous operations with `setTimeout`.
- Learn and differentiate between `async`, `Promise`, and callbacks.

## Features
- Error handling examples using `throw` and `try...catch`.
- HTML element manipulation using DOM methods.
- Simulated data fetch using `setTimeout` to demonstrate asynchronous operations.
- Introduction to `async/await`, Promises, and callback functions.

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/Lucas-I-Marciano/04.studyErrorsAndAsync
   ```
2. Open the project folder:
   ```bash
   cd 04.studyErrorsAndAsync
   ```
3. Open `index.html` in your browser to view examples.

## Concepts Covered
### Error Handling
- Throwing errors using `throw new Error()`.
- Managing exceptions with `try...catch`.

### HTML Element Manipulation
- Using `document.getElementById()` to select and manipulate HTML elements.

### Asynchronous Operations
- **setTimeout:** Simulating asynchronous tasks.
- **Promises:** Understanding their states and chaining.
- **Async/Await:** Writing cleaner asynchronous code.
- **Callbacks:** Understanding their role and limitations.

## Example Code Snippet
```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulate success or failure
      success ? resolve("Data fetched successfully!") : reject("Failed to fetch data.");
    }, 2000);
  });
}

async function loadData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

loadData();
```

## Author
[Lucas I. Marciano](https://github.com/Lucas-I-Marciano)

## License
This project is for educational purposes only and does not include a specific license.
