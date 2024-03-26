// Create new list or tags


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
function addList(listTitle) {

    // Target My Lists.
    const myLists = document.querySelector(`ul.secondary.lists`);

    const newLi = document.createElement('li');
    const newATag = document.createElement('a');
    newATag.className = 'list';

    newATag.removeAttribute('href');

    newATag.textContent = listTitle;

    newLi.append(newATag);

    myLists.append(newLi);

}

export function checkFormInput(titleInput, btnClassName) {

    // Targets submit type button.
    const submitBtn = document.querySelector(`form.${btnClassName} > button[type=submit]`);

    // Regular expression to allow inputs with more than one word and a space between each word (e.g this regex works).
    const regex = /^[a-z0-9]+( [a-z0-9]+)*$/i;

    // Initial state of form, button disabled cause of no input.
    if(titleInput.value == '') {
        submitBtn.disabled = true;
    } else if(titleInput.value != '' && regex.test(titleInput.value) == false) {
        submitBtn.disabled = true;
    } else {
        submitBtn.disabled = false;
    }

    // Detect user input.
    titleInput.addEventListener('keyup', () => {
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

        // Get form input value.
        const listTitle = form.listInput.value;
        
        // Add to new list.
        addList(listTitle, btnClass);

        // Clear out input value.
        setTimeout(() => {
            form.listInput.value = '';
        }, 1000);
        dialog.close();

        event.preventDefault();
    }

    // {once: true} automatically removes listener after being invoked.
    form.addEventListener('submit', submitOnContinue, {once: true});

}