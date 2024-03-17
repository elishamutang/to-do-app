import { checkFormInput, createNew } from './createNewList';
import addMyTask from './addMyTask';
import { changeChecklistInputElem } from './checklistFeat';
import { updateSidebarLists } from './updateSidebar';
import saveToLocal from './saveToLocalStorage';

// Load DOM.

export default function initializePage() {

    // Default arrangement/view
    const mainHeader = document.getElementById('mainHeader');

    const mainHeaderHeading = document.createElement('h1');
    mainHeaderHeading.textContent = 'All My Tasks';

    mainHeader.append(mainHeaderHeading);


    // Create new lists
    // Attach event listeners to create new lists
    const createNewListBtn = document.querySelector('.header > button');

    createNewListBtn.addEventListener('click', (event) => {
        createNew(event.currentTarget);
    })

    
    // Sidebar event listener
    const sidebarElem = document.querySelector('aside');

    let lastSelection = [];

    sidebarElem.addEventListener('click', (event) => {

        if(event.target.tagName === "A") {

            const selection = event.target;

            mainHeaderHeading.textContent = selection.textContent; // Update heading to show what list is currently displayed.

            const allListItems = Array.from(document.querySelector('aside').getElementsByClassName('list'));

            // Code below is for styling current selection in sidebar.
            allListItems.forEach((item) => {

                if(item.textContent === selection.textContent) {

                    if(!item.className.includes('viewing')) {

                        selection.className += ' viewing';
                        selection.innerHTML += "<i class='bx bxs-circle'></i>";

                    }

                    lastSelection.push(item);

                }

            })

            if(lastSelection.length > 1) {

                const currentSelectedElem = lastSelection[lastSelection.length-1];
                const lastSelectedElem = lastSelection[lastSelection.length-2];

                if(currentSelectedElem.textContent !== lastSelectedElem.textContent) {
                    
                    lastSelectedElem.className = 'list'; // Remove styling if switching to a different list.
                    lastSelectedElem.innerHTML = lastSelectedElem.textContent;

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
    addNewTask.addEventListener('focus', () => {
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

        // Save to localStorage.
        saveToLocal(listOfObjs, "listOfObjs");

        // Updates sidebar (by default each newly created To-Do task will belong to personal)
        updateSidebarLists(toDoObj, listOfObjs);

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

    const elem = event.target;
    
    if(elem.id === 'addChecklistItem') {

        toDoObj.addToChecklist();
        event.preventDefault();
        
    } else if(elem.id === 'notes') {

        toDoObj.createNote();

    } else if(elem.id === 'remindMe') {

        toDoObj.reminder(elem);

    } else if(elem.id === 'currentList') {

        toDoObj.editList(elem);

    } else if(elem.id === 'tags' || elem.className.includes('selectedTags')) {

        toDoObj.setTag();

    } else if(elem.className.includes('checklistItem')) {

        // Target checklist items. Replaces label element to input element to change checklistItem content. 
        changeChecklistInputElem(event, toDoObj);

    }
    
}
