// Update quantities of to-do task based on tags and list.

import saveToLocal from "./saveToLocalStorage";

let count = 1;

export function updateSidebarLists(currentObj, listOfObjs) {

    const counter = document.createElement('div');
    counter.className = 'counter';

    const sidebarListElems = Array.from(document.querySelector('ul.lists').children);
    
    const actualLists = [];

    // !* Fix this logic
    sidebarListElems.forEach((listElem) => {

        // Loops through each li element.
        const listElemChildren = Array.from(listElem.children);

        listElemChildren.forEach((elemChild) => {

            if(elemChild.className === 'list') {

                actualLists.push(elemChild.textContent);

            }

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

    console.log(listOfObjs);
    
    // Object to keep track of total number of To-Do tasks in each list (Personal, Work, Groceries).
    const countsForEachList = {};

    listOfObjs.forEach((obj) => {

        // Counts number of To-Do tasks for each list.
        countsForEachList[obj.list] = countsForEachList[obj.list] ? countsForEachList[obj.list] + 1 : 1;

    })

    saveToLocal(countsForEachList, "listCounter");

    console.log(countsForEachList);

}


export function updateSidebarTags(currentObj) {

    // Insert code here



}