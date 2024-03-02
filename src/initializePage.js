import { checkFormInput, createNew } from './createNewList';
import addMyTask from './addMyTask';
import { changeChecklistInputElem } from './checklistFeat';

// Load DOM.

export default function initializePage() {

    // Default arrangement/view
    const mainHeader = document.getElementById('mainHeader');

    const mainHeaderHeading = document.createElement('h1');
    mainHeaderHeading.textContent = 'All My Tasks';

    mainHeader.append(mainHeaderHeading);


    // Create new lists / tags.
    // Attach event listeners to create new lists / tags.
    const createNewBtns = document.querySelectorAll('.header > button');

    createNewBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            createNew(event.currentTarget);
        })
    })

    
    // Sidebar event listener
    const sidebarElem = document.querySelector('aside');

    let lastSelection = [];

    sidebarElem.addEventListener('click', (event) => {

        if(event.target.tagName === "A") {

            const selection = event.target;

            mainHeaderHeading.textContent = selection.textContent; // Update heading to show what list is currently displayed.

            const allListItems = Array.from(document.getElementsByClassName('list'));

            // Code below is for styling current selection.
            allListItems.forEach((item) => {

                if(item.textContent === selection.textContent) {

                    selection.className += ' viewing';
                    lastSelection.push(item);

                }

            })

            if(lastSelection.length > 1) {

                const currentSelectedElem = lastSelection[lastSelection.length-1];
                const lastSelectedElem = lastSelection[lastSelection.length-2];

                if(currentSelectedElem.textContent !== lastSelectedElem.textContent) {
                    
                    lastSelection[lastSelection.length-2].className = 'list';

                }

            }

        }

    })
    

    // Add new tasks.
    // Target input area to add new task.
    const addNewTask = document.getElementById('addNewTask');
    const taskInputForm = document.getElementById('addTask');
    const fieldsetToday = document.getElementById('today');

    // Initial state of adding new task button will be disabled.
    const addNewTaskBtn = document.querySelector('button.addTask');
    addNewTaskBtn.disabled = true;

    // Check user input when adding new tasks.
    addNewTask.addEventListener('focus', (event) => {
        checkFormInput(addNewTask, taskInputForm.className);
    })

    // Store newly created To-Do objects.
    const listOfObjs = [];
    
    // Initialize toDoObj
    let toDoObj;

    // Adds new task to overview div.
    taskInputForm.addEventListener('submit', (event) => {

        // Creates new to-do object.
        toDoObj = addMyTask(addNewTask, fieldsetToday);

        // Stores inside listOfObjs array.
        listOfObjs.push(toDoObj);

        // Resets input and disables button.
        addNewTask.value = '';
        addNewTaskBtn.disabled = true;
        event.preventDefault();
    })


    // View any To-Do task in greater detail.
    const overviewDiv = document.querySelector('.overview');

    overviewDiv.addEventListener('click', (event) => {

        // Only pass label elements to viewTask.
        if(event.target.tagName === 'LABEL') {
            event.preventDefault(); // Prevents checkbox to be ticked when label is clicked.
            toDoObj.viewTask(event.target, listOfObjs);
        }

    })


    // Interact with details of each To-Do task.
    // Task Details
    const taskDetailsContainer = document.getElementById('allTasksDivTwo');

    taskDetailsContainer.addEventListener('click', function(event) {

        if(listOfObjs.length !== 0) {
            taskDetailsEvent(event, toDoObj);
        } else {
            return;
        }
        
    })

};


// Handles events for task details.
function taskDetailsEvent(event, toDoObj) {

    switch(event.target.id) {

        case 'addChecklistItem':
            toDoObj.addToChecklist();
            event.preventDefault();
            break;

        case 'notes':
            toDoObj.createNote();
            break;

        case 'remindMe':
            toDoObj.reminder(event.target);
            break;

        case 'currentList':
            toDoObj.editList();
            break;

        case 'priority':
            toDoObj.setPriority(event.target);
            break;

        default:
            break;

    }

    // Targets checklist items.
    if(event.target.className.includes('checklistItem')) {

        // Replace label element to input element to change checklistItem content.
        changeChecklistInputElem(event, toDoObj);

    }

}
