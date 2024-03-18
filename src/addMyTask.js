// Home (or All Lists page)
// Default page users get directed to. An overview of all Lists/Projects.
import { isToday, isTomorrow, isFuture } from "date-fns";
import CreateToDoObj from "./taskDetails";

// Add new task and displays them.
export default function addMyTask(task, fieldset) {

    // Creates new task
    const newTask = createTaskWrapper(task.value);

    fieldset.append(newTask);

    // Create new object
    return new CreateToDoObj(task.value);

}


function createTaskWrapper(taskValue) {

    // Creates new task in overview div.
    const newTaskDiv = document.createElement('div');
    newTaskDiv.className = 'toDoDiv';

    const newCheckBox = document.createElement('input');
    newCheckBox.type = 'checkbox';
    newCheckBox.className = 'toDoObj';

    const newLabel = document.createElement('label');
    newLabel.textContent = taskValue;

    // Check number of To Do's.
    updateNumOfToDos(newCheckBox, newLabel, newTaskDiv);

    newTaskDiv.append(newCheckBox);
    newTaskDiv.append(newLabel);

    return newTaskDiv;

}


function updateNumOfToDos(newCheckBox, newLabel, newTaskDiv) {

    // Check for number of to do's inside Today fieldset.
    const existingDivs = document.getElementsByClassName('toDoDiv');

    let labelNum = 1;

    // Updates checkbox ID and label for attribute based on number of existing to do's.
    if(existingDivs.length == 0) {

        newTaskDiv.id = `taskDiv-${labelNum}`;
        newCheckBox.id = `task-${labelNum}`;
        newLabel.htmlFor = `task-${labelNum}`;

    } else {

        const lastLabelNum = existingDivs.length;

        newTaskDiv.id = `taskDiv-${lastLabelNum+labelNum}`
        newCheckBox.id = `task-${lastLabelNum+labelNum}`;
        newLabel.htmlFor = `task-${lastLabelNum+labelNum}`;

    }

}

// Move To-Do task based on reminder date set.
export function moveMyTask(currentObj) {

    // Get currentObj element in DOM (assume user does not create a task with the same title)
    const existingToDoTasks = Array.from(document.getElementsByClassName('toDoDiv'));

    for(const task of existingToDoTasks) {

        if(task.textContent === currentObj.title) {

            if(isToday(currentObj.rawReminderDate)) {

                const todayFieldset = document.getElementById('today');

                todayFieldset.append(task);

            } else if(isTomorrow(currentObj.rawReminderDate)) {

                const tomorrowFieldset = document.getElementById('tomorrow');

                tomorrowFieldset.append(task);

            } else if(isFuture(currentObj.rawReminderDate)) {

                const upcomingFieldset = document.getElementById('upcoming');

                upcomingFieldset.append(task);

            } else {

                const todayFieldset = document.getElementById('today');

                todayFieldset.append(task);

            }

        }

    }

}