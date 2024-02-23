// Switch task view based on currentObj from taskDetails.js

export default function changeTask(currentObj) {

    const getTitle = currentObj.title;

    // Target header
    const taskDetailsHeader = document.getElementById('detailHeader');
    const taskDetailsHeaderElem = document.createElement('h1');
    taskDetailsHeaderElem.textContent = getTitle;

    // Displays to-do detail title.
    if(taskDetailsHeader.children.length === 0) {
        taskDetailsHeader.append(taskDetailsHeaderElem);
    } else {
        taskDetailsHeader.querySelector('h1').textContent = getTitle;
    }

    // Target notes
    const notesSect = document.getElementById('notes');
    notesSect.value = currentObj.notes;    


    // *! Fix logic below
    // Target checklist
    const checklistFieldset = document.getElementById('checkList');

    const checklistFieldsetDivChildren = Array.from(checklistFieldset.children).filter((child) => {
        return child.tagName === 'DIV';
    });
    
    const currentItems = Array.from(document.getElementsByClassName('checklistItem'));

    const objectChecklistItems = Array.from(currentObj.checklist).map((item) => {
                                return item.input;
                            });

    // Check whether current items equal to items in current obj.
    const testResult = currentItems.every((element, idx) => {       
        return element === objectChecklistItems[idx];
    })

    console.log(currentItems, objectChecklistItems);

    if(testResult) {
        return;
    } else {

        if(currentObj.checklist.length === 0) {
            console.log('empty obj');
            checklistFieldsetDivChildren.forEach((div) => {
                div.remove();
            });

        } else {
            console.log('not emtpy');
        }

    }
    
    


}