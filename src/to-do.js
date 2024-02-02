// Create new list

export function createNewList() {

    // Open dialog
    const addNewListBtn = document.querySelector('.header > button');
    const newListDialog = document.querySelector('.header dialog');

    // Focus on input
    const titleInput = document.querySelector('.header dialog form > input');

    addNewListBtn.addEventListener('click', (e) => {
        newListDialog.showModal();
        titleInput.focus();
    })

    newListDialog.addEventListener('mousedown', (e) => {
        if(e.target === newListDialog) {
            newListDialog.close();
        }
    })

    // Exit button
    const exitBtn = document.querySelector('.exit');

    exitBtn.addEventListener('click', () => {
        newListDialog.close();
    })


}