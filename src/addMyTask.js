// Home (or All Lists page)
// Default page users get directed to. An overview of all Lists/Projects.
import { isToday, isTomorrow, isFuture } from "date-fns";
import CreateToDoObj from "./taskDetails";

// Add new task and displays them.
export default function addMyTask(task, fieldset) {

    // Creates new task
    const newTask = createTaskWrapper(task.value);

    fieldset.insertAdjacentElement('afterbegin', newTask); // Always insert tasks at the top.

    // Create new object
    return new CreateToDoObj(task.value, newTask.id);

}


function createTaskWrapper(taskValue) {

    // Creates new task in overview div.
    const newTaskDiv = document.createElement('div');
    newTaskDiv.className = 'toDoDiv';
    
    // Append text content as a text node.
    const newTaskDivTextNode = document.createTextNode(taskValue);

    const newCheckBox = document.createElement('input');
    newCheckBox.type = 'checkbox';
    newCheckBox.className = 'toDoObj';


    // Check number of To Do's.
    updateNumOfToDos(newCheckBox, newTaskDiv);

    newTaskDiv.append(newCheckBox);
    newTaskDiv.append(newTaskDivTextNode);

    return newTaskDiv;

}


function updateNumOfToDos(newCheckBox, newTaskDiv) {

    // Check for number of to do's inside Today fieldset.
    const existingDivs = document.getElementsByClassName('toDoDiv');

    let divNum = 1;

    // Updates checkbox ID and label for attribute based on number of existing to do's.
    if(existingDivs.length == 0) {

        newTaskDiv.id = `taskDiv-${divNum}`;
        newCheckBox.id = `task-${divNum}`;

    } else {

        const lastdivNum = existingDivs.length;

        newTaskDiv.id = `taskDiv-${lastdivNum+divNum}`
        newCheckBox.id = `task-${lastdivNum+divNum}`;

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