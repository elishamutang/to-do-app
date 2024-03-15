// Update quantities of to-do task based on tags and list.

let count = 0;

export function updateSidebarLists(currentObj, currentLists) {

    const counter = document.createElement('div');
    counter.className = 'counter';

    currentLists.forEach((list) => {

        if(currentObj.list === list.textContent) {

            // Insert code here

            // Append amount of items in a specific list next to anchor tag element for each list item.
            counter.innerHTML = `${++count}`;

            list.insertAdjacentElement('afterend', counter);

        }


    })


}


export function updateSidebarTags(currentObj, allTagsList) {

    // Insert code here



}