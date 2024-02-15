// Click on any task to view details in a separate window next to task overview window.

// Target window next to tasks overview (e.g task details).
const taskDetails = document.getElementById('allTasksDivTwo');

export default function viewTask(task, listOfObjs) {

    for (const obj of listOfObjs) {
        console.log(obj);
        if(task.textContent == obj.title) {
            // Extract title from label
            const getTitle = obj.title;

            // Target header
            const taskDetailsHeader = document.querySelector('#detailHeader');
            const taskDetailsHeaderElem = document.createElement('h1');
            taskDetailsHeaderElem.textContent = getTitle;

            // Displays to-do detail title.
            if(taskDetailsHeader.children.length === 0) {
                taskDetailsHeader.append(taskDetailsHeaderElem);
            } else {
                taskDetailsHeader.querySelector('h1').textContent = getTitle;
            }
        }
    }

}

// To-Do object checklist
export function checkList(listOfObjs) {

    // Checklist fieldset
    const checkListFormFieldset = document.getElementById('checkList');

    // Add input checklist task.
    const checklistInputDiv = document.createElement('div');

    const checklistInput = document.createElement('input');
    checklistInput.type = 'checkbox';
    checklistInput.className = 'toDoObj';

    const checklistInputText = document.createElement('input');
    checklistInputText.type = 'text';
    checklistInputText.className = 'taskInputs';

    checklistInputDiv.append(checklistInput);
    checklistInputDiv.append(checklistInputText);

    checkListFormFieldset.append(checklistInputDiv);

}

function checkTaskDetailInputs() {



}