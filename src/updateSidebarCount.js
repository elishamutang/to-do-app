// Update quantities of to-do task based on tags and list.
import saveToLocal from "./saveToLocalStorage";

// Sidebar list display.
export function updateSidebarListDisplay() {

    // Gets Lists from sidebar.
    const sidebarListElems = Array.from(document.querySelector('ul.lists').children);
    
    // Update count of to-do tasks for each list in sidebar.
    const countOfLists = counterFunc().countsForEachList;

    sidebarListElems.forEach((listElem) => {

        const listElemChildren = Array.from(listElem.children);

        listElemChildren.forEach((child) => {

            // Update quantites for each list.
            if(Object.keys(countOfLists).includes(child.textContent)) {

                if(!listElemChildren.includes(listElem.querySelector('div.counter'))) {

                    // Counter div to display quantity next to each list.
                    const counterDiv = document.createElement('div');
                    counterDiv.className = 'counter';
                    listElem.insertAdjacentElement('beforeend', counterDiv);

                }

                listElem.querySelector('div.counter').textContent = countOfLists[child.textContent];

            } else {

                // Remove div counter if quantity is 0, in other words remove existing div.counter elem if not found in countOfLists.
                if(child.tagName === 'A') {

                    if(listElemChildren.includes(listElem.querySelector('div.counter'))) {

                        listElem.querySelector('div.counter').remove();

                    }

                }

            }

        })

    })

}

// Side tags display.
export function updateSidebarTagsDisplay() {

    // Get all tags from sidebar.
    const sidebarTagElems = Array.from(document.querySelector('ul.tags').children);

    // Update count of to-do tasks for each tag in sidebar.
    const countOfTags = counterFunc().countsForEachTag;

    sidebarTagElems.forEach((tagElem) => {

        const tagElemChildren = Array.from(tagElem.children);

        tagElemChildren.forEach((child) => {

            const modifiedChildTxt = child.textContent.replace('#', ''); // Remove # infront of tags.

            // Update quantites for each tag.
            if(Object.keys(countOfTags).includes(modifiedChildTxt)) {

                if(!tagElemChildren.includes(tagElem.querySelector('div.counter'))) {

                    const tagCounterDiv = document.createElement('div');
                    tagCounterDiv.className = 'counter';

                    tagElem.insertAdjacentElement('beforeend', tagCounterDiv);

                }

                tagElem.querySelector('div.counter').textContent = countOfTags[modifiedChildTxt];

            } else {

                // Remove div counter if quantity is 0, in other words remove existing div.counter elem if not found in countOfTags.
                if(child.tagName === 'A') {

                    if(tagElemChildren.includes(tagElem.querySelector('div.counter'))) {

                        tagElem.querySelector('div.counter').remove();

                    }

                }

            }

        })

    })

}


// Count number of To-Do objects for each list.
function counterFunc() {

    const allObjs = localStorage.getItem("allObjs") ? JSON.parse(localStorage.getItem("allObjs")) : null;

    // Object to keep track of total number of To-Do tasks in each list (Personal, Work, Groceries).
    const countsForEachList = {};
    const countsForEachTag = {};

    Object.keys(allObjs).forEach((key) => {
        
        const toDoObject = allObjs[key];

        countsForEachList[toDoObject.list] = countsForEachList[toDoObject.list] ? countsForEachList[toDoObject.list] + 1 : 1;

        const toDoObjectTags = toDoObject.tags;

        toDoObjectTags.forEach((tag) => {

            countsForEachTag[tag] = countsForEachTag[tag] ? countsForEachTag[tag] + 1 : 1;

        })

    })

    saveToLocal(countsForEachTag, "tagCounter");
    saveToLocal(countsForEachList, "listCounter");

    return { countsForEachList, countsForEachTag };

}