import { checkFormInput, createNew } from './createNewList';
import addMyTask from './addMyTask';
import viewTask, { checkList, notes } from './taskDetails';
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

    // Adds new task to overview div.
    taskInputForm.addEventListener('submit', (event) => {

        // Creates new to-do object.
        const testToDo = addMyTask(addNewTask, fieldsetToday);

        // Stores inside listOfObjs array.
        listOfObjs.push(testToDo);

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
            viewTask(event.target, listOfObjs);
        }
    })


    // Interact with details of each To-Do task.
    // Task Details
    const taskDetailsContainer = document.getElementById('allTasksDivTwo');
    
    taskDetailsContainer.addEventListener('click', (event) => {
        console.log(event.target);

        switch(event.target.id) {

            case 'addChecklistItem':
                checkList(listOfObjs);
                event.preventDefault();
                break;
            case 'notes':
                notes();
                break;



        }

    })



};