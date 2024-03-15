// Update quantities of to-do task based on tags and list.

let count = 0;
let lastSelection;

export function updateSidebarLists(currentObj, currentLists) {

    const counter = document.createElement('div');
    counter.className = 'counter';

    const sidebarListElems = Array.from(document.querySelector('ul.lists').children);

    const targetCounter = document.querySelector('div.counter');

    // !* Fix this logic
    sidebarListElems.forEach((listElem) => {

        // Loops through each li element.
        const listElemChildren = Array.from(listElem.children);

        listElemChildren.forEach((elemChild) => {

            if(elemChild.textContent === currentObj.list) {

                listElem.insertAdjacentElement('beforeend', counter);

                console.log(`This To-Do task belongs to ${elemChild.textContent}`);

                console.log(listElemChildren);
                console.log(listElemChildren.includes(targetCounter));

            }

        })
        
        

    })



}


export function updateSidebarTags(currentObj, allTagsList) {

    // Insert code here



}