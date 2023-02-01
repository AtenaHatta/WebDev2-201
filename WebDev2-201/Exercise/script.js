// The task in this challenge is as follows:
// When the  button is clicked, and the text of the text box is not empty:
// Create a div task element with the class set to task and the text equal to the value of the input box.
// Create a delete button element with the id set to delete and the class set to fas fa-trash-alt. This class corresponds to the trashcan icon in CSS.

// Create a done button element with the id set to done and the class set to fas fa-check. This class corresponds to the check icon in CSS.
// Insert the delete and the done button elements at the  of the newly created task element.
// Insert the div task element at the  of the div element with class notCompleted.
// When the user clicks on one of the  button elements nested within a task,  the corresponding  element from the webpage.
// When the user clicks on one of the  button elements nested within a task,  the corresponding  element from the  list to the end of the  list.
// Additionally, remove the done button element from the corresponding task element.

// Optional
// When the user clicks on one of the done button elements, the corresponding parent task element from the “To-do” list fades out (1 second) and fades back in (1 second) to the end of the “Done” list.
// When the user clicks on one of the delete button elements, the corresponding parent task element fades out (1 second) and is deleted from the webpage.


$(document).ready(function () {
  // code goes here

  // when click "+"
  $(".fa-plus").click(function (event) {
    const inputValue = $(".textBox").val();

    if (!inputValue) {
      alert("Error : Please enter your text");
    } else {
      $(".notCompleted").append(
        `<div class="task">${inputValue}
        <span id="done" class="fas fa-check"></span>
        <span id="delete" class="fas fa-trash-alt"></span>
        </div>`
      );
    }
    $(".textBox").val("");

    // To Do ⇒ Done
    $(".fa-check").click(function () {
      const checkToDo = $(this).parent();
      checkToDo.fadeIn(1000, function(){
        checkToDo.hide().appendTo('.completed').fadeIn(1000)
      })
    });

    // delete
    $(".fa-trash-alt").click(function () {
      const deleteToDo = $(this).parent();
      deleteToDo.fadeOut(1000, function () {
        deleteToDo.remove();
      });
    });
  });
});
