import { checkFormInput, createNew } from './createNewList';
import addMyTask from './addMyTask';
import { changeChecklistInputElem } from './checklistFeat';
import { updateSidebarListDisplay } from './updateSidebar';
import saveToLocal, { checkForLocalStorageSupport } from './saveToLocalStorage';
import { homePage } from './homepage';

// Load DOM.

export default function initializePage() {

    // Check for localStorage support in user's browser.
    const checkLS = checkForLocalStorageSupport() ? console.log("You have localStorage") : console.log("You don't have localStorage");

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

            // Get every anchor tag (list or tag) from aside element.
            const allListItems = Array.from(document.querySelector('aside').getElementsByClassName('list'));

            // Code below is for styling current selection in sidebar.
            allListItems.forEach((item) => {

                if(item.textContent === selection.textContent) {

                    if(!item.className.includes('viewing')) {

                        selection.className += ' viewing';

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

            switch(selection.textContent) {

                case 'All My Tasks':
                    homePage();
                    break;

                case 'Personal':
                    console.log(selection);
                    break;
                
                case 'Work':
                    console.log(selection);
                    break;

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
    
    // Adds new task to overview div.
    taskInputForm.addEventListener('submit', (event) => {

        // Creates new to-do object.
        const toDoObj = addMyTask(addNewTask, fieldsetToday);

        // Stores inside listOfObjs array.
        listOfObjs.push(toDoObj);

        // Resets input and disables button.
        addNewTask.value = '';
        addNewTaskBtn.disabled = true;

        // Save to localStorage.
        saveToLocal(listOfObjs, "listOfObjs");

        // Updates sidebar (by default each newly created To-Do task will belong to personal)
        updateSidebarListDisplay(toDoObj);

        event.preventDefault();
    })


    // Initialize currentObj
    let currentObj;

    // View any To-Do task in greater detail.
    const overviewDiv = document.querySelector('.overview');

    overviewDiv.addEventListener('click', (event) => {

        // Set currentObj to To-Do task that was clicked.
        for(let obj of listOfObjs) {
            
            // Utilize taskId of To-Do object div.
            if(obj.taskId === event.target.id) {

                currentObj = obj;

                event.preventDefault(); // Prevents checkbox to be ticked when label is clicked.
                currentObj.viewTask();

            }

        }

    })


    // Interact with details of each To-Do task.
    // Task Details
    const taskDetailsContainer = document.getElementById('allTasksDivTwo');

    taskDetailsContainer.addEventListener('click', function(event) {

        if(listOfObjs.length !== 0) {
            taskDetailsEvent(event, currentObj);
        } else {
            return;
        }
        
    })

};


// Handles events for task details.
function taskDetailsEvent(event, currentObj) {

    const elem = event.target;
    
    if(elem.id === 'detailHeader') {

        currentObj.changeTaskTitle(elem);

    } else if(elem.id === 'addChecklistItem') {

        currentObj.addToChecklist();
        event.preventDefault();
        
    } else if(elem.id === 'notes') {

        currentObj.createNote();

    } else if(elem.id === 'remindMe') {

        currentObj.reminder(elem);

    } else if(elem.id === 'currentList') {

        currentObj.editList(elem);

    } else if(elem.id === 'tags' || elem.className.includes('selectedTags')) {

        currentObj.setTag();

    } else if(elem.className.includes('checklistItem')) {

        // Target checklist items. Replaces label element to input element to change checklistItem content. 
        changeChecklistInputElem(event, currentObj);

    }
    
}
