// Disables (or enables) inputs for task details, when checkbox is checked or not.

import saveToLocal, { saveUserData } from "./saveToLocalStorage";
import { updateSidebarListDisplay } from "./updateSidebar";

export function taskCompletion(taskDiv, taskDetailsContainer, currentObj) {

    const allObjs = localStorage.getItem("allObjs") ? JSON.parse(localStorage.getItem("allObjs")) : {};

    // Get class list of taskDiv and taskDetailsContainer
    const taskDivClassList = Array.from(taskDiv.classList);
    const taskDetailsContainerClassList = Array.from(taskDetailsContainer.classList);

    // Get all taskDetailsContainer inputs/buttons to disable them.
    const getInputs = Array.from(taskDetailsContainer.getElementsByTagName('input'));
    const getButtons = Array.from(taskDetailsContainer.getElementsByTagName('button'));

    // Flagging variable to indicate task completion status.
    let isComplete;

    // If currentObj and taskDetailsContainer are not referring to the same object, taskDetailsContainer remains unchanged.
    // For example, task1 and task2, if user is viewing task1 and accidentally checks task2, it won't disable taskDetailsContainer for task1 (current view).
    if(currentObj.taskId !== taskDetailsContainer.dataset.task) {

        if(taskDivClassList.includes('complete')) {

            taskDiv.className = taskDivClassList.filter(value => value !== 'complete').join(' ');

        } else {

            taskDiv.className += ' complete';

        }

    } else {

        // If checkbox is checked, task is considered complete and taskDetailsContainer will be disabled.
        if(taskDivClassList.includes('complete') && taskDetailsContainerClassList.includes('disable')) {

            taskDiv.className = taskDivClassList.filter(value => value !== 'complete').join(' ');
            taskDetailsContainer.className = taskDetailsContainerClassList.filter(value => value !== 'disable').join(' ');

        } else {

            taskDiv.className += ' complete';
            taskDetailsContainer.className += ' disable';

        }

    }

    if(taskDivClassList.includes('complete')) {

        getInputs.forEach((input) => {

            input.disabled = false;

        })

        getButtons.forEach((button) => {

            button.disabled = false;

        })

        // Task incomplete, checkbox un-ticked.
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

        // Task complete, checkbox ticked.
        isComplete = true;

        // Append clickable delete button.
        const deleteTaskBtn = document.createElement('button');
        deleteTaskBtn.className = 'deleteTask';
        deleteTaskBtn.type = 'button';
        deleteTaskBtn.innerHTML = "<i class='bx bxs-x-circle bx-rotate-90'></i>";
        taskDiv.append(deleteTaskBtn);

        // Save in localStorage.
        updateCurrentObj(isComplete, currentObj, allObjs);

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

    }
    
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

        console.log(div, idx);
        div.id = `taskDiv-${idx+1}`;

        div.querySelector('input').id = `task-${idx+1}`;

    })

    // Update taskId property for each object.
    let num = 1;

    allObjs = Object.keys(allObjs).map((key, idx) => {

        allObjs[key].taskId = `taskDiv-${num + idx}`;

        const newKey = allObjs[key].taskId;

        return { [newKey] : allObjs[key] };

    })

    const newObj = Object.assign({}, ...allObjs);

    return newObj;

}