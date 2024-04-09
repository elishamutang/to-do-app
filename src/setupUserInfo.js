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

        addMyTask(allObjs[key].title);

        // Move task to appropriate sections in All My Tasks.
        if(allObjs[key].rawReminderDate !== "") {

            moveMyTask(allObjs[key]);

        }

        // For completed tasks.
        if(allObjs[key].completed === true) {

            const taskDiv = document.getElementById(allObjs[key].taskId);
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