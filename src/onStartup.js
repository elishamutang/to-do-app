// When user loads the page, greeted with a dialog that asks for name.
import { checkFormInput } from "./createNewList";

export default function startUp() {

    // Dialog elem
    const startUpDialog = document.createElement('dialog');
    startUpDialog.id = 'startUpDialog';

    // Form elem
    const startUpForm = document.createElement('form');
    startUpForm.id = 'startUpForm';
    startUpForm.method = 'dialog';
    startUpForm.className = 'onStartup';

    // Text input
    const startUpInput = document.createElement('input');
    startUpInput.type = 'text';
    startUpInput.id = 'userNameInput';
    startUpInput.placeholder = 'Your name here...';
    startUpInput.className = 'userLists dialogInput';

    // Continue button
    const continueBtn = document.createElement('button');
    continueBtn.className = 'continue';
    continueBtn.type = 'submit';
    continueBtn.textContent = 'Continue';

    startUpForm.append(startUpInput);
    startUpForm.append(continueBtn);
    startUpDialog.append(startUpForm);

    // Insert startUpDialog right after body tag.
    document.querySelector('body').insertAdjacentElement('afterbegin', startUpDialog);

    startUpDialog.showModal();

    startUpForm.addEventListener('submit', (event) => {

        event.preventDefault();
        console.log(startUpForm.userNameInput.value);

        // checkFormInput(startUpForm.userNameInput, )

    })


}