document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //Find the whole form
  const taskForm = document.querySelector('#create-task-form')

  //Add event listener method on the form element we found
  //This method takes 2 arguments 
  //1st: The event - the action that happens to the element
  //2nd: A function, that takes the argument of the event that's happened
  //& tells us what to do with the info we have gotten 
  taskForm.addEventListener("submit", function(event) {
  
    //Stops the page from reloading immediately, so we can play around with the code
    event.preventDefault() ;
    let textWritten = event.target[0].value;
    //debugger;
    //Find the ul that we will add info to 
    const findUl = document.getElementById('tasks');
    
    //Create the list element
    const createLi = document.createElement('li');
    
    //Add the given text from the user as the value of the <li>
    createLi.innerHTML = textWritten;
    
    //Add list element to the ul we found
    findUl.appendChild(createLi);

    //Create the button for each list element
    const createButton = document.createElement('button');

    //Make the button an x
    createButton.innerHTML = "x";

    //Add a class attribute to to the button tag
    //The value is the text given by the user
    createButton.setAttribute("class", `${textWritten}`);

    //Add the button to the <li> element
    createLi.appendChild(createButton);

    //Create an event listener on the button 
    //Which removes the <li> element when it is clicked
    //Q: Why dont we need a preventDefault in this event
    createButton.addEventListener("click", function (event) {
      event.target.parentNode.remove();
    });

  })

});

