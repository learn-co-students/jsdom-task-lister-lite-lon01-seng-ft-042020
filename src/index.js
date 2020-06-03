document.addEventListener("DOMContentLoaded", () => {
  
  //-----------------------------------
  // form section
  //-----------------------------------
  
  // select the element
  const taskForForm = document.querySelector("#create-task-form");
  
  // add the event listener
  taskForForm.addEventListener("submit", function (event) {

  // make sure to prevent the default behaviour! to prevent just refresh the page
  event.preventDefault();
  // debugger
  // logs event to console to see what we got
  console.log(event);

  // find the text from the form and set as a variable
  const taskText = event.target[0].value;

  // create the user dom node, create li tag from user input
  const taskDOMNodeLi = document.createElement("li");

  // set the text of the li to the variable of the user input
  taskDOMNodeLi.innerText = taskText;
  console.log(taskDOMNodeLi);

  // Put it in the DOM select the element for li
  const taskList = document.querySelector('#tasks');
  //add the li to the list 
  taskList.appendChild(taskDOMNodeLi);

  
  // Add any event listeners you desire to have on this element

  // Create the button to remove
  const buttonRemove = document.createElement("button");
  buttonRemove.innerHTML = "x";
  // append somewhere
    taskDOMNodeLi.appendChild(buttonRemove);
  // add event handler - REMOVE
  buttonRemove.addEventListener("click", function () {
    taskDOMNodeLi.remove();
    alert("You deleted this task");
  
});
});
});