document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const createTaskForm = document.getElementById("create-task-form");
  const taskListUl = document.getElementById("list");
  const priorityColors = ["green", "orange", "red" ];
  const priorityKeys = ["Low", "Medium", "High" ];


  createTaskForm.addEventListener("submit", function(event){
    event.preventDefault();
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target[0]);
    const taskText = event.target[0].value;
    const taskPriority = event.target[1].value;
    const taskDueDate = event.target[2].value;

    console.log(taskDueDate)

// --------------------------------------------------------------------------
// Separate lists...
// --------------------------------------------------------------------------


    // const newTaskLi = document.createElement("li");
    // newTaskLi.innerText = taskText;

    // newTaskLi.style.color = priorityColors[taskPriority];        

    // //  delete button
    
    // const deleteTaskButton = document.createElement("button");
    // deleteTaskButton.addEventListener("click", function(event){
    //   event.target.parentElement.remove();
    // });
    // deleteTaskButton.innerText = "Delete";
    // deleteTaskButton.className = "task-button"
    // newTaskLi.appendChild(deleteTaskButton);

    // // edit button

    // const editTaskButton = document.createElement("button");
    // editTaskButton.addEventListener("click", function(event){
    //   const thisTask = event.target.parentElement
      
    //   thisTask.toggleAttribute("contenteditable");
    // });
    // editTaskButton.innerText = "Edit";
    // editTaskButton.className = "task-button"
    // newTaskLi.appendChild(editTaskButton);
    
    // const SubListUl = document.getElementById(priorityColors[taskPriority]);
    // SubListUl.appendChild(newTaskLi);
    // console.log(newTaskLi.attributes);



// --------------------------------------------------------------------------
// Table mode!
// --------------------------------------------------------------------------

const deleteRowButton = document.createElement("button");
deleteRowButton.addEventListener("click", function(event){
  console.log(event.target.parentElement.parentElement);
  event.target.parentElement.parentElement.remove();
});
deleteRowButton.innerText = "Delete";

const newTaskRow = document.createElement("tr");
newTaskRow.className = "task-row"

const newTaskDescriptionSection = document.createElement("td");
newTaskDescriptionSection.innerText = taskText;
newTaskRow.appendChild(newTaskDescriptionSection);

const newTaskPrioritySection = document.createElement("td");
newTaskPrioritySection.innerText = priorityKeys[taskPriority];
newTaskPrioritySection.style.color = priorityColors[taskPriority];
newTaskRow.appendChild(newTaskPrioritySection);

const newTaskDateSection = document.createElement("td");
newTaskDateSection.innerText = taskDueDate;
newTaskRow.appendChild(newTaskDateSection);

const newTaskButtonSection = document.createElement("td");
newTaskButtonSection.appendChild(deleteRowButton);
newTaskRow.appendChild(newTaskButtonSection);

const taskTable = document.getElementById("task-table")
taskTable.appendChild(newTaskRow)






    
  });


  const clearTasksButton = document.getElementById("clear-tasks");
  clearTasksButton.addEventListener("click", function(event){    
    const allTaskRows = document.querySelectorAll(".task-row");
    allTaskRows.forEach(element => {
      element.remove();      
    });

    // // List version------------
    // const allTaskLis = document.querySelectorAll("li");
    // // debugger;
    // allTaskLis.forEach(element => {
    //   element.remove();      
    // });

  });

  const sortTables = document.querySelectorAll("table.sortable-table");
    
  sortTables.forEach(table => {
    const headersCollection= table.querySelectorAll("th");
    for (let i = 0; i < headersCollection.length; i++){
      const headerElement = headersCollection[i];
      headerElement.addEventListener("click", function(event){
        sortTable(i, table);
      })
    }

        
  });


  function sortTable(sortColumnIndex, table){

    let rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    let n = sortColumnIndex;
  
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }



  };


});
