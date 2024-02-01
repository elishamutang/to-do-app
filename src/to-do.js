// Create new list

export function createNewList() {

    const testBtn = document.querySelector('.header button');
    const testDialog = document.querySelector('.header dialog');

    testBtn.addEventListener('click', (e) => {
        testDialog.showModal();
    })

    testDialog.addEventListener('click', (e) => {
        if(e.target === testDialog) {
            testDialog.close();
        }
    })
}