import { saveUserData } from "./saveToLocalStorage";

// Change checklistInputElem from label elem to input elem for editing purposes.
export function changeChecklistInputElem(event, toDoObj) {

    // Replace existing label element with input element when label element is clicked.
    const checklistItemElem = document.getElementById(`${event.target.id}`);
    const checklistLabelForAttr = checklistItemElem.parentElement.querySelector('input[type="checkbox"]').id;

    // Switch LABEL elem to INPUT elem.
    const checklistItemElemSub = checklistItemElem.tagName === 'LABEL' ? switchElem(checklistItemElem) : null;

    // In cases where additional clicks after the first one is logged, return statement is run.
    if(checklistItemElemSub === null) {
        return;
    }

    checklistItemElem.replaceWith(checklistItemElemSub);
    checklistItemElemSub.focus();
 
    // Allows user to edit existing checklist items, which will then be reflected in the corresponding toDoObj.
    checklistItemElemSub.addEventListener('focusout', function editChecklistItem() {

        for(const [key, value] of Object.entries(toDoObj)) {

            if(key === 'checklist') {

                for(const item of value) {

                    if(item.lableElemId === checklistItemElemSub.id && checklistItemElemSub.value !== "") {

                        console.log('Not empty');
                        item.value = checklistItemElemSub.value;

                    } else if(item.lableElemId === checklistItemElemSub.id && checklistItemElemSub.value === "") {

                        console.log('Empty');
                        checklistItemElemSub.value = item.value;

                    }
                }
            }
        }

        // Switch INPUT elem back to LABEL and keep INPUT attributes and data.
        const checklistLabelElem = switchElem(checklistItemElemSub);
        checklistLabelElem.htmlFor = checklistLabelForAttr;
        checklistItemElemSub.replaceWith(checklistLabelElem);

        saveUserData(toDoObj, "checklist");

    }, {once: true})

}


// Create new checklist item.
export function createNewChecklistItem(currentObj, checklistItems, multipleSpacesRegex) {

    // Checklist fieldset
    const checklistFieldset = document.getElementById('checkList');

    const countOfItems = checklistItems.length;

    // Generate checklistDiv that contains checkbox and text input elem for user input.
    const checklistWrapper = prepareInputListItem(countOfItems);
    checklistFieldset.append(checklistWrapper);

    // Select input elem inside checklistWrapper, that will be substituted to a label elem after.s
    const checklistInputElem = checklistWrapper.querySelector("input[type='text']");  

    checklistInputElem.focus();


    // If input is out of focus, automatically pushes input into To-Do object checklist property.
    checklistInputElem.addEventListener('focusout', () => {

        // Store checklist item inside an object.
        const checklistItem = {
            value: checklistInputElem.value
        };

        // Remove checklistInputDiv element if checklistInput loses focus and does not contain any inputs.
        if(checklistInputElem.value === "" || multipleSpacesRegex.test(checklistInputElem.value) === true) {

            // Remove checklistInputDiv and delete from checklist property array.
            checklistWrapper.remove();

        } else {

            // Change to label and transfer over attributes to label elem.
            const checklistInputLabel = document.createElement('label');
            checklistInputLabel.className = 'taskInputs checklistItem';

            checklistInputLabel.id = `checklistInput-${++countOfItems}`; // Need to ammend this to allow removal of checklist items.
            checklistInputLabel.textContent = checklistInputElem.value;

            const checklistCheckbox = checklistWrapper.querySelector("input[type='checkbox']");
            checklistInputLabel.htmlFor = checklistCheckbox.id;

            checklistInputElem.replaceWith(checklistInputLabel);

            checklistItem.lableElemId = checklistInputLabel.id;

            currentObj.checklist.push(checklistItem);

        }

        saveUserData(currentObj, "checklist");

    }, {once: true});

}


export function prepareInputListItem(countOfItems) {

    ++countOfItems;

    // Add input checklist task.
    const checklistInputDiv = document.createElement('div');

    const checklistCheckbox = document.createElement('input');
    checklistCheckbox.type = 'checkbox';
    checklistCheckbox.className = 'toDoObj';

    const checklistInput = document.createElement('input');
    checklistInput.type = 'text';
    checklistInput.className = 'taskInputs checklistItem';

    // Sets ID for each task input created.
    checklistInputDiv.id = `checklistDiv-${countOfItems}`;
    checklistInput.id = `checklistInput-${countOfItems}`;
    checklistCheckbox.id = `checkbox-${countOfItems}`;
    
    checklistInputDiv.append(checklistCheckbox);
    checklistInputDiv.append(checklistInput);

    return checklistInputDiv;

}


export function switchElem(checklistItemElem) {

    if(checklistItemElem.tagName === 'LABEL') {

        const checklistItemInputElem = document.createElement('input');
        checklistItemInputElem.value = checklistItemElem.textContent;
        checklistItemInputElem.type = 'text';
        checklistItemInputElem.id = checklistItemElem.id;
        checklistItemInputElem.className = checklistItemElem.className;

        return checklistItemInputElem;

    } else if(checklistItemElem.tagName === 'INPUT') {

        const checklistLabelElem = document.createElement('label');

        checklistLabelElem.id = checklistItemElem.id;
        checklistLabelElem.className = checklistItemElem.className;
        checklistLabelElem.textContent = checklistItemElem.value;
        checklistLabelElem.htmlFor = checklistItemElem.parentElement.querySelector('input[type="checkbox"]').id;

        return checklistLabelElem;

    }

}