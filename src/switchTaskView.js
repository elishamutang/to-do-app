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


    // Target checklist
    const checklistFieldset = document.getElementById('checkList');
    const checklistFieldsetChildren = Array.from(checklistFieldset.children);

    // checklistFieldsetChildren.forEach((child) => {

    //     if(child.tagName === 'DIV') {
            
    //         const divChildren = Array.from(child.children);

    //         divChildren.forEach((divChild) => {
                
    //             if(divChild.tagName === 'LABEL') {

    //                 currentObj.checklist.forEach((item) => {
    //                     console.log(divChild.textContent, item.input.textContent);
    //                     console.log(divChild.textContent === item.input.textContent);
    //                 })

    //             }

    //         })

    //     }

    // })
    
    const currentItems = Array.from(document.getElementsByClassName('checklistItem'));

    const objectChecklistItems = Array.from(currentObj.checklist).map((item) => {
                                return item.input;
                            });

    
    
    


}