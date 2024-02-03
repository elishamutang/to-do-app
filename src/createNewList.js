// Create new list or tags

export function createNew(createNewBtn) {

    const btnClass = createNewBtn.className;

    // Open dialog
    const dialog = document.querySelector(`dialog.${btnClass}`);

    // Focus on input
    const titleInput = document.querySelector(`input.${btnClass}`);

    dialog.showModal();
    titleInput.focus();

    // Clicking outside form/dialog closes the dialog.
    dialog.addEventListener('mousedown', (e) => {
        if(e.target === dialog) {
            dialog.close();
        }
    })

    // Exit button to close dialog when clicked.
    const exitBtn = document.querySelector(`form.${btnClass} > button.exit`);

    exitBtn.addEventListener('click', () => {
        dialog.close();
    })

    // Prevent form submission to server.
    const form = document.querySelector(`form.${btnClass}`);

    const submitOnContinue = function(event) {
        event.preventDefault();
        const listTitle = titleInput.value;
        
        // Add to new list
        addList(listTitle, btnClass);

        setTimeout(() => {
            titleInput.value = '';
        }, 1000);
        dialog.close();

        // Remove after each call else events will be added to the last one.
        form.removeEventListener('submit', submitOnContinue);
    }

    form.addEventListener('submit', submitOnContinue);

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