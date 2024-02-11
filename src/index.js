import './style.css';
import 'boxicons';
import { checkFormInput, createNew } from './createNewList';
import CreateToDoObjs from './createToDo';
import addMyTask from './allMyTasks';
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
        addMyTask(addNewTask, fieldsetToday);
        addNewTask.value = '';
        event.preventDefault();
    })

    // Target Task.
    const taskOverview = document.getElementById('allTasksDivOne');

    taskOverview.addEventListener('click', (e) => {
        if(e.target.className.includes('toDoDiv')) {
            viewTask(e.target);
        }
    })


})();