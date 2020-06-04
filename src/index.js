document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // find all of the things we need (in this case, a form) and set this to a variable
  const form = document.querySelector("#create-task-form")
  // First thing is to locate what we're amending on the page
  // find the list and also set to a variable
  const tasks = document.querySelector("#tasks")
  // Second thing is creating an element that performs the actions we want
  form.addEventListener("submit", () => {
    event.preventDefault()
    const li = document.createElement("li")
    // Then we want to take the element/variable we've just made and set the value to it
    li.innerText = event.target[0].value
    // adding new entries to the list 
    tasks.appendChild(li)
    // 'tasks' is the ul (list format) that's already on the page
    // adding the button to delete from the list on the form 
    const button = document.createElement("button")
    // appendChild can only append one thing at a time whereas append can append multiple things at a time 
    button.innerText = "x"
    li.appendChild(button)
    // Fourth thing is to append the element
    button.addEventListener("click", () => li.remove())
  
    form.reset()
  })



  // (event.target[0].value)
});
