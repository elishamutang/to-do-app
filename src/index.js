import './style.css';
import 'boxicons';
import { createNew } from './createNewList';
import CreateToDoObjs from './createToDo';
import addMyTask from './allMyTasks';
import viewTask from './viewTask';
import { checkFormInput } from './createNewList';

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

    addNewTask.addEventListener('focus', (event) => {
        console.log(`${event.type} focused`);
        addMyTask(taskInputForm.className, addNewTask, fieldsetToday);
    })

    // Target Task.
    const taskOverview = document.getElementById('allTasksDivOne');

    taskOverview.addEventListener('click', (e) => {
        if(e.target.className.includes('toDoDiv')) {
            viewTask(e.target);
        }
    })


})();