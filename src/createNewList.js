// Create new list

export function createNewList() {

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
        console.log(titleInput.value);
        setTimeout(() => {
            titleInput.value = '';
        }, 1000);
        newListDialog.close();
    }

    form.addEventListener('submit', submitOnContinue);

}