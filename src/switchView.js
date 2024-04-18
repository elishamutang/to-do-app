// Switch between different lists and tags page.

import addMyTask, { moveMyTask } from "./addMyTask";
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

        // Add home class to overview div.
        overviewDiv.className+= ' home';

        // Reset overviewDiv by removing all divs.
        Array.from(overviewDiv.children).forEach((child) => {
            if(child.tagName === 'DIV') {

                child.remove();

            }
        });
        
        // Append each fieldset to All My Tasks page.
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

        // Loop through latest saved to-do objects.
        Object.keys(allObjs).forEach((key, idx) => {

            // Add a div task inside overview div if not present in overview div but saved in allObjs from LS.
            if(!taskDivTexts.includes(key)) {

                if(allTasks.length !== Object.keys(allObjs).length) {

                    console.log(`${key} not included`);
                    addMyTask(key);

                } else {

                    allTasks[idx].querySelector('p').textContent = key;

                }
                
            }

            // Update from previous declaration.
            allTasks = getAllTasks();
            taskDivTexts = getDivTexts(allTasks);

            // Update object taskId property.
            if(taskDivTexts[idx] === allObjs[key].title) {

                // Get div task ID.
                const divTaskId = allTasks[idx].id;

                // Update in new obj.
                updatedObjArr[key].taskId = divTaskId;

            }

            // Check object completion.
            // Get relevant div.
            const taskDiv = getDiv(allTasks, key);

            if(allObjs[key].completed) {

                // If task is complete but does not include complete class, add it.
                if(!Array.from(taskDiv.classList).includes('complete')) {

                    setupCompletedTasks(allObjs[key]);

                }

            } else if(!allObjs[key].completed && Array.from(taskDiv.classList).includes('complete')) {
                
                // If task is not complete but still contains the complete class, remove it.
                if(Array.from(taskDiv.classList).includes('complete')) {

                    taskDiv.className = 'toDoDiv';
                    taskDiv.querySelector('input').checked = false;
                    taskDiv.querySelector('button').remove();

                }

            }

            // Check for tasks with date.
            if(allObjs[key].rawReminderDate !== "") {

                moveMyTask(allObjs[key]);

            }

        })


        // Remove any deleted objects from homepage.
        const objKeys = Object.keys(allObjs);

        if(objKeys.length !== taskDivTexts.length) {

            const [getOutlier] = taskDivTexts.filter((text) => {

                if(!objKeys.includes(text)) {
                    return text;
                }

            })

            const getOutlierDiv = getDiv(allTasks, getOutlier);
            getOutlierDiv.remove();

        }


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


function getDiv(allTasks, key) {

    let relevantDiv;

    allTasks.forEach((taskDiv) => {

        if(taskDiv.querySelector('p').textContent === key) {

            relevantDiv = taskDiv;

        }

    })

    return relevantDiv;

}