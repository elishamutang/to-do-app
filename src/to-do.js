// Create new list

export function createNewList() {

    const testBtn = document.querySelector('.header button');
    const testDialog = document.querySelector('.header dialog');
    const testDialogOpen = document.querySelector('.header dialog[open]');

    testBtn.addEventListener('click', (e) => {
        testDialog.showModal();
    })

    testDialog.addEventListener('click', (e) => {
        if(e.target == testDialog) {
            testDialog.close();
        }
    })
}