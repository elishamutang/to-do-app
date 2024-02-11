// Home (or All Lists page)
// Default page users get directed to. An overview of all Lists/Projects.
import { checkFormInput } from "./createNewList";

// Add new task and displays them.
export default function addMyTask(task, fieldset) {

    const newTaskDiv = document.createElement('div');
    newTaskDiv.className = 'toDoDiv';

    const newCheckBox = document.createElement('input');
    newCheckBox.type = 'checkbox';
    newCheckBox.className = 'toDoObj';
    newCheckBox.id = 'task1';

    const newLabel = document.createElement('label');
    newLabel.htmlFor = 'task1';
    newLabel.textContent = task.value;

    newTaskDiv.append(newCheckBox);
    newTaskDiv.append(newLabel);

    fieldset.append(newTaskDiv);

}