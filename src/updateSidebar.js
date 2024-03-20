// Update quantities of to-do task based on tags and list.
import saveToLocal from "./saveToLocalStorage";

// Personal list (default list)
export function updateSidebar() {

    // Counter div to display quantity next to each list.
    const counterDiv = document.createElement('div');
    counterDiv.className = 'counter';

    const sidebarListElems = Array.from(document.querySelector('ul.lists').children);

    // Update count of to-do tasks for each list in sidebar.
    const countOfTasks = counterFunc();


    sidebarListElems.forEach((listElem) => {

        const listElemChildren = Array.from(listElem.children);

        listElemChildren.forEach((child) => {

            // Update quantites for each list.
            if(Object.keys(countOfTasks.countsForEachList).includes(child.textContent)) {

                if(!listElemChildren.includes(listElem.querySelector('div.counter'))) {

                    listElem.insertAdjacentElement('beforeend', counterDiv);

                }

                listElem.querySelector('div.counter').textContent = countOfTasks.countsForEachList[child.textContent];

            } else {

                // Remove div counter if quantity is 0, in other words remove existing div.counter elem if not found in countOfTasks.
                if(child.tagName === 'A') {

                    if(listElemChildren.includes(listElem.querySelector('div.counter'))) {

                        listElem.querySelector('div.counter').remove();

                    }

                }

            }

        })

    })

}


// Count number of To-Do objects for each list.
function counterFunc() {

    const listOfObjs = localStorage.getItem("listOfObjs") ? JSON.parse(localStorage.getItem("listOfObjs")) : null;

    // Object to keep track of total number of To-Do tasks in each list (Personal, Work, Groceries).
    const countsForEachList = {};
    const countsForEachTag = {};

    listOfObjs.forEach((obj) => {

        // Counts number of To-Do tasks for each list.
        countsForEachList[obj.list] = countsForEachList[obj.list] ? countsForEachList[obj.list] + 1 : 1;

        const objTags = obj.tags;

        objTags.forEach((tag) => {

            // Counts number of To-Do tasks for each tag associated with it.
            countsForEachTag[tag] = countsForEachTag[tag] ? countsForEachTag[tag] + 1 : 1;

        })

    })

    saveToLocal(countsForEachTag, "tagCounter");
    saveToLocal(countsForEachList, "listCounter");

    return { countsForEachList, countsForEachTag };

}