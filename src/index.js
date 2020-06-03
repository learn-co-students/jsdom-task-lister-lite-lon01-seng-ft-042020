document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //Find the whole form
  const taskForm = document.querySelector('#create-task-form')

  //Add event listener method on the element we found
  //This method takes 2 arguments 
  //1st: The event - the action that happens to the element
  //2nd: A function, that takes the argument of the event that's happened
  //& tells us what to do with the info we have gotten 
  taskForm.addEventListener("submit", function(event) {
    //Our code goes here
    console.log(event)
    //Stops the page from reloading immediately, so we can play around with the code
    event.preventDefault() 
    let textWritten = event.target[0].value
    //debugger;
  } )

});

