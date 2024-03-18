// Update quantities of to-do task based on tags and list.
import saveToLocal from "./saveToLocalStorage";

let count = 1;

export function updateSidebarLists(currentObj, listOfObjs) {

    const counter = document.createElement('div');
    counter.className = 'counter';

    const sidebarListElems = Array.from(document.querySelector('ul.lists').children);

    // Update count of to-do tasks for each list in sidebar.
    const countOfTasks = counterFunc(listOfObjs);

    // !* Fix this logic
    sidebarListElems.forEach((listElem) => {

        // Loops through each li element.
        const listElemChildren = Array.from(listElem.children);

        listElemChildren.forEach((elemChild) => {

            if(elemChild.textContent === currentObj.list) {

                counter.id = `${elemChild.textContent.toLowerCase()}Counter`;
                console.log(`This To-Do task belongs to ${elemChild.textContent}`);

                for(let [key, value] of Object.entries(countOfTasks)) {

                    if(key === elemChild.textContent) {

                        console.log(elemChild.textContent, value);

                    }

                }


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


function counterFunc(listOfObjs) {

    // Object to keep track of total number of To-Do tasks in each list (Personal, Work, Groceries).
    const countsForEachList = {};

    listOfObjs.forEach((obj) => {

        // Counts number of To-Do tasks for each list.
        countsForEachList[obj.list] = countsForEachList[obj.list] ? countsForEachList[obj.list] + 1 : 1;

    })

    saveToLocal(countsForEachList, "listCounter");

    return countsForEachList;

}