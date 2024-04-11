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

            const taskDiv = document.getElementById(task.taskId);
            taskDiv.className += ' complete';

            const taskCheckbox = taskDiv.querySelector('input');
            taskCheckbox.checked = true;

            const deleteTaskBtn = prepareTaskDeleteBtn();
            taskDiv.append(deleteTaskBtn);

            deleteTaskBtn.addEventListener('click', () => {

                deleteCompletedTask(taskDiv);

            })

        }

    });

}