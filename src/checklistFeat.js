// Change checklistInputElem from label elem to input elem for editing purposes.

export function changeChecklistInputElem(event, toDoObj) {

    // Replace existing label element with input element when label element is clicked.
    const checklistItemElem = document.getElementById(`${event.target.id}`);

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

        console.log(checklistItemElemSub);

        for(const [key, value] of Object.entries(toDoObj)) {

            if(key === 'checklist') {

                for(const item of value) {

                    console.log(checklistItemElemSub.id === item.input.id);

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

        console.log(toDoObj);

    }, {once: true})

}