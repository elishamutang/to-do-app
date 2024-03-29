// Disables (or enables) inputs for task details, when checkbox is checked or not.

export function taskCompletion(taskDiv, taskDetailsContainer) {

    const taskDivClassList = Array.from(taskDiv.classList);
    const taskDetailsContainerClassList = Array.from(taskDetailsContainer.classList);

    taskDiv.className = taskDivClassList.includes('complete') ? taskDivClassList[0] : taskDiv.className + ' complete';
    taskDetailsContainer.className = taskDetailsContainerClassList.includes('disable') ? taskDetailsContainerClassList[0] : taskDetailsContainer.className + ' disable';

    const getInputs = Array.from(taskDetailsContainer.getElementsByTagName('input'));
    const getButtons = Array.from(taskDetailsContainer.getElementsByTagName('button'));

    if(taskDetailsContainerClassList.includes('disable')) {

        getInputs.forEach((input) => {

            input.disabled = false;

        })

        getButtons.forEach((button) => {

            button.disabled = false;

        })

    } else {

        getInputs.forEach((input) => {

            input.disabled = true;
    
        })
    
        getButtons.forEach((button) => {
    
            button.disabled = true;
    
        })

    }
        
    // If true, put strikethrough on task, disable taskDetails as it is considered completed.
    // Provide option to delete the task.
    
}