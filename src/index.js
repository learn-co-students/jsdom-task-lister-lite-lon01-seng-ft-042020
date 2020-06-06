document.addEventListener('DOMContentLoaded', () => {
  //-----------------------------------
  // form section
  //-----------------------------------

  // select the element
  const taskForForm = document.querySelector('#create-task-form');

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

    // ------------------------------------------------
    // dropdown menu
    // -----------------------------------------------

    function addOptionSelect() {
      const optionList = document.querySelector('#create-task-form')
      const select = makeOptionSelect()
      optionList.appendChild(select);
    }

    function makeOptionSelect() {
      const select = document.createElement('select');
      select.className = 'option-select';

      const option1 = document.createElement('option');

      option1.textContent = 'high priority';
      // option1.text = optionArray[0];

      const option2 = document.createElement('option');
      option2.textContent = 'medium priority';
      // option2.text = optionArray[1];

      const option3 = document.createElement('option');
      option3.textContent = 'low priority';
      // option3.text = optionArray[2]

      select.appendChild(option1, select[0]);
      select.appendChild(option1, select[1]);
      select.appendChild(option1, select[2]);

      return select;
    }

    // another way !!!
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

    function addOption(optionArray) {
      const optionList = document.querySelector('#main-content');
    }

    // --------------------------------------------------------------
    // Add any event listeners you desire to have on this element
    // -----------------------------------------------------------------

    // Create the button to remove
    const buttonRemove = document.createElement('button');
    buttonRemove.innerHTML = 'x';
    // append somewhere
    taskDOMNodeLi.appendChild(buttonRemove);
    // add event handler - REMOVE
    buttonRemove.addEventListener('click', function () {
      taskDOMNodeLi.remove();
      alert('You deleted this task');
    });
  });
});

/////// }

// function formDropdown(option, addColor) {
//   const div = document.createElement("div");
// div.className = "form-dropdown";
// const optionColor = document.createElement("option");
// optionColor.textContent = option;
// div.appendChild(optionColor);
// return div;

// function addColor(domNode, color) {
//   domNode.style.background = color;
// }

// breedElementLi.addEventListener('mouseover', function (event) {
//   changeColorBackground(breedElementLi, "salmon");
// }
