// Switch between different lists and tags page.

import addMyTask from "./addMyTask";

export default function switchView(selection, homePageFieldsets) {

    // Get all to-do task objects.
    const allObjs = localStorage.getItem("allObjs") ? JSON.parse(localStorage.getItem("allObjs")) : {};

    // By default, overviewDiv will have a class of overview.
    const overviewDiv = document.querySelector('.overview');
    overviewDiv.className = 'overview';

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

            }

        })

    }

}