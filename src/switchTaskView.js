import { format } from "date-fns";

// Switch task view based on currentObj from taskDetails.js and overwrite the details.

export default function changeTask(currentObj) {

    const getTitle = currentObj.title;

    // Overwrite header
    const taskDetailsHeader = document.getElementById('detailHeader');
    const taskDetailsHeaderElem = document.createElement('h1');
    taskDetailsHeaderElem.textContent = getTitle;

    // Displays to-do detail title.
    if(taskDetailsHeader.children.length === 0) {
        taskDetailsHeader.append(taskDetailsHeaderElem);
    } else {
        taskDetailsHeader.querySelector('h1').textContent = getTitle;
    }

    // Overwrite notes
    const notesSect = document.getElementById('notes');
    notesSect.value = currentObj.notes;    


    // Overwrite checklist items
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

            if(checklistDiv.length === 0) {

                checklistDivElems.forEach((div) => {
                    checklistFieldset.append(div);
                })

            } else {

                console.log('Overwrite current divs');
                checklistDiv.forEach((div) => {
                    div.remove();
                })

                checklistDivElems.forEach((elem) => {
                    checklistFieldset.append(elem);
                })

            }

        }

    }


    // Overwrite Reminder date
    const reminderBtn = document.getElementById('remindMe');

    if(currentObj.rawReminderDate === "") {
        reminderBtn.textContent = "Remind Me";
    } else {
        reminderBtn.textContent = currentObj.formattedReminderDate;
    }

    
    


}