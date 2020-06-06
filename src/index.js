document.addEventListener('DOMContentLoaded', () => {
  // select the element
  const taskForForm = document.querySelector('#create-task-form');

  //-----------------------------------
  // form section
  //-----------------------------------

  // add the event listener
  taskForForm.addEventListener('submit', function (event) {
    // make sure to prevent the default behaviour! to prevent just refresh the page
    event.preventDefault();
    // debugger
    // logs event to console to see what we got
    console.log(event);

    // find the text from the form and set as a variable
    const taskText = event.target[0].value;

    // create the user dom node, create li tag from user input
    const taskDOMNodeLi = document.createElement('li');

    // set the text of the li to the variable of the user input
    taskDOMNodeLi.innerText = taskText;
    console.log(taskDOMNodeLi);

    // Put it in the DOM select the element for li
    const taskList = document.querySelector('#tasks');
    //add the li to the list
    taskList.appendChild(taskDOMNodeLi);

    // --------------------------------------------------------------
    // Add any event listeners you desire to have on this element
    // -----------------------------------------------------------------

    // Create the button to REMOVE
    const buttonRemove = document.createElement('button');
    buttonRemove.innerHTML = 'x';
    // append somewhere
    taskDOMNodeLi.appendChild(buttonRemove);
    // add event handler - remove
    buttonRemove.addEventListener('click', function () {
      taskDOMNodeLi.remove();
      alert('You deleted this task');
    });

    // ------------------------------------------------
    // dropdown menu section
    // -----------------------------------------------

    function addOptionSelect() {
      const dropdownMenu = document.querySelector('#create-task-form');
      const select = makeOptionSelect();
      dropdownMenu.appendChild(select);
    }

    function makeOptionSelect() {
      const select = document.createElement('select');
      select.className = 'option-select';

      const option1 = document.createElement('option');
      option1.textContent = 'high priority';
      console.log(option1);

      const option2 = document.createElement('option');
      option2.textContent = 'medium priority';
      console.log(option2);

      const option3 = document.createElement('option');
      option3.textContent = 'low priority';
      console.log(option3);

      select.appendChild(option1, select[0]);
      console.log(select);
      select.appendChild(option2, select[1]);
      console.log(select);
      select.appendChild(option3, select[2]);
      console.log(select);

      return select;
    }

    // ????????????? NEED I INVOKE THAT FUNCTION??????? YES :)
    addOptionSelect();

    // another way !!!???????????? doesn't work so far
    // function makeOptionList(optionArray) {
    //   const optionArray = [
    //     'high priority',
    //     'medium priority',
    //     'low priority',
    //   ];

    //   const div = document.createElement('div');
    //   div.className = 'option-list';

    //   const option1 = document.createElement('option');
    //   option1.text = optionArray[0];

    //   const option2 = document.createElement('option');

    //   option2.text = optionArray[1];

    //   const option3 = document.createElement('option');

    //   option3.text = optionArray[2];

    //   div.appendChild(option1, div[0]);
    //   div.appendChild(option1, div[1]);
    //   div.appendChild(option1, div[2]);

    //   return div;
    // }

    // -----------------------------------------------------------------
    // determinate the color of the text in the list: red for high priority, yellow for medium, green for low
    //-----------------------------------------------------------------------------

    option1.addEventListener('click', function (event) {
      changeColorText(option1);
    });

    option2.addEventListener('click', function (event) {
      changeColorText(option2);
    });

    option3.addEventListener('click', function (event) {
      changeColorText(option3);
    });

    function changeColorText(option) {
      if (option === option1) {
        taskDOMNodeLi.style.color = 'red';
      } else if (option === option2) {
        taskDOMNodeLi.style.color = 'yellow';
      } else option === option3;
      taskDOMNodeLi.style.color = 'green';
    }

    // ---------------------------------------------------------
    // implement a sorting functionality that displays the
    // tasks ascending or descending order based on priority
    // ---------------------------------------------------------

    //-----------------------------------------------------------
    // additional input field for date 
    // ------------------------------------------------------------
        const additionalInputField = document.createElement("input")
        // additionalInputField.text = ....?
        //
    //-------------------------------------------------------------
    // ability to edit task
    //-------------------------------------------------------------
    
  });
});
