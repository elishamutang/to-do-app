// Checking the checklist checkbox.

export default function checklistCompletion(inputElem, currentObj) {

    // Fetch latest allObjs object.
    const allObjs = localStorage.getItem("allObjs") ? JSON.parse(localStorage.getItem("allObjs")) : {};

    Object.keys(allObjs).forEach((key) => {

        if(key === currentObj.taskId) {

            const checklistItemDiv = inputElem.parentElement;
            const checklistItemCheckbox = checklistItemDiv.querySelector('input');
            const checklistItemLabelElem = checklistItemDiv.querySelector('label');

            // Store reference of task checklist object to taskChecklist.
            const taskChecklist = allObjs[key].checklist;

            Object.keys(taskChecklist).forEach((key) => {

                if(taskChecklist[key].labelElemId === checklistItemLabelElem.id) {

                    console.log(`${checklistItemLabelElem.id} checked: ${checklistItemCheckbox.checked}`);

                    if(checklistItemCheckbox.checked) {

                        checklistItemDiv.className += ' complete';
                        taskChecklist[key].completed = true;

                    } else {

                        checklistItemDiv.className = Array.from(checklistItemDiv.classList).filter(value => value !== 'complete').join(' ');
                        taskChecklist[key].completed = false;

                    }

                    console.log(taskChecklist[key]);

                }


            })

        }

    })

}