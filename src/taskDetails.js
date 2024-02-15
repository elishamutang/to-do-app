// Click on any task to view details in a separate window next to task overview window.

// Target window next to tasks overview (e.g task details).
const taskDetails = document.getElementById('allTasksDivTwo');

export default function viewTask(task, listOfObjs) {

    let currentObj;

    for (const obj of listOfObjs) {
        if(task.textContent == obj.title) {
            // Extract title from label
            currentObj = obj;
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

    console.log(currentObj);

}

// To-Do object checklist
export function checkList(listOfObjs) {

    // Checklist fieldset
    const checkListFieldset = document.getElementById('checkList');

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

    checkListFieldset.append(checklistInputDiv);

}

function checkTaskDetailInputs() {



}

export function notes() {

    // Target notes input
    const notesInput = document.getElementById('notes');

    // Target corresponding form.
    const notesForm = document.getElementById('detailNotes');

    notesForm.addEventListener('submit', (event) => {
        console.log(notesInput.value);
        event.preventDefault();
    }, {once: true})

}