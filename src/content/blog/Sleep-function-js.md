---
title: 'Javascript sleep function'
description: 'In JavaScript, you can create a sleep function using the setTimeout function. This function allows you to delay the execution of a piece of code for a specified amount of time.'
pubDate: 'Oct 07 2023'
heroImage: '/sleep-function-js.jpeg'
---


In JavaScript, you can create a sleep function using the setTimeout function. This function allows you to delay the execution of a piece of code for a specified amount of time. Here's an example of how you can create a sleep function:

<br />

```javascript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```

<br />

In the code above, we define a sleep function that takes a parameter ms, which represents the number of milliseconds to sleep. Inside the function, we use the setTimeout function to set a timer that will call the resolve function after the specified number of milliseconds.

<br />

You can use this sleep function in an async context, as it returns a promise. Here's an example of how to use it:


<br />

```javascript
async function example() {
  console.log("Start");
  await sleep(2000); // Sleep for 2 seconds (2000 milliseconds)
  console.log("End");
}

example();

```


<br />

**Thank you for reading!**