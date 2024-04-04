// Switch between different lists and tags.

import addMyTask from "./addMyTask";

export default function switchView(selection, homePageFieldsets) {

    // Get all to-do task objects.
    const allObjs = localStorage.getItem("allObjs") ? JSON.parse(localStorage.getItem("allObjs")) : {};

    // By default, overviewDiv will have a class of overview.
    const overviewDiv = document.querySelector('.overview');
    overviewDiv.className = 'overview';
    console.log(overviewDiv);

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

        // Overwrite overviewDiv class name with the relevant list/tag.
        overviewDiv.className += selection.textContent.includes('#') ? ' ' + selection.textContent.toLowerCase().replace('#', '') : ' ' + selection.textContent.toLowerCase();

        // Reset content
        Array.from(overviewDiv.children).forEach((child) => {

            child.remove();

        });

        // Get tasks that are for that particular list.
        Object.keys(allObjs).forEach((key) => {

            if(allObjs[key].list === selection.textContent) {

                addMyTask(allObjs[key].title);

            }

        })

    }

}