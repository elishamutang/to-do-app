// Disables (or enables) inputs for task details, when checkbox is checked or not.

import { saveUserData } from "./saveToLocalStorage";

export function taskCompletion(taskDiv, taskDetailsContainer, currentObj) {

    // Get class list of taskDiv and taskDetailsContainer
    const taskDivClassList = Array.from(taskDiv.classList);
    const taskDetailsContainerClassList = Array.from(taskDetailsContainer.classList);

    // If checkbox is checked, task is considered complete and taskDetailsContainer will be disabled.
    if(taskDivClassList.includes('complete') && taskDetailsContainerClassList.includes('disable')) {

        taskDiv.className = taskDivClassList.filter(value => value !== 'complete').join(' ');
        taskDetailsContainer.className = taskDetailsContainerClassList.filter(value => value !== 'disable').join(' ');

    } else {

        taskDiv.className += ' complete';
        taskDetailsContainer.className += ' disable';

    }

    // Get all taskDetailsContainer inputs/buttons to disable them.
    const getInputs = Array.from(taskDetailsContainer.getElementsByTagName('input'));
    const getButtons = Array.from(taskDetailsContainer.getElementsByTagName('button'));

    let isComplete;

    if(taskDivClassList.includes('complete')) {

        getInputs.forEach((input) => {

            input.disabled = false;

        })

        getButtons.forEach((button) => {

            button.disabled = false;

        })

        isComplete = false;

        // Remove clickable delete button.
        taskDiv.querySelector('button').remove();

    } else {

        getInputs.forEach((input) => {

            input.disabled = true;
    
        })
    
        getButtons.forEach((button) => {
    
            button.disabled = true;
    
        })

        isComplete = true;

        // Append clickable delete button.
        const deleteTaskBtn = document.createElement('button');
        deleteTaskBtn.className = 'deleteTask';
        deleteTaskBtn.type = 'button';
        deleteTaskBtn.innerHTML = "<i class='bx bxs-x-circle bx-rotate-90'></i>";
        taskDiv.append(deleteTaskBtn);

        deleteTaskBtn.addEventListener('click', (event) => {

            console.log(event.target);

        })

    }

    // Save in localStorage.
    updateCurrentObj(isComplete, currentObj);
    
}


function updateCurrentObj(isComplete, currentObj) {

    // Get all to-do objects (allObjs is an object)
    const allObjs = localStorage.getItem("allObjs") ? JSON.parse(localStorage.getItem("allObjs")) : null;

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

    console.log(currentObj);

}