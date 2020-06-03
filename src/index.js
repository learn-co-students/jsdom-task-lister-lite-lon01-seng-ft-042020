document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

// type a task into the field
let taskform = document.querySelector('#create-task-form');
let listItems = document.querySelector('#tasks');
//  add an event listener
taskform.addEventListener("submit", addTasks);

// create the function on the event listener 
function addTasks(e) {
  let text = document.createElement('li');

  e.preventDefault()
  const target = e.target[0].value;
  const priority = e.target[1].value;

  if (priority === 'red') {text.style.color = 'red'}
  if (priority === 'yellow') {text.style.color = 'yellow'}
  if (priority === 'green') {text.style.color = 'green'}
  
  text.addEventListener("dblclick", function (e) {
    e.target.remove();
  });

 

  text.textContent = target;
  // create a new button
  const edit = document.createElement("button")
  // add the button text
  edit.innerText = "Edit this item"
  // add an event listener when clicked
  edit.addEventListener('click', function(e) {
    // create a new edit form 
    const newForm = document.createElement('form')
    // attach this to 
    newForm.append(document.createElement('input'))
    text.append(newForm)
  })
  text.append(edit);
  
  listItems.append(text);
  document.querySelector("#create-task-form").reset()

}


