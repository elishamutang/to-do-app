import { checkFormInput, createNew } from './createNewList';
import addMyTask from './addMyTask';
import { changeChecklistInputElem } from './checklistFeat';
import { updateSidebarListDisplay, updateSidebarTagsDisplay } from './updateSidebarCount';
import saveToLocal, { checkForLocalStorageSupport } from './saveToLocalStorage';
import { taskCompletion } from './taskCompletion';
import CreateToDoObj from './createToDoObj';
import switchView from './switchView';
import setupUserInfo from './setupUserInfo';
import checklistCompletion from './checklistCompletion';
import greetings from './greetUser';
import randomProfColor from './randomProfColor';

// Load DOM.

export default function initializePage() {

    // Check for localStorage support in user's browser.
    const checkLS = checkForLocalStorageSupport() ? console.log("You have localStorage") : console.log("You don't have localStorage");

    // Random color for userProfile.
    randomProfColor();

    // Greet users.
    greetings().then((response) => {

        document.getElementById('userName').textContent = `${response.hello}!`;

    });

    // Remove divTwoContainer initially.
    const taskDetailsContainer = document.getElementById('divTwoContainer');
    taskDetailsContainer.style.display = 'none';
    taskDetailsContainer.remove();


    // Default arrangement/view
    const mainHeader = document.getElementById('mainHeader');

    const mainHeaderHeading = document.createElement('h1');
    mainHeaderHeading.textContent = 'All My Tasks';

    mainHeader.append(mainHeaderHeading);


    // Get overviewDiv.
    const overviewDiv = document.querySelector('.overview');

    // Prepare home page fieldsets to pass to switchView function below.
    const homePageFieldsets = Array.from(overviewDiv.children).map((child) => {

        if(child.tagName === 'FIELDSET') {

            return child;

        }

    });


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

                    // Remove styling if switching to a different list.
                    lastSelectedElem.className = lastSelectedElem.className.includes('currentTags') ? 'list currentTags' : 'list';
                    lastSelectedElem.innerHTML = lastSelectedElem.textContent;

                }

            }

            // Switch view based on selected page.
            switchView(selection, homePageFieldsets);

        }

    })
    

    // Add new tasks.
    // Target input area to add new task.
    const addNewTask = document.getElementById('addNewTask');
    const taskInputForm = document.getElementById('addTask');

    // Initial state of adding new task button will be disabled.
    const addNewTaskBtn = document.querySelector('button.addTask');
    addNewTaskBtn.disabled = true;

    // Check user input when adding new tasks.
    addNewTask.addEventListener('focus', () => {
        checkFormInput(addNewTask, taskInputForm.className);
    })

    // Store newly created To-Do objects.
    let objForObjs = updatedObjs();

    if(Object.keys(objForObjs).length === 0) {

        console.log("No tasks.");

    } else {

        setupUserInfo(objForObjs);

    }

    // Initialize currentObj
    let currentObj;
    
    // Adds new task to overview div.
    taskInputForm.addEventListener('submit', (event) => {

        // Storing functions/methods in JSON format does not work (i.e methods/functions will be lost when retrieving tasks).
        // Solution here was to use Object.assign method to assign object from LS to a new CreateToDoObj object, overwriting properties and adding the methods back.
        objForObjs = updatedObjs();

        // Creates new to-do object.
        currentObj = addMyTask(addNewTask.value);

        // Stores inside objForObjs.
        objForObjs[currentObj.title] = currentObj;

        // Resets input and disables button.
        addNewTask.value = '';
        addNewTaskBtn.disabled = true;

        // Save to localStorage.
        saveToLocal(objForObjs, "allObjs");

        // Updates sidebar (by default each newly created To-Do task will belong to personal)
        updateSidebarListDisplay();
        updateSidebarTagsDisplay();

        event.preventDefault();

        console.log(objForObjs);

    })


    // View any To-Do task in greater detail.
    overviewDiv.addEventListener('click', (event) => {

        objForObjs = updatedObjs();

        // Set selected to do task as currentObj.
        if(Array.from(event.target.parentNode.classList).includes('toDoDiv') || event.target.className.includes('toDoDiv')) {

            // Get task title.
            const taskTitle = event.target.textContent;

            Object.keys(objForObjs).forEach((key) => {

                if(objForObjs[key].title === taskTitle) {

                    currentObj = objForObjs[key];

                    document.querySelector('main').append(taskDetailsContainer);
                    taskDetailsContainer.style.display = 'flex';

                    currentObj.viewTask();

                }

            })

        }

        // Checkbox logic for ticking off tasks.
        if(event.target.tagName === 'INPUT') {

            const taskDiv = event.target.parentNode;
            const taskText = taskDiv.querySelector('p').textContent;

            for(let key of Object.keys(objForObjs)) {

                if(key === taskText) {

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
        event.preventDefault(); // Used only for this statement.
        
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

    } else if(elem.className === 'toDoObj') {

        // Checking checklist checkbox.
        checklistCompletion(elem, currentObj);

    }
    
}


function updatedObjs() {

    const allObjs = localStorage.getItem("allObjs") ? JSON.parse(localStorage.getItem("allObjs")) : {};

    Object.keys(allObjs).forEach((key) => {

        allObjs[key] = Object.assign(new CreateToDoObj, allObjs[key]);

    });

    return allObjs;

}
