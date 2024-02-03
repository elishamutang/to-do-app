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

    // Exit button to close dialog.
    const exitBtn = document.querySelector(`form.${btnClass} > button.exit`);
    console.log(exitBtn);

    exitBtn.addEventListener('click', () => {
        dialog.close();
    })

    // Prevent form submission.
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
    }

    form.addEventListener('submit', submitOnContinue);

}

function addList(listTitle, btnClassName) {

    // Target My Lists.
    const myLists = document.querySelector(`ul.secondary.${btnClassName}`);
    console.log(myLists);

    const newLi = document.createElement('li');
    const newATag = document.createElement('a');

    newATag.href = "";
    newATag.textContent = listTitle;

    newLi.append(newATag);

    myLists.append(newLi);

}