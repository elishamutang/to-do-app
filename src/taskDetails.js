// Click on any task to view details in a separate window next to task overview window.

// Keeps track of which task is being viewed.
let currentObj;

// Regex to identify more than 1 space entered.
// This regex can be improved but in the meantime it's good enough.
const multipleSpacesRegex = /[ ]{2,}/;


export default class createToDoObj {

    constructor(title, dueDate, priority, notes, checklist) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
    };

    // Set To-Do object header in taskDetails.
    viewTask(task, listOfObjs) {

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

    addToChecklist() {

        // Target all checklist items
        const checklistItems = document.querySelectorAll('.checklistItem');

        // Checklist fieldset
        const checkListFieldset = document.getElementById('checkList');
        
        // Add input checklist task.
        const checklistInputDiv = document.createElement('div');

        const checklistCheckbox = document.createElement('input');
        checklistCheckbox.type = 'checkbox';
        checklistCheckbox.className = 'toDoObj';

        const checklistInput = document.createElement('input');
        checklistInput.type = 'text';
        checklistInput.className = 'taskInputs checklistItem';

        // Detect if last checklist item has any inputs.
        if(checklistItems.length === 0) {

            checklistInputDiv.append(checklistCheckbox);
            checklistInputDiv.append(checklistInput);
            checkListFieldset.append(checklistInputDiv);

        } else if(checklistItems.length !== 0) {

            // Check if first task item has any input.
            const lastChecklistItem = checklistItems[checklistItems.length-1];

            if(lastChecklistItem.value === "" || multipleSpacesRegex.test(lastChecklistItem.value) === true) {
                console.log('Invalid input');
                lastChecklistItem.value = "";
            } else {
                checklistInputDiv.append(checklistCheckbox);
                checklistInputDiv.append(checklistInput);
                checkListFieldset.append(checklistInputDiv);
            }

            lastChecklistItem.focus();

        }

        // Focus user's attention to input checklist item(s).
        checklistInput.focus();

    }

    createNote() {

        // Target notes input
        const notesInput = document.getElementById('notes');

        // Saves user input when focused out.
        notesInput.addEventListener('focusout', (event) => {

            // Resets input for more than 1 whitespace entered.
            if(multipleSpacesRegex.test(notesInput.value) === true) {
                console.log('whitespaces');
                notesInput.value = "";
            } else {
                currentObj.notes = `${notesInput.value}`;
                console.log(currentObj);
            }

        }, {once: true});
        
    }

}