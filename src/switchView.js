// Switch between different lists and tags page.

import addMyTask from "./addMyTask";
import saveToLocal from "./saveToLocalStorage";
import { setupCompletedTasks } from "./setupUserInfo";

export default function switchView(selection, homePageFieldsets) {

    // Get all to-do task objects.
    const allObjs = localStorage.getItem("allObjs") ? JSON.parse(localStorage.getItem("allObjs")) : {};

    // By default, overviewDiv will have a class of overview.
    const overviewDiv = document.querySelector('.overview');
    overviewDiv.className = 'overview';

    // Remove divTwoContainer if it is currently in DOM.
    if(document.getElementById('divTwoContainer')) {

        document.getElementById('divTwoContainer').remove();

    }

    // Switching to All My Tasks page will show all the tasks.
    if(selection.textContent === "All My Tasks") {

        overviewDiv.className+= ' home';

        Array.from(overviewDiv.children).forEach((child) => {

            if(child.tagName === 'DIV') {

                child.remove();

            }

        });
        
        // Append fieldset to homepage or All My Tasks page.
        homePageFieldsets.forEach((fieldset) => {

            overviewDiv.append(fieldset);

        });


        // Determine if all tasks are accounted for in homepage.
        const getAllTasks = () => {
            return Array.from(document.getElementsByClassName('toDoDiv')).reverse();
        }

        const getDivTexts = (allTasks) => {
            return allTasks.map((div) => div.querySelector('p').textContent);
        }

        let allTasks = getAllTasks();
        let taskDivTexts = getDivTexts(allTasks);

        // Create new obj to be saved to LS.
        let updatedObjArr = allObjs;

        Object.keys(allObjs).forEach((key, idx) => {

            if(!key === taskDivTexts[idx]) {

                addMyTask(key);

            }

            // Update from previous declaration.
            allTasks = getAllTasks();
            taskDivTexts = getDivTexts(allTasks);

            // Update object taskId property.
            if(taskDivTexts[idx] === allObjs[key].title) {

                // Get div task ID.
                const divTaskId = allTasks[idx].id;

                updatedObjArr[key].taskId = divTaskId;

                // Check task status.
                if(allObjs[key].completed && !Array.from(allTasks[idx].classList).includes('complete')) {

                    setupCompletedTasks(allObjs[key]);
    
                } else if(!allObjs[key].completed && Array.from(allTasks[idx].classList).includes('complete')) {

                    allTasks[idx].className = 'toDoDiv';
                    allTasks[idx].querySelector('input').checked = false;
                    allTasks[idx].querySelector('button').remove();

                }

            }

        })

        // // Save to LS.
        saveToLocal(updatedObjArr, "allObjs");

    } else {

        // If tags are selected, remove the #.
        const modifiedSelectionTxt = selection.textContent.includes('#') ? selection.textContent.toLowerCase().replace('#', '') : selection.textContent.toLowerCase();

        // Overwrite overviewDiv class name with the relevant list/tag.
        overviewDiv.className += ` ${modifiedSelectionTxt}`;

        // Reset content
        Array.from(overviewDiv.children).forEach((child) => {

            child.remove();

        });

        // Get tasks that are for that particular list/tag.
        Object.keys(allObjs).forEach((key) => {

            // Case insensitive for object tags and list.
            const objTags = allObjs[key].tags.map((tag) => tag.toLowerCase());
            const objList = allObjs[key].list.toLowerCase();

            if(objList === modifiedSelectionTxt || objTags.includes(modifiedSelectionTxt)) {

                addMyTask(allObjs[key].title);

                if(allObjs[key].completed) {

                    setupCompletedTasks(allObjs[key]);

                }

            }

        })

    }

}