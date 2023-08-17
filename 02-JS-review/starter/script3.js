// ASYNC PROMISES
const url = "https://jsonplaceholder.typicode.com/todos";

/* fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data)); */

// ASYNC AWAIT
async function getTodos() {
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data);

  return data;
}

const todos = getTodos();

console.log(todos);
// get promise because line 17 is synchronous code, so promise hasn't been fulfilled by the time todos is assigned. In React this isn't a problem bc we'll set state within the getTodos function.

const fixedTodos = await getTodos();
console.log(fixedTodos);
// adding await turns this into async code.
