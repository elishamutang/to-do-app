// Checking the checklist checkbox.

export default function checklistCompletion(inputElem, currentObj) {

    // Fetch latest allObjs object.
    const allObjs = localStorage.getItem("allObjs") ? JSON.parse(localStorage.getItem("allObjs")) : {};

    const onlyChecklistItems = {};

    Object.keys(allObjs).forEach((key) => {

        if(key === currentObj.taskId) {

            console.log(allObjs[key].checklist);

        }

    })


}