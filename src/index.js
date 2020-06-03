document.addEventListener("DOMContentLoaded", () => {
  // defined all needed variables
  const taskForForm = document.querySelector("#create-task-form");
  const taskList = document.querySelector('#tasks');

  taskForForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // debugger
    // logs event to console
    console.log(event);

    // find the text from the form and set as a variable
    const taskText = event.target[0].value;
    // create the the li tag from user input
    const taskDOMNodeLi = document.createElement("li");
    // set the text of the li to the variable of the user input
    taskDOMNodeLi.innerText = taskText;
    // add the li to the list
    taskList.appendChild(taskDOMNodeLi);

    const button = document.createElement("button");
    button.innerHTML = "x";

    // 2. Append somewhere
    // const body = document.getElementsByTagName("body")[0];
    taskDOMNodeLi.appendChild(button);

    // 3. Add event handler
    button.addEventListener("click", function () {
      taskDOMNodeLi.remove();
      alert("You deleted this task");
    });

  })
});
