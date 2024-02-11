import './style.css';
import 'boxicons';
import { checkFormInput, createNew } from './createNewList';
import ToDoObjs from './createToDo';
import addMyTask from './addMyTask';
import viewTask from './viewTask';

// Load DOM.

(function DOMHandler() {

    // Attach event listeners to create new lists / tags.
    const createNewBtns = document.querySelectorAll('.header > button');

    createNewBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            createNew(e.currentTarget);
        })
    })

    // Target input area to add new task.
    const addNewTask = document.getElementById('addNewTask');
    const taskInputForm = document.getElementById('addTask');
    const fieldsetToday = document.getElementById('today');

    // Initial state of submit button to be disabled.
    const addNewTaskBtn = document.querySelector('button.addTask');
    addNewTaskBtn.disabled = true;

    // Check user input when adding new tasks.
    addNewTask.addEventListener('focus', (event) => {
        checkFormInput(addNewTask, taskInputForm.className);
    })

    // Adds new task to overview div.
    taskInputForm.addEventListener('submit', (event) => {
        const testToDo = addMyTask(addNewTask, fieldsetToday);
        console.log(testToDo);
        listOfObjs.push(testToDo);
        console.log(listOfObjs);
        addNewTask.value = '';
        event.preventDefault();
    })

    // Target Task.
    const todayFieldset = document.getElementById('today');

    todayFieldset.addEventListener('click', (event) => {
        // Only pass label elements to viewTask.
        if(event.target.tagName === 'LABEL') {
            // Prevents checkbox to be ticked when label is clicked.
            event.preventDefault();
            viewTask(event.target);
        }
    })

    // List of all objects
    const listOfObjs = [];

})();