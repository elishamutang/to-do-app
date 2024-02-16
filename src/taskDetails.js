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

    checkList() {

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

    notes() {

        // Target notes input
        const notesInput = document.getElementById('notes');

        // Target corresponding form.
        const notesForm = document.getElementById('detailNotes');

        notesForm.addEventListener('submit', (event) => {
            console.log(notesInput.value);
            event.preventDefault();
        }, {once: true})

    }

}