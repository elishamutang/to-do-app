// Change checklistInputElem from label elem to input elem for editing purposes.

export function changeChecklistInputElem(event, toDoObj) {

    // Replace existing label element with input element when label element is clicked.
    const checklistItemElem = document.getElementById(`${event.target.id}`);
    const checklistLabelForAttr = checklistItemElem.htmlFor;

    let checklistItemElemSub;
    
    if(checklistItemElem.tagName !== 'LABEL') {
        return;
    }

    checklistItemElemSub = document.createElement('input');
    checklistItemElemSub.value = checklistItemElem.textContent;
    checklistItemElemSub.type = 'text';
    checklistItemElemSub.id = checklistItemElem.id;
    checklistItemElemSub.className = checklistItemElem.className;

    checklistItemElem.replaceWith(checklistItemElemSub);
    checklistItemElemSub.focus();

    console.log(checklistItemElem);
    console.log(checklistItemElemSub);


    // Allows user to edit existing checklist items, which will then be reflected in the corresponding toDoObj.
    checklistItemElemSub.addEventListener('focusout', function editChecklistItem(event) {


        for(const [key, value] of Object.entries(toDoObj)) {

            if(key === 'checklist') {

                for(const item of value) {

                    if(item.input.id === checklistItemElemSub.id && checklistItemElemSub.value !== "") {

                        console.log('Not empty');
                        item.value = checklistItemElemSub.value;

                    } else if(item.input.id === checklistItemElemSub.id && checklistItemElemSub.value === "") {

                        console.log('Empty');
                        checklistItemElemSub.value = item.value;

                    }
                }
            }
        }

        // Change back to label when focused out of input elem.
        const checklistLabelElem = document.createElement('label');

        checklistLabelElem.id = checklistItemElemSub.id;
        checklistLabelElem.className = checklistItemElemSub.className;
        checklistLabelElem.textContent = checklistItemElemSub.value;
        checklistLabelElem.htmlFor = checklistLabelForAttr;

        checklistItemElemSub.replaceWith(checklistLabelElem);

        console.log(toDoObj);

    }, {once: true})

}