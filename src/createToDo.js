// Module to create to-do objects.

// Each To-Do object should have the following:
// - Title
// - Due date
// - Priority
// - Notes
// - Checklist


export default class ToDoObjs {

    constructor(title, dueDate, priority, notes, checklist) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
    }

}

// To-Do object checklist
export function checkList(fieldset, listOfObjs) {

    console.log(listOfObjs);
    console.log(fieldset);

    // Add input checklist task.
    const checklistInputDiv = document.createElement('div');

    const checklistInput = document.createElement('input');
    checklistInput.type = 'checkbox';
    checklistInput.className = 'toDoObj';

    const checklistInputLabel = document.createElement('label');

    checklistInputDiv.append(checklistInput);
    checklistInputDiv.append(checklistInputLabel);

    fieldset.append(checklistInputDiv);

}