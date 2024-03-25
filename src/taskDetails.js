import changeTask from "./switchTaskView";
import { format } from "date-fns";
import { moveMyTask } from "./addMyTask";
import { updateSidebarListDisplay, updateSidebarTagsDisplay } from "./updateSidebar";
import { saveUserData } from "./saveToLocalStorage";
import { createNewChecklistItem } from "./checklistFeat";

// Regex to identify more than 1 space entered.
// This regex can be improved but in the meantime it's good enough.
const multipleSpacesRegex = /[ ]{2,}/;


export default class CreateToDoObj {

    // Initialize each instance of a To-Do object with a title and checklist array.
    constructor(title, taskId) {
        this.title = title;
        this.checklist = [];
        this.notes = "";
        this.rawReminderDate = "";
        this.tags = [];
        this.list = "Personal"; // by default
        this.taskId = taskId;
    };


    // Display task details.
    viewTask() {
        
        changeTask(this);

    }

    // Change task title for a To-Do object.
    changeTaskTitle(elem) {

        const currentObj = this;

        if(elem.tagName === 'DIV') {

            const headerInput = document.createElement('input');
            headerInput.type = 'text';
            headerInput.className = 'taskInputs';
            headerInput.id = elem.id;
            headerInput.value = elem.textContent;

            elem.replaceWith(headerInput);

            headerInput.focus();

            headerInput.addEventListener('focusout', function changeBackToDiv() {

                const headerDiv = document.createElement('div');
                headerDiv.className = 'taskDetails';
                headerDiv.id = headerInput.id;
                headerDiv.textContent = headerInput.value;

                currentObj.title = headerDiv.textContent;
                saveUserData(currentObj, "title");

                const taskDivElem = document.getElementById(currentObj.taskId);
                taskDivElem.childNodes[1].textContent = currentObj.title;

                headerInput.replaceWith(headerDiv);

            }, {once: true});

        }

    }


    addToChecklist() {

        // Target all checklist items
        const checklistItems = document.getElementsByClassName('checklistItem');
        const lastChecklistItem = checklistItems[checklistItems.length-1];

        if(checklistItems.length !== 0) {

            // If last checklist item does not have any input, prevent user from adding another one.
            if(lastChecklistItem.value === "" || multipleSpacesRegex.test(lastChecklistItem.value) === true) {

                console.log('Invalid input');
                lastChecklistItem.value = "";
                lastChecklistItem.focus();

            } else {

                createNewChecklistItem(this, checklistItems, multipleSpacesRegex);

            }

        } else {

            createNewChecklistItem(this, checklistItems, multipleSpacesRegex); // Add new checklist item entry if there is none currently.
        }

        saveUserData(this, "checklist"); // Save checklist items to localStorage.

        console.log(this.checklist);

    }


    createNote() {

        const currentObj = this;

        // Target notes input
        const notesInput = document.getElementById('notes');

        // Saves user input when focused out.
        notesInput.addEventListener('focusout', () => {

            // Resets input for more than 1 whitespace entered.
            if(multipleSpacesRegex.test(notesInput.value) === true) {

                console.log('whitespaces');
                notesInput.value = "";

            } else {

                currentObj.notes = notesInput.value; // Set notes for To-Do object.
                saveUserData(currentObj, "notes");

            }

        }, {once: true});
        
    }


    reminder(reminderBtn) {

        const currentObj = this;

        // Remind Me
        const reminderDialog = document.getElementById('reminder');
        const reminderForm = document.getElementById('setReminder');

        const dateInput = document.getElementById('dateInput');

        // Minimum date value set to current date (format: YYYY-MM-ddThh:mm, e.g 2017-06-01T08:30) 
        dateInput.min = `${format(new Date(), "yyyy")}-${format(new Date(), "MM")}-${format(new Date(), "dd")}T${format(new Date(), "HH")}:${format(new Date(), "mm")}`; 
        
        reminderDialog.showModal();
        dateInput.focus();

        // When Remind Me button is clicked, if the date is set, show that date on datetime-local input.
        if(this.rawReminderDate !== "") {
            dateInput.value = this.rawReminderDate;
        } else {
            dateInput.value = dateInput.min;
        }

        // Closes reminder dialog if user clicks outside dialog.
        reminderDialog.addEventListener('click', function closeDialog(event) {

            if(event.target === reminderDialog) {
                reminderDialog.close();
                this.removeEventListener('click', closeDialog);
            }

        })

        // Submit or save reminder date.
        reminderForm.addEventListener('submit', function detectSubmit(event) {

            event.preventDefault();

            console.log(dateInput.value);
            const formattedResultingDate = format(dateInput.value, "MMM do, yyyy, hh:mma"); // Date format example: "Mon 26th, 2024, 10:59PM"
            console.log(formattedResultingDate);

            reminderBtn.textContent = `${formattedResultingDate}`; // Display date on the button.
            
            currentObj.rawReminderDate = dateInput.value;
            currentObj.formattedReminderDate = formattedResultingDate;

            saveUserData(currentObj, "rawReminderDate"); // Save user property data to localStorage.
            saveUserData(currentObj, "formattedReminderDate"); // Save user property data to localStorage.

            // Determine whether submitted date fits into either Today, Tomorrow, Upcoming or Someday.
            moveMyTask(currentObj);

            reminderDialog.close();

        }, {once: true})


        // Reset reminder date.
        reminderForm.addEventListener('reset', function deleteReminder() {

            reminderBtn.textContent = "Remind Me";

            currentObj.rawReminderDate = "";
            currentObj.formattedReminderDate = "";

            saveUserData(currentObj, "rawReminderDate"); // Save user property data to localStorage.
            saveUserData(currentObj, "formattedReminderDate");

            moveMyTask(currentObj); // Move task to Today (default)

            reminderDialog.close();

        }, {once: true})

    }


    editList(listBtn) {

        const currentObj = this;

        // Prepare all user lists.
        const currentLists = Array.from(document.querySelectorAll('ul.lists > li > a.list'));
        const currentListsClone = currentLists.map((list) => list.cloneNode(true)); // To be appended in linksContainer

        const linksContainer = document.getElementById('linksContainer');
        
        const listsInsideListContainer = Array.from(linksContainer.children);

        const listsInsideListContainerText = listsInsideListContainer.map((list) => { return list.textContent })

        // Updates based on newly created lists.
        currentListsClone.forEach((clone) => {

            clone.className = 'list'; // Reset cloned sidebar lists class names.
            clone.innerHTML = clone.textContent; // Prevents boxicon icon to appear in listDialog elem.

            if(!listsInsideListContainerText.includes(clone.textContent)) {

                linksContainer.append(clone);

                if(this.list === clone.textContent) {

                    // Added class of current for current list that To-Do object is in.
                    clone.className += ' current';
                    listBtn.innerHTML = `<i class='bx bx-list-ul'></i>${this.list}`;

                }
            }

        })


        const listDialog = document.getElementById('list');
        listDialog.showModal();

        listDialog.addEventListener('click', function listDialogFunc(event) {

            // Closes dialog if clicked outside.
            if(event.target === listDialog) {
                
                listDialog.close();
                this.removeEventListener('click', listDialogFunc);

            // Style current list that the selected To-Do object is in.
            } else if(event.target.tagName === 'A') {

                let selectionMovement = [currentObj.list]; // By default, all newly created lists are added to Personal.               
                let selectedList = event.target;

                if(selectedList.textContent === currentObj.list) {

                    console.log(`Object currently in ${selectedList.textContent}`);
                    return;

                } else {

                    currentObj.list = selectedList.textContent;
                    listBtn.innerHTML = `<i class='bx bx-list-ul'></i>${currentObj.list}`;

                    selectionMovement.push(currentObj.list); // Update movement.

                    const listLinks = [];
                    const linksContainerChildren = Array.from(linksContainer.children);

                    linksContainerChildren.forEach((child) => {

                        selectionMovement.forEach((text) => {

                            if(child.textContent === text) {

                                listLinks.push(child);

                            }

                        })

                    })
                    
                    // Updates styling of class current based on where the selected To-Do obj is currently sitting in.
                    listLinks.forEach((list) => {

                        if(currentObj.list === list.textContent) {

                            list.className += ' current';

                        } else {

                            list.className = 'list';

                        }

                    })

                    console.log(`Object moved to ${currentObj.list}`);

                    saveUserData(currentObj, "list"); // Save user property data to localStorage.

                }

                updateSidebarListDisplay(); // Count number of to-do task belonging to a particular list and update it on the sidebar.

            }

        })

    }


    setTag() {

        const currentObj = this;

        // Prepare list in dialog.
        // One-liner to get tag text only without # infront.
        const allTagsList = Array.from(document.getElementsByClassName('currentTags'));
        const allTagsListText = allTagsList.map(tag => tag.textContent).map(text => text.replace('#', ''));

        const allTagsDiv = document.getElementById('allTags');

        if(allTagsDiv.children.length === 0) {

            allTagsListText.forEach((text) => {

                const textToTag = document.createElement('a');
                textToTag.textContent = text;
    
                allTagsDiv.append(textToTag);
    
            })
            
        }

        // Open dialog
        const tagDialogElem = document.getElementById('tagDialog');

        tagDialogElem.showModal();

        const allTags = Array.from(allTagsDiv.children); // Array of all anchor tags under allTags div.

        const tempTagsList = []; // Empty array to contain selected tags.
        const tagsToRemove = []; // Insert tag index from currentObj.tags for removal.

        // Styling tagDialogElem with current tags.
        if(this.tags.length !== 0) {

            this.tags.forEach((tag) => {

                // Any tag currently associated with currentObj will be pushed into tempTagsList.
                tempTagsList.push(tag);

                // Style relevant tags associated with currentObj.tags array when tagDialogElem modal is open.
                allTags.forEach((existingTag) => {

                    if(tag === existingTag.textContent) {

                        existingTag.innerHTML = `${tag}<i class='bx bxs-check-circle'></i>`;

                    }

                })

            })

        } else {

            allTags.forEach((existingTag) => {

                existingTag.innerHTML = existingTag.textContent; // Resets tagDialogElem styling when switching between different objects.

            })

        }
        

        // Event listener for tagDialog dialog.
        tagDialogElem.addEventListener('click', function tagDialogFunc(event) {

            const saveBtn = document.getElementById('saveTagSelection');
            const cancelBtn = document.getElementById('cancelBtn');

            // Close dialog
            if(event.target === tagDialogElem || event.target === cancelBtn) {

                tagDialogElem.close();
                this.removeEventListener('click', tagDialogFunc);

                // Resets tag selection if not saved.
                allTags.forEach((tag) => {

                    tag.innerHTML = tag.textContent;

                })

            } else if(event.target.tagName === 'A') {

                const selectedTag = event.target;

                // Goes thru each tag under allTags div.
                allTags.forEach((tag) => {

                    if(selectedTag === tag && !tempTagsList.includes(selectedTag.textContent)) {

                        tempTagsList.push(selectedTag.textContent); // Pushes into temporary tags list in preparation for saving.

                        selectedTag.innerHTML += "<i class='bx bxs-check-circle'></i>";

                    } else if(selectedTag === tag && tempTagsList.includes(selectedTag.textContent)) {

                        for(let i = 0; i < tempTagsList.length; i++) {

                            if(tempTagsList[i] === selectedTag.textContent) {

                                console.log(tempTagsList); // tempTagsList before tag removal.

                                console.log(`${tempTagsList[i]} at ${i} in currentObj.tags array will be removed.`);
                                
                                tagsToRemove.push(i) // Indicates that they are potential tags to be removed.
                                tempTagsList.splice(i, 1); // Removes tags from tempTagsList that will potentially be saved in currentObj.tags array.

                                console.log(tempTagsList); // tempTagsList after tag removal.

                                selectedTag.innerHTML = selectedTag.textContent;

                            }

                        }

                    }
                    
                })

            } else if(event.target === saveBtn) {

                // Save selected tag(s).

                if(currentObj.tags.length === 0) {

                    // If currentObj.tags is empty, push all saved tags in tempTagsList into currentObj.tags.
                    currentObj.tags = tempTagsList;

                } else {

                    if(tempTagsList.length !== 0) {

                        tempTagsList.forEach((tempTag) => {
    
                            // Adding new tags.
                            if(!currentObj.tags.includes(tempTag)) {
    
                                currentObj.tags.push(tempTag);
    
                            } else {
                                
                                // Remove existing tags.
                                if(tagsToRemove.length !== 0) {

                                    currentObj.tags = tempTagsList;

                                }
    
                            }
    
                        })

                    } else {

                        // Resets currentObj.tags to tempTagsList = [];
            
                        currentObj.tags = tempTagsList;

                    }

                }

                saveUserData(currentObj, "tags"); // Save user property data to localStorage.

                updateSidebarTagsDisplay(); // Counts number of to-do tasks belonging to a certain tag and display on sidebar. 

                updateTagsDisplay(currentObj); // Inserts a div just below the additionalElem div where it displays the selected tags.

                this.removeEventListener('click', tagDialogFunc);

                tagDialogElem.close();

            }

        })

    }

}

// Update tags display after saving.
function updateTagsDisplay(currentObj) {

    const tagsBtn = document.getElementById('tags');
    const tagsDiv = document.getElementById('tagsDiv');

    const divTwoContainer = document.getElementById('divTwoContainer');
    const divTwoContainerChildren = Array.from(divTwoContainer.children);

    const targetTagsDivContainer = document.getElementById('selectedTagsDivContainer');
    const additionalElemsSect = document.getElementById('additionalElems');

    // First time save (e.g no tags associated with the particular to-do task).
    if(!divTwoContainerChildren.includes(targetTagsDivContainer) && currentObj.tags.length !== 0) {

        const selectedTagsDivContainer = document.createElement('div'); // Prepare extra div to insert after additionalElems div.
        selectedTagsDivContainer.id = 'selectedTagsDivContainer';

        tagsBtn.innerHTML = "";

        // Insert each tag in its own div.
        currentObj.tags.forEach((tag) => {

            const individualTagDiv = document.createElement('div');

            individualTagDiv.className = 'selectedTags';
            individualTagDiv.id = tag.toLowerCase();
            individualTagDiv.textContent = tag;

            tagsBtn.append(individualTagDiv);

        })

        tagsBtn.innerHTML += ` <i class='bx bx-message-square-add selectedTags'></i>`;
        tagsBtn.className = 'selectedTagsDivContainer';

        selectedTagsDivContainer.appendChild(tagsDiv);

        additionalElemsSect.insertAdjacentElement('afterend', selectedTagsDivContainer); // Using flex for #divTwoContainer appends this where I want it.

    } else {

        // Update selectedTagsDivContainer display (not first time save).
        const boxiconTag = tagsBtn.querySelector('i');

        // Addition or removal of tags for a To-Do task.
        if(currentObj.tags.length === 0) {

            tagsBtn.innerHTML = `<i class='bx bx-hash' style='color:#fdfdfd'></i>Tags`;
            tagsBtn.className = 'additionalFeatBtns';

            targetTagsDivContainer.remove();

            additionalElemsSect.insertAdjacentElement('beforeend', tagsDiv);

        } else {

            tagsBtn.innerHTML = "";

            currentObj.tags.forEach((tag) => {

                const createNewTagDiv = document.createElement('div');

                createNewTagDiv.className = 'selectedTags';
                createNewTagDiv.id = tag.toLowerCase();
                createNewTagDiv.textContent = tag;

                tagsBtn.append(createNewTagDiv);

            })

            tagsBtn.insertAdjacentElement('beforeend', boxiconTag);

        }

    }

}