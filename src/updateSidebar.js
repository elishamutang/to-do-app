// Update quantities of to-do task based on tags and list.

let count = 0;
let lastSelection;

export function updateSidebarLists(currentObj, currentLists) {

    const counter = document.createElement('div');
    counter.className = 'counter';

    const sidebarListElems = Array.from(document.querySelector('ul.lists').children);


    // !* Fix this logic
    sidebarListElems.forEach((listElem) => {

        // Loops through each li element.
        const listElemChildren = Array.from(listElem.children);

        listElemChildren.forEach((elemChild) => {

            if(elemChild.textContent === currentObj.list) {

                counter.id = `${elemChild.textContent.toLowerCase()}Counter`;
                console.log(`This To-Do task belongs to ${elemChild.textContent}`);

                // Checks for selected li element if a div.counter element is already included.
                if(!listElemChildren.includes(listElem.querySelector('div.counter'))) {

                    listElem.insertAdjacentElement('beforeend', counter);

                } else {

                    console.log(`${elemChild.textContent} contains ${counter.id}`);

                }

            }

        })
        
        

    })



}


export function updateSidebarTags(currentObj, allTagsList) {

    // Insert code here



}