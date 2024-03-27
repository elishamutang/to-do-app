// When user loads the page, greeted with a dialog that asks for name.
import { checkFormInput } from "./createNewList";
import initializePage from './initializePage';

// Random color generator for userProfile.
const rcolor = require('rcolor');
const goldenRatio = 0.618;

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
    startUpInput.placeholder = 'Your username here...';
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

    // Check user input to ensure it is valid.
    checkFormInput(startUpForm.userNameInput, 'onStartup');

    // Get username
    startUpForm.addEventListener('submit', (event) => {

        event.preventDefault();

        const userName = startUpForm.userNameInput.value;

        const userProfile = document.getElementById('userProfile');
        const userNameDiv = document.getElementById('userName');

        // Username first letter as part of user profile.
        userProfile.querySelector('button').textContent = (Array.from(userName)[0]).toUpperCase();
        
        // Randomly generate profile colors.
        userProfile.querySelector('button').style.backgroundColor = rcolor({
                                                                            hue: (Math.random() + goldenRatio) % 1, 
                                                                            saturation: 0.8, 
                                                                            value: 0.8
                                                                            });

        userNameDiv.textContent = userName;

        startUpDialog.close();

        initializePage();
        
    })


}