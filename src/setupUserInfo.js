// Setup tasks from localStorage (if any).

import addMyTask, { moveMyTask } from "./addMyTask";
import { deleteCompletedTask, prepareTaskDeleteBtn } from "./taskCompletion";
import { updateSidebarListDisplay, updateSidebarTagsDisplay } from "./updateSidebarCount";

export default function setupUserInfo(allObjs) {

    // Update sidebar count for list/tag.
    updateSidebarListDisplay();
    updateSidebarTagsDisplay();

    // Setup tasks.
    Object.keys(allObjs).forEach((key) => {

        const task = allObjs[key];

        addMyTask(task.title);

        // Move task to appropriate sections in All My Tasks.
        if(task.rawReminderDate !== "") {

            moveMyTask(task);

        }

        // For completed tasks.
        if(task.completed === true) {

            // Get all tasks in homepage.
            const getAllTasks = () => {

                return Array.from(document.getElementsByClassName('toDoDiv')).reverse();

            }

            // Match task title and task object title.
            getAllTasks().forEach((div) => {

                if(div.querySelector('p').textContent === task.title) {

                    const taskDiv = div;
                    taskDiv.className += ' complete';

                    const taskCheckbox = taskDiv.querySelector('input');
                    taskCheckbox.checked = true;

                    const deleteTaskBtn = prepareTaskDeleteBtn();
                    taskDiv.append(deleteTaskBtn);

                    deleteTaskBtn.addEventListener('click', () => {

                        deleteCompletedTask(taskDiv);

                    })

                }

            })

        }

    });

}