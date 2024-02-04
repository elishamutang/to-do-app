import './style.css';
import 'boxicons';
import { createNew } from './createNewList';
import CreateToDoObjs from './createToDo';
import allMyTasks from './allMyTasks';
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
    const addNewTask = document.getElementById('taskInput');
    const taskInputForm = document.getElementById('addTask');
    const fieldsetToday = document.getElementById('today');

    taskInputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        allMyTasks(addNewTask.value, fieldsetToday);
        addNewTask.value = '';
    });

    // Target Task.
    const taskOverview = document.getElementById('allTasksDivOne');

    taskOverview.addEventListener('click', (e) => {
        if(e.target.className.includes('toDoDiv')) {
            viewTask(e.target);
        }
    })


})();