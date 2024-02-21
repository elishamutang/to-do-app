// Switch task view based on currentObj from taskDetails.js

export default function changeTask(currentObj) {

    const getTitle = currentObj.title;

    // Target header
    const taskDetailsHeader = document.querySelector('#detailHeader');
    const taskDetailsHeaderElem = document.createElement('h1');
    taskDetailsHeaderElem.textContent = getTitle;

    // Displays to-do detail title.
    if(taskDetailsHeader.children.length === 0) {
        taskDetailsHeader.append(taskDetailsHeaderElem);
    } else {
        taskDetailsHeader.querySelector('h1').textContent = getTitle;
    }

}