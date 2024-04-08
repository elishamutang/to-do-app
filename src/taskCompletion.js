// Disables (or enables) inputs for task details, when checkbox is checked or not.

import saveToLocal, { saveUserData } from "./saveToLocalStorage";
import { updateSidebarListDisplay } from "./updateSidebarCount";

export function taskCompletion(taskDiv, taskDetailsContainer, currentObj) {
    
    // Fetch latest allObjs object.
    const allObjs = localStorage.getItem("allObjs") ? JSON.parse(localStorage.getItem("allObjs")) : {};

    // Get class list of taskDiv and taskDetailsContainer
    const taskDivClassList = Array.from(taskDiv.classList);
    const taskDetailsContainerClassList = Array.from(taskDetailsContainer.classList);

    // Get all taskDetailsContainer inputs/buttons to disable them upon checking checkbox.
    const getInputs = Array.from(taskDetailsContainer.getElementsByTagName('input'));
    const getButtons = Array.from(taskDetailsContainer.getElementsByTagName('button'));

    getInputs.forEach((input) => input.disabled = true);
    getButtons.forEach((button) => button.disabled = true);

    // Prepare delete task button for completed items.
    const deleteTaskBtn = prepareTaskDeleteBtn();

    // Flagging variable to indicate task completion status.
    let isComplete = true;

    // Checking the checkbox.
    if(!taskDivClassList.includes('complete')) {

        console.log('complete');

        taskDiv.className += ' complete';
        taskDetailsContainer.className += ' disable';

        // Append clickable delete button.
        taskDiv.append(deleteTaskBtn);

        // Option to delete completed tasks.
        deleteTaskBtn.addEventListener('click', () => {

            // Removes taskDiv and taskDetailsContainer upon clicking delete button.
            taskDiv.remove();
            taskDetailsContainer.remove();

            Object.entries(allObjs).forEach(([key], idx) => {

                if(currentObj.taskId === key) {

                    // Splices allObjs, returns an object that only includes tasks that were not deleted.
                    const updatedObj = objectSplice(allObjs, idx);

                    console.log(updatedObj);

                    // Overwrite allObjs in localStorage.
                    saveToLocal(updatedObj, "allObjs");

                    // Updates display in sidebar.
                    updateSidebarListDisplay();

                }

            })

        })


    } else {

        // Un-checking the checkbox.
        console.log('not complete');

        isComplete = false;

        taskDiv.className = taskDivClassList.filter(value => value !== 'complete').join(' ');
        taskDetailsContainer.className = taskDetailsContainerClassList.filter(value => value !== 'disable').join(' ');

        getInputs.forEach((input) => input.disabled = false);
        getButtons.forEach((button) => button.disabled = false);

        taskDiv.querySelector('button').remove(); // Remove delete task button.

    }

    if(!(currentObj.taskId === taskDetailsContainer.dataset.task)) {

        taskDetailsContainer.className = taskDetailsContainerClassList.filter(value => value !== 'disable').join(' ');
        
    }

    // Save in localStorage.
    updateCurrentObj(isComplete, currentObj, allObjs);
    
}


export function prepareTaskDeleteBtn() {

    // Prepare delete task button for completed items.
    const deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.className = 'deleteTask';
    deleteTaskBtn.type = 'button';
    deleteTaskBtn.innerHTML = "<i class='bx bxs-x-circle bx-rotate-90'></i>";

    return deleteTaskBtn;

}



function updateCurrentObj(isComplete, currentObj, allObjs) {

    Object.keys(allObjs).forEach((key) => {

        if(key === currentObj.taskId) {

            if(!isComplete) {

                currentObj.completed = false;

            } else {

                currentObj.completed = true;

            }

            saveUserData(currentObj, "completed");

        }

    })

}


function objectSplice(obj, startIdx, endIdx=1) {

    let newObj = {};

    Object.entries(obj).forEach(([key, value], idx) => {

        if(idx >= startIdx && idx - startIdx < endIdx) {

            return;

        } else {

            newObj[key] = value;

        }

    })

    // Update taskIDs and object keys.
    newObj = updateTaskId(newObj);

    return newObj;

}


function updateTaskId(allObjs) {

    const getAllTaskDivs = Array.from(document.getElementsByClassName('toDoDiv')).reverse();

    // Update taskDiv and input IDs.
    getAllTaskDivs.forEach((div, idx) => {

        div.id = `taskDiv-${idx+1}`;

        div.querySelector('input').id = `task-${idx+1}`;

    })

    // Update taskId property and key for each object.
    let num = 1;

    allObjs = Object.keys(allObjs).map((key, idx) => {

        allObjs[key].taskId = `taskDiv-${num + idx}`;

        const newKey = allObjs[key].taskId;

        return { [newKey] : allObjs[key] };

    })

    const newObj = Object.assign({}, ...allObjs);

    return newObj;

}