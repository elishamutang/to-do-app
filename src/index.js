import './style.css';
import 'boxicons';
import { createNew } from './createNewList';

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
    const addNewTask = document.getElementById('input#addTask');

    console.log(addNewTask.value);

})();