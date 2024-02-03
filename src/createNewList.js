// Create new list or tags

export function createNew() {

    // Open dialog
    const addNewListBtn = document.querySelector('.header > button');
    const newListDialog = document.querySelector('.header dialog');

    // Focus on input
    const titleInput = document.getElementById('userInput');

    addNewListBtn.addEventListener('click', (e) => {
        newListDialog.showModal();
        titleInput.focus();
    })

    // Clicking outside form/dialog closes the dialog.
    newListDialog.addEventListener('mousedown', (e) => {
        if(e.target === newListDialog) {
            newListDialog.close();
        }
    })

    // Exit button to close dialog.
    const exitBtn = document.querySelector('.exit');

    exitBtn.addEventListener('click', () => {
        newListDialog.close();
    })

    // Prevent form submission.
    const form = document.getElementById('createNewList');

    const submitOnContinue = function(event) {
        event.preventDefault();
        const listTitle = titleInput.value;
        
        // Add to new list
        addList(listTitle);

        setTimeout(() => {
            titleInput.value = '';
        }, 1000);
        newListDialog.close();
    }

    form.addEventListener('submit', submitOnContinue);

}

function addList(listTitle) {

    // Target My Lists.
    const myLists = document.querySelector('.userLists > ul');

    const newLi = document.createElement('li');
    const newATag = document.createElement('a');

    newATag.href = "";
    newATag.textContent = listTitle;

    newLi.append(newATag);

    myLists.append(newLi);

}