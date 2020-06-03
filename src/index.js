document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

// type a task into the field
let taskform = document.querySelector('#create-task-form');

let listItems = document.getElementById('tasks');
//  submit the task 
taskform.addEventListener("submit", addTasks);


function addTasks(e) {
  let text = document.createElement('li');

  e.preventDefault()
  const target = e.target[0].value;
  const priority = e.target[1].value;

  if (priority === 'red') {text.style.color = 'red'}
  if (priority === 'yellow') {text.style.color = 'yellow'}
  if (priority === 'green') {text.style.color = 'green'}
  
  text.addEventListener("click", function (e) {
    e.target.remove();
  });
  text.textContent = target;

  listItems.append(text);
  document.querySelector("#create-task-form").reset()

}

