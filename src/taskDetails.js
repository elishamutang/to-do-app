// Click on any task to view details in a separate window next to task overview window.

// Keeps track of which task is being viewed.
let currentObj;

// Regex to identify more than 1 space entered.
// This regex can be improved but in the meantime it's good enough.
const multipleSpacesRegex = /[ ]{2,}/;


export default class createToDoObj {

    // Initialize each instance of a To-Do object with a title and checklist array.
    constructor(title) {
        this.title = title;
        this.checklist = [];
    };

    // Set To-Do object header in taskDetails.
    viewTask(task, listOfObjs) {

        for (const obj of listOfObjs) {
            if(task.textContent == obj.title) {

                // Determine current object that is selected and set the title on taskDetails.
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

        // Switch To-Do object view






    }

    addToChecklist() {

        // Target all checklist items
        const checklistItems = document.getElementsByClassName('checklistItem');
        const lastChecklistItem = checklistItems[checklistItems.length-1];

        // Add new checklist item entry if there is none currently.
        if(checklistItems.length === 0) {

            createNewChecklistItem(checklistItems);

        } else if(checklistItems.length !== 0) {

            // If last checklist item does not have any input, prevent user from adding another one.
            if(lastChecklistItem.value === "" || multipleSpacesRegex.test(lastChecklistItem.value) === true) {

                console.log('Invalid input');
                lastChecklistItem.value = "";
                lastChecklistItem.focus();

            } else {

                createNewChecklistItem(checklistItems);

            }

        }

        console.log(currentObj.checklist);

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
                currentObj.notes = notesInput.value; // Set notes for To-Do object.
                console.log(currentObj);
            }

        }, {once: true});
        
    }

}


function createNewChecklistItem(checklistItems) {

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

    // Sets ID for each task input created.
    let countOfItems = checklistItems.length;
    checklistInput.id = `checklistInput-${countOfItems}`;
    
    checklistInputDiv.append(checklistCheckbox);
    checklistInputDiv.append(checklistInput);
    checkListFieldset.append(checklistInputDiv);

    checklistInput.focus();


    // If input is out of focus, automatically pushes input into To-Do object checklist property.
    checklistInput.addEventListener('focusout', (event) => {

        // Store checklist item inside an object.
        const checklistItem = {
            input: checklistInput,
            value: checklistInput.value
        };

        // Remove checklistInputDiv element if checklistInput loses focus and does not contain any inputs.
        if(checklistInput.value === "" || multipleSpacesRegex.test(checklistInput.value) === true) {

            // Remove checklistInputDiv and delete from checklist property array.
            checklistInputDiv.remove();

        } else {

            currentObj.checklist.push(checklistItem);

            // Change to label to prevent drag and drop i guess
            const checklistInputLabel = document.createElement('label');
            checklistInputLabel.className = 'taskInputs checklistItem';
            checklistInputLabel.id = `checklistInput-${countOfItems}`;
            checklistInputLabel.textContent = checklistInput.value;

            checklistInput.replaceWith(checklistInputLabel);


        }

    }, {once: true});

}