document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const createTaskForm = document.getElementById("create-task-form");
  const taskListUl = document.getElementById("list");

  createTaskForm.addEventListener("submit", function(event){
    event.preventDefault();
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target[0]);
    console.log(event.target[0].value);
    const taskText = event.target[0].value;
    const taskPriority = event.target[1].value;


    const newTaskLi = document.createElement("li");
    newTaskLi.innerText = taskText;

    newTaskLi.style.color = taskPriority;        

    //  delete button
    
    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.addEventListener("click", function(event){
      event.target.parentElement.remove();
    });
    deleteTaskButton.innerText = "Delete";
    deleteTaskButton.className = "task-button"
    newTaskLi.appendChild(deleteTaskButton);

    // edit button

    const editTaskButton = document.createElement("button");
    editTaskButton.addEventListener("click", function(event){
      const thisTask = event.target.parentElement
      
      thisTask.toggleAttribute("contenteditable");
    });
    editTaskButton.innerText = "Edit";
    editTaskButton.className = "task-button"
    newTaskLi.appendChild(editTaskButton);
    
    const SubListUl = document.getElementById(taskPriority);
    SubListUl.appendChild(newTaskLi);
    console.log(newTaskLi.attributes);
    
  });









  const clearTasksButton = document.getElementById("clear-tasks");

  clearTasksButton.addEventListener("click", function(event){
    const allTaskLis = document.querySelectorAll("li");
    // debugger;
    allTaskLis.forEach(element => {
      element.remove();      
    });
  });









});
