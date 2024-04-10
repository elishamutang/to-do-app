// Checking the checklist checkbox.

import { prepareTaskDeleteBtn } from "./taskCompletion";

export default function checklistCompletion(inputElem, currentObj) {

    // Fetch latest allObjs object.
    const allObjs = localStorage.getItem("allObjs") ? JSON.parse(localStorage.getItem("allObjs")) : {};

    const checklistItemDeleteBtn = prepareTaskDeleteBtn();

    Object.keys(allObjs).forEach((key) => {

        if(key === currentObj.taskId) {

            // Compare DOM elements to task object.
            const checklistItemDiv = inputElem.parentElement;
            const checklistItemCheckbox = checklistItemDiv.querySelector('input');
            const checklistItemLabelElem = checklistItemDiv.querySelector('label');

            // Store reference of task checklist object to taskChecklist.
            const taskChecklist = allObjs[key].checklist;

            Object.keys(taskChecklist).forEach((key) => {

                if(taskChecklist[key].labelElemId === checklistItemLabelElem.id) {

                    console.log(`${checklistItemLabelElem.id} checked: ${checklistItemCheckbox.checked}`);

                    // Checked checkbox indicating checklist item is completed.
                    if(checklistItemCheckbox.checked) {

                        checklistItemDiv.className += ' complete';
                        taskChecklist[key].completed = true;

                        checklistItemDiv.append(checklistItemDeleteBtn);

                    } else {

                        // Un-checked checkbox indicating checklist item is not completed.
                        checklistItemDiv.className = Array.from(checklistItemDiv.classList).filter(value => value !== 'complete').join(' ');
                        taskChecklist[key].completed = false;

                        checklistItemDiv.querySelector('button').remove();

                    }

                    console.log(taskChecklist[key]);

                }


            })

        }

    })

}