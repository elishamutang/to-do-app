// Disables (or enables) inputs for task details, when checkbox is checked or not.

import saveToLocal, { saveUserData } from "./saveToLocalStorage";
import { updateSidebarListDisplay } from "./updateSidebarCount";

export function taskCompletion(taskDiv, taskDetailsContainer, currentObj) {
    
    // Fetch latest allObjs object.
    let allObjs = localStorage.getItem("allObjs") ? JSON.parse(localStorage.getItem("allObjs")) : {};

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

        // console.log('complete');

        taskDiv.className += ' complete';

        if(taskDiv.id === taskDetailsContainer.dataset.task) {

            taskDetailsContainer.className += ' disable';

            // Remove corresponding taskDetailsContainer when viewing task details for a particular task.
            deleteTaskBtn.addEventListener('click', () => {

                taskDetailsContainer.remove();

            });

        }

        // Append clickable delete button.
        taskDiv.append(deleteTaskBtn);

        // Option to delete completed tasks.
        deleteTaskBtn.addEventListener('click', () => {

            deleteCompletedTask(taskDiv);

        });


    } else {

        // Un-checking the checkbox.
        // console.log('not complete');

        isComplete = false;

        taskDiv.className = taskDivClassList.filter(value => value !== 'complete').join(' ');

        if(taskDiv.id === taskDetailsContainer.dataset.task) {

            taskDetailsContainer.className = taskDetailsContainerClassList.filter(value => value !== 'disable').join(' ');

        }

        getInputs.forEach((input) => input.disabled = false);
        getButtons.forEach((button) => button.disabled = false);

        taskDiv.querySelector('button').remove(); // Remove delete task button.

    }

    // Save in localStorage.
    updateCurrentObj(isComplete, currentObj, allObjs);
    
}


export function deleteCompletedTask(taskDiv) {

    // Fetch latest saved object.
    const allObjs = JSON.parse(localStorage.getItem("allObjs"));

    // Removes taskDiv upon clicking delete button.
    taskDiv.remove();

    Object.entries(allObjs).forEach(([key], idx) => {

        if(taskDiv.id === key) {

            const getAllDivs = Array.from(document.getElementsByClassName('toDoDiv')).reverse();

            // Splices deleted task from allObjs, renames each remaining item and returns an object that only includes tasks that were not deleted.
            const updatedObj = updateTaskId(removeTaskFromObj(allObjs, idx), getAllDivs);

            // Overwrite allObjs in localStorage.
            saveToLocal(updatedObj, "allObjs");

            // Updates display in sidebar.
            updateSidebarListDisplay();

        }

    })

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


export function removeTaskFromObj(obj, startIdx, endIdx=1) {

    let newObj = {};

    Object.entries(obj).forEach(([key, value], idx) => {

        if(idx >= startIdx && idx - startIdx < endIdx) {

            return;

        } else {

            newObj[key] = value;

        }

    })

    return newObj;

}


export function updateTaskId(allObjs, getAllDivs) {

    // Identify context of div.
    const divId = getAllDivs.length !== 0 ? getAllDivs[0].id.split("-") : null;

    // Update taskDiv and input IDs.
    getAllDivs.forEach((div, idx) => {

        div.id = `${divId[0]}-${++idx}`;

        const checkboxId = div.querySelector('input').id.split("-");
        div.querySelector('input').id = `${checkboxId[0]}-${idx}`;

    })

    // Update taskId property and key for each object.
    allObjs = Object.keys(allObjs).map((key, idx) => {

        allObjs[key].taskId = `${divId[0]}-${++idx}`;

        const newKey = allObjs[key].taskId;

        return { [newKey] : allObjs[key] };

    })

    const newObj = Object.assign({}, ...allObjs);

    return newObj;

}