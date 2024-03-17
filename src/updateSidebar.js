// Update quantities of to-do task based on tags and list.

let count = 1;
let lastSelection = [];

export function updateSidebarLists(currentObj) {

    const counter = document.createElement('div');
    counter.className = 'counter';

    const sidebarListElems = Array.from(document.querySelector('ul.lists').children);

    // Pass in listOfObjs here? Go thru each one and determine which belongs to which list.



    

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
                    listElem.querySelector('div.counter').textContent = 1;

                } else {

                    console.log(`${elemChild.textContent} contains ${counter.id}`);

                    listElem.querySelector('div.counter').textContent = `${++count}`;

                }

            }

        })
        
        

    })



}


export function updateSidebarTags(currentObj) {

    // Insert code here



}