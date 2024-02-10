// Create new list or tags

import { constructFrom } from "date-fns";

export function createNew(createNewBtn) {

    // Button class to identify whether lists or tags are being created.
    const btnClass = createNewBtn.className;

    // Open dialog and focus on input
    const dialog = document.querySelector(`dialog.${btnClass}`);
    const titleInput = document.querySelector(`input.${btnClass}`);

    dialog.showModal();
    titleInput.focus();

    // Clicking outside form/dialog closes the dialog.
    dialog.addEventListener('mousedown', (e) => {
        if(e.target === dialog) {
            dialog.close();
        }
    });

    // Exit button to close dialog when clicked.
    const exitBtn = document.querySelector(`form.${btnClass} > button.exit`);

    exitBtn.addEventListener('click', () => {
        dialog.close();
    })

    // Submit and validate user input.
    submitForm(titleInput, btnClass, dialog)

}

// Updates either My Lists or Tags section for newly created lists/tags.
function addList(listTitle, btnClassName) {

    // Target My Lists.
    const myLists = document.querySelector(`ul.secondary.${btnClassName}`);

    const newLi = document.createElement('li');
    const newATag = document.createElement('a');

    newATag.href = "";

    // Check whether for Tags or My Lists.
    if(btnClassName == 'tags' && !listTitle.includes('#')) {
        newATag.textContent = `#${listTitle}`;
    } else {
        newATag.textContent = listTitle;
    }

    newLi.append(newATag);

    myLists.append(newLi);

}

export function checkFormInput(titleInput, btnClassName) {

    // Targets submit type button.
    const submitBtn = document.querySelector(`form.${btnClassName} > button[type=submit]`);

    // Regular expression for a-z, A-Z and 0-9 characters only.
    const regex = /^[a-zA-Z0-9]+$/;

    // Initial state of form, button disabled cause of no input.
    if(titleInput.value == '') {
        submitBtn.disabled = true;
    } else if(titleInput.value != '' && regex.test(titleInput.value) == false) {
        submitBtn.disabled = true;
    } else {
        submitBtn.disabled = false;
    }

    // Detect user input.
    titleInput.addEventListener('keyup', (event) => {
        // If user input does not follow regex pattern, continue button remains disabled.
        if(regex.test(titleInput.value) == false) {
            submitBtn.disabled = true;
        } else {
            submitBtn.disabled = false;
        }
    })

}

function submitForm(titleInput, btnClass, dialog) {

    // Check form input, determines if input is valid to be submitted or not.
    checkFormInput(titleInput, btnClass);

    // Prevent form submission to server.
    const form = document.querySelector(`form.${btnClass}`);

    const submitOnContinue = function(event) {
        const listTitle = titleInput.value;
        
        // Add to new list
        addList(listTitle, btnClass);

        setTimeout(() => {
            titleInput.value = '';
        }, 1000);
        dialog.close();

        event.preventDefault();
    }

    // {once: true} automatically removes listener after being invoked.
    form.addEventListener('submit', submitOnContinue, {once: true});

}