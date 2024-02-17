// Click on any task to view details in a separate window next to task overview window.

// Keeps track of which task is being viewed.
let currentObj;

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

    createNote() {

        // Target notes input
        const notesInput = document.getElementById('notes');

        // Regex to identify more than 1 space entered.
        // This regex can be improved but in the meantime it's good enough.
        const multipleSpaces = /[ ]{2,}/;

        // Saves user input when focused out.
        notesInput.addEventListener('focusout', (event) => {

            // Resets input for more than 1 whitespace entered.
            if(multipleSpaces.test(notesInput.value) === true) {
                console.log('whitespaces');
                notesInput.value = "";
            } else {
                currentObj.notes = `${notesInput.value}`;
                console.log(currentObj);
            }

        }, {once: true});
        
    }

}