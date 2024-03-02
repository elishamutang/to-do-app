import changeTask from "./switchTaskView";
import { format, isToday } from "date-fns";
import { moveMyTask } from "./addMyTask";

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
        this.notes = "";
        this.rawReminderDate = "";
        this.priority = "";
        this.list = "Personal"; // by default
    };


    // Set To-Do object header in taskDetails.
    viewTask(task, listOfObjs) {

        for (const obj of listOfObjs) {
            if(task.textContent == obj.title) {

                // Determine current object that is selected and changes task if needed.
                currentObj = obj;
                changeTask(currentObj);

            }
        }
        console.log(currentObj);
    }


    addToChecklist() {

        // Target all checklist items
        const checklistItems = document.getElementsByClassName('checklistItem');
        const lastChecklistItem = checklistItems[checklistItems.length-1];

        if(checklistItems.length !== 0) {

            // If last checklist item does not have any input, prevent user from adding another one.
            if(lastChecklistItem.value === "" || multipleSpacesRegex.test(lastChecklistItem.value) === true) {

                console.log('Invalid input');
                lastChecklistItem.value = "";
                lastChecklistItem.focus();

            } else {

                createNewChecklistItem(checklistItems);

            }

        } else {

            createNewChecklistItem(checklistItems); // Add new checklist item entry if there is none currently.
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


    reminder(reminderBtn) {

        // Remind Me
        const reminderDialog = document.getElementById('reminder');
        const reminderForm = document.getElementById('setReminder');

        const dateInput = document.getElementById('dateInput');

        // Minimum date value set to current date (format: YYYY-MM-ddThh:mm, e.g 2017-06-01T08:30) 
        dateInput.min = `${format(new Date(), "yyyy")}-${format(new Date(), "MM")}-${format(new Date(), "dd")}T${format(new Date(), "hh")}:${format(new Date(), "mm")}`; 
        
        reminderDialog.showModal();
        dateInput.focus();

        // When Remind Me button is clicked, if the date is set, show that date on datetime-local input.
        if(currentObj.rawReminderDate !== "") {
            dateInput.value = currentObj.rawReminderDate;
        } else {
            dateInput.value = dateInput.min;
        }


        reminderDialog.addEventListener('click', function closeDialog(event) {
            if(event.target === reminderDialog) {
                reminderDialog.close();
                this.removeEventListener('click', closeDialog);
            }
        })


        reminderForm.addEventListener('submit', function detectSubmit(event) {

            event.preventDefault();

            const formattedResultingDate = format(dateInput.value, "MMM do, yyyy, hh:mma"); // Date format example: "Mon 26th, 2024, 10:59PM"
            console.log(formattedResultingDate);

            reminderBtn.textContent = `${formattedResultingDate}`; // Do something after date is set, like an icon or smtg.
            
            currentObj.rawReminderDate = dateInput.value;
            currentObj.formattedReminderDate = formattedResultingDate;

            // Determine whether submitted date fits into either Today, Tomorrow, Upcoming or Someday.
            const today = isToday(dateInput.value);
            
            if(!today) {

                moveMyTask(currentObj);

            }

            reminderDialog.close();

            dateInput.value = "";

        }, {once: true})


        reminderForm.addEventListener('reset', function deleteReminder() {

            reminderBtn.textContent = "Remind Me";

            currentObj.rawReminderDate = "";
            currentObj.formattedReminderDate = "";

            reminderDialog.close();

        }, {once: true})

    }


    editList() {

        // Prepare all user lists.
        const currentLists = Array.from(document.querySelectorAll('ul.userLists > li > a'));
        const currentListsClone = currentLists.map((list) => list.cloneNode(true)); // To be appended in linksContainer

        const linksContainer = document.getElementById('linksContainer');
        
        const listsInsideListContainer = Array.from(linksContainer.children);

        const listsInsideListContainerText = listsInsideListContainer.map((list) => { return list.textContent })

        // Updates based on newly created lists.
        currentListsClone.forEach((clone) => {

            if(!listsInsideListContainerText.includes(clone.textContent)) {

                linksContainer.append(clone);

                if(currentObj.list === clone.textContent) {

                    // Added class of current for current list that To-Do object is in.
                    clone.className += ' current';

                }
            }

        })


        const listDialog = document.getElementById('list');
        listDialog.showModal();

        // Closes dialog if clicked outside, might make this into a utility function.
        listDialog.addEventListener('click', function closeListDialog(event) {

            if(event.target === listDialog) {
                listDialog.close();
                this.removeEventListener('click', closeListDialog);
            }

        })



    }


    setPriority(setPriorityBtn) {

        // Priority
        console.log(setPriorityBtn);

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
    const countOfItems = checklistItems.length;
    checklistInputDiv.id = `checklistDiv-${countOfItems}`;
    checklistInput.id = `checklistInput-${countOfItems}`;
    checklistCheckbox.id = `checkbox-${countOfItems}`;
    
    checklistInputDiv.append(checklistCheckbox);
    checklistInputDiv.append(checklistInput);
    checkListFieldset.append(checklistInputDiv);

    checklistInput.focus();


    // If input is out of focus, automatically pushes input into To-Do object checklist property.
    checklistInput.addEventListener('focusout', (event) => {

        // Store checklist item inside an object.
        const checklistItem = {
            input: checklistInput,
            value: checklistInput.value,
            divElem: checklistInputDiv
        };

        // Remove checklistInputDiv element if checklistInput loses focus and does not contain any inputs.
        if(checklistInput.value === "" || multipleSpacesRegex.test(checklistInput.value) === true) {

            // Remove checklistInputDiv and delete from checklist property array.
            checklistInputDiv.remove();

        } else {

            // Change to label and transfer over attributes to label elem.
            const checklistInputLabel = document.createElement('label');
            checklistInputLabel.className = 'taskInputs checklistItem';
            checklistInputLabel.id = `checklistInput-${countOfItems}`;
            checklistInputLabel.textContent = checklistInput.value;
            checklistInputLabel.htmlFor = checklistCheckbox.id;

            checklistInput.replaceWith(checklistInputLabel);

            checklistItem.input = checklistInputLabel;

            currentObj.checklist.push(checklistItem);

        }

    }, {once: true});

}