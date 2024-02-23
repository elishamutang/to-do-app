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

    const checklistDiv =  Array.from(checklistFieldset.children).filter((child) => {
        return child.tagName === 'DIV';
    })


    if(currentObj.checklist.length === 0) {

        console.log(`${currentObj.title} has no checklist items`);
        
        // If currentObj checklist property is empty, remove all divs.
        checklistDiv.forEach((div) => {
            div.remove();
        })

    } else {

        // Check if still viewing currentObj by comparing each checklist item on fieldset against checklist array.
        const checklistCurrentItems = Array.from(checklistFieldset.getElementsByClassName('checklistItem'));

        const result = currentObj.checklist.every((elem, idx) => {
            return elem.input === checklistCurrentItems[idx];
        })

        if(result === true) {
            console.log('All checklist current items are identical with currentObj checklist items');

            return;

        } else {

            const checklistDivElems = currentObj.checklist.map((elem) => {
                return elem.divElem;
            })

            // !* Fix logic here, switching between different To-Do objects should overwrite current checklist with appropriate one.
            checklistDivElems.forEach((div) => {
                checklistFieldset.append(div);
            })

            console.log(`Append ${currentObj.title} checklist items`);

        }

    }
    
    


}