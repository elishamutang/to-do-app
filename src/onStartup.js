// When user loads the page, greeted with a dialog that asks for name.


export default function startUp() {

    // Dialog elem
    const startUpDialog = document.createElement('dialog');
    startUpDialog.id = 'startUpDialog';

    // Form elem
    const startUpForm = document.createElement('form');
    startUpForm.id = 'startUpForm';
    startUpForm.method = 'dialog';
    startUpForm.className = 'userLists';

    // Text input
    const startUpInput = document.createElement('input');
    startUpInput.type = 'text';
    startUpInput.id = 'userNameInput';
    startUpInput.placeholder = 'Your name goes here...';
    startUpInput.className = 'userLists dialogInput';

    startUpForm.append(startUpInput);
    startUpDialog.append(startUpForm);

    // Insert startUpDialog right after body tag.
    document.querySelector('body').insertAdjacentElement('afterbegin', startUpDialog);

    startUpDialog.showModal();

}