import { checkFormInput, createNew } from './createNewList';
import addMyTask from './addMyTask';
// Load DOM.

export default function initializePage() {

    // Create new lists / tags.
    // Attach event listeners to create new lists / tags.
    const createNewBtns = document.querySelectorAll('.header > button');

    createNewBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            createNew(e.currentTarget);
        })
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


    // View To-Do task in detail.
    // Target To-Do task.
    const todayFieldset = document.getElementById('today');

    todayFieldset.addEventListener('click', (event) => {
        // Only pass label elements to viewTask.
        if(event.target.tagName === 'LABEL') {
            // Prevents checkbox to be ticked when label is clicked.
            event.preventDefault();
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


function taskDetailsEvent(event, toDoObj) {

    switch(event.target.id) {

        case 'addChecklistItem':
            toDoObj.addToChecklist();
            event.preventDefault();
            break;

        case 'notes':
            toDoObj.createNote();
            break;



    }

}
