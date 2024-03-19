// Update quantities of to-do task based on tags and list.
import saveToLocal from "./saveToLocalStorage";

// Personal list (default list)
export function updateSidebarLists(currentObj) {

    const counterDiv = document.createElement('div');
    counterDiv.className = 'counter';

    const sidebarListElems = Array.from(document.querySelector('ul.lists').children);

    // Update count of to-do tasks for each list in sidebar.
    const countOfTasks = counterFunc();

    // console.log(countOfTasks);

    // !* Fix this logic
    sidebarListElems.forEach((listElem) => {

        // Loops through each li element.
        const listElemChildren = Array.from(listElem.children);

        for(let [list, count] of Object.entries(countOfTasks)) {

            listElemChildren.forEach((elemChild) => {

                if(elemChild.textContent === list) {

                    if(!listElemChildren.includes(listElem.querySelector('div.counter'))) {

                        listElem.insertAdjacentElement('beforeend', counterDiv);
                        listElem.querySelector('div.counter').textContent = count;

                    } else {

                        console.log(`${elemChild.textContent} contains ${counterDiv.id}`);
                        listElem.querySelector('div.counter').textContent = count;

                    }

                }


            })

        }

    })

}

// Count number of To-Do objects for each list.
function counterFunc() {

    const listOfObjs = localStorage.getItem("listOfObjs") ? JSON.parse(localStorage.getItem("listOfObjs")) : null;

    // Object to keep track of total number of To-Do tasks in each list (Personal, Work, Groceries).
    const countsForEachList = {};

    listOfObjs.forEach((obj) => {

        // Counts number of To-Do tasks for each list.
        countsForEachList[obj.list] = countsForEachList[obj.list] ? countsForEachList[obj.list] + 1 : 1;

    })

    saveToLocal(countsForEachList, "listCounter");

    return countsForEachList;

}