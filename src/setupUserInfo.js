// Setup tasks from localStorage (if any).

import addMyTask, { moveMyTask } from "./addMyTask";
import { updateSidebarListDisplay, updateSidebarTagsDisplay } from "./updateSidebarCount";

export default function setupUserInfo(allObjs) {

    // Update sidebar count for list/tag.
    updateSidebarListDisplay();
    updateSidebarTagsDisplay();

    // Setup tasks.
    Object.keys(allObjs).forEach((key) => {

        addMyTask(allObjs[key].title);

        if(allObjs[key].rawReminderDate !== "") {

            moveMyTask(allObjs[key]);

        }

    });

}