import { checkFormInput, createNew } from './createNewList';
import addMyTask from './addMyTask';
import { changeChecklistInputElem } from './checklistFeat';
import { updateSidebarListDisplay } from './updateSidebar';
import saveToLocal, { checkForLocalStorageSupport } from './saveToLocalStorage';
import { taskCompletion } from './taskCompletion';
import CreateToDoObj from './createToDoObj';

// Load DOM.

export default function initializePage() {

    // Check for localStorage support in user's browser.
    const checkLS = checkForLocalStorageSupport() ? console.log("You have localStorage") : console.log("You don't have localStorage");

    // Set divTwoContainer as display:none initially, until user clicks on a to-do task to view details.
    const taskDetailsContainer = document.getElementById('divTwoContainer');
    taskDetailsContainer.style.display = 'none';
    taskDetailsContainer.remove();


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
    let objForObjs = {};

    // Initialize currentObj
    let currentObj;
    
    // Adds new task to overview div.
    taskInputForm.addEventListener('submit', (event) => {

        // Storing functions/methods in JSON format does not work (i.e methods/functions will be lost when retrieving tasks).
        // Solution here was to use Object.assign method to assign object from LS to a new CreateToDoObj object, overwriting properties and adding the methods back.
        objForObjs = localStorage.getItem("allObjs") ? JSON.parse(localStorage.getItem("allObjs")) : {};

        Object.keys(objForObjs).forEach((key) => {

            objForObjs[key] = Object.assign(new CreateToDoObj, objForObjs[key]);

        })

        console.log(objForObjs);

        // Creates new to-do object.
        currentObj = addMyTask(addNewTask, fieldsetToday);
        
        // Stores inside objForObjs.
        objForObjs[currentObj.taskId] = currentObj;

        // Resets input and disables button.
        addNewTask.value = '';
        addNewTaskBtn.disabled = true;

        // Save to localStorage.
        saveToLocal(objForObjs, "allObjs");

        // Updates sidebar (by default each newly created To-Do task will belong to personal)
        updateSidebarListDisplay();

        event.preventDefault();
    })


    // View any To-Do task in greater detail.
    const overviewDiv = document.querySelector('.overview');

    overviewDiv.addEventListener('click', (event) => {

        // Set currentObj to To-Do task that was clicked.
        if(Array.from(event.target.classList).includes('toDoDiv')) {

            Object.keys(objForObjs).forEach((key) => {

                if(key === event.target.id) {

                    currentObj = objForObjs[key];

                    event.preventDefault();

                    document.querySelector('main').append(taskDetailsContainer);
                    taskDetailsContainer.style.display = 'flex';

                    currentObj.viewTask();

                }

            })

        }

        // Checkbox logic
        if(event.target.tagName === 'INPUT') {

            const taskDiv = event.target.parentNode;

            for(let key of Object.keys(objForObjs)) {

                if(key === taskDiv.id) {

                    currentObj = objForObjs[key];

                }

            }

            taskCompletion(taskDiv, taskDetailsContainer, currentObj);

        }

    })


    // Interact with details of each To-Do task.
    // Task Details
    taskDetailsContainer.addEventListener('click', function(event) {

        if(Object.keys(objForObjs).length !== 0) {
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
