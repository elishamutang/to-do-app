// Home (or All Lists page)
// Default page users get directed to. An overview of all Lists/Projects.
import ToDoObjs from "./createToDo";

// Add new task and displays them.
export default function addMyTask(task, fieldset) {

    // Creates new task in overview div.
    const newTaskDiv = document.createElement('div');
    newTaskDiv.className = 'toDoDiv';

    const newCheckBox = document.createElement('input');
    newCheckBox.type = 'checkbox';
    newCheckBox.className = 'toDoObj';

    const newLabel = document.createElement('label');
    newLabel.textContent = task.value;

    // Check number of To Do's.
    updateNumOfToDos(newCheckBox, newLabel);

    newTaskDiv.append(newCheckBox);
    newTaskDiv.append(newLabel);

    fieldset.append(newTaskDiv);

    // Set up object.
    const testToDo = new ToDoObjs(task.value);
    console.log(testToDo);

}

function updateNumOfToDos(newCheckBox, newLabel) {

    // Check for number of to do's inside Today fieldset.
    const existingLables = document.querySelectorAll('#today > div > label');
    let labelNum = 1;

    // Updates checkbox ID and label for attribute based on number of existing to do's.
    if(existingLables.length == 0) {
        newCheckBox.id = `task-${labelNum}`;
        newLabel.htmlFor = `task-${labelNum}`;
    } else {
        const lastLabelNum = existingLables.length;
        newCheckBox.id = `task-${labelNum+lastLabelNum}`;
        newLabel.htmlFor = `task-${labelNum+lastLabelNum}`;
    }

}