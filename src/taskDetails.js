import changeTask from "./switchTaskView";
import { format } from "date-fns";
import { moveMyTask } from "./addMyTask";

// Click on any task to view details in a separate window next to task overview window.
// Keeps track of which task is being viewed.
let currentObj;

// Regex to identify more than 1 space entered.
// This regex can be improved but in the meantime it's good enough.
const multipleSpacesRegex = /[ ]{2,}/;


export default class createToDoObj {

    // Initialize each instance of a To-Do object with a title and checklist array.
    constructor(title) {
        this.title = title;
        this.checklist = [];
        this.notes = "";
        this.rawReminderDate = "";
        this.tags = [];
        this.list = "Personal"; // by default
    };


    // Set To-Do object header in taskDetails.
    viewTask(task, listOfObjs) {

        for (const obj of listOfObjs) {
            if(task.textContent == obj.title) {

                // Determine current object that is selected and changes task if needed.
                currentObj = obj;
                changeTask(currentObj);

            }
        }
        console.log(currentObj);
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

                createNewChecklistItem(checklistItems);

            }

        } else {

            createNewChecklistItem(checklistItems); // Add new checklist item entry if there is none currently.
        }

        console.log(currentObj.checklist);

    }


    createNote() {

        // Target notes input
        const notesInput = document.getElementById('notes');

        // Saves user input when focused out.
        notesInput.addEventListener('focusout', (event) => {

            // Resets input for more than 1 whitespace entered.
            if(multipleSpacesRegex.test(notesInput.value) === true) {
                console.log('whitespaces');
                notesInput.value = "";
            } else {
                currentObj.notes = notesInput.value; // Set notes for To-Do object.
                console.log(currentObj);
            }

        }, {once: true});
        
    }


    reminder(reminderBtn) {

        // Remind Me
        const reminderDialog = document.getElementById('reminder');
        const reminderForm = document.getElementById('setReminder');

        const dateInput = document.getElementById('dateInput');

        // Minimum date value set to current date (format: YYYY-MM-ddThh:mm, e.g 2017-06-01T08:30) 
        dateInput.min = `${format(new Date(), "yyyy")}-${format(new Date(), "MM")}-${format(new Date(), "dd")}T${format(new Date(), "HH")}:${format(new Date(), "mm")}`; 
        
        reminderDialog.showModal();
        dateInput.focus();

        // When Remind Me button is clicked, if the date is set, show that date on datetime-local input.
        if(currentObj.rawReminderDate !== "") {
            dateInput.value = currentObj.rawReminderDate;
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


        reminderForm.addEventListener('submit', function detectSubmit(event) {

            event.preventDefault();

            console.log(dateInput.value);
            const formattedResultingDate = format(dateInput.value, "MMM do, yyyy, hh:mma"); // Date format example: "Mon 26th, 2024, 10:59PM"
            console.log(formattedResultingDate);

            reminderBtn.textContent = `${formattedResultingDate}`; // Display date on the button.
            
            currentObj.rawReminderDate = dateInput.value;
            currentObj.formattedReminderDate = formattedResultingDate;

            // Determine whether submitted date fits into either Today, Tomorrow, Upcoming or Someday.
            moveMyTask(currentObj);

            reminderDialog.close();

        }, {once: true})


        reminderForm.addEventListener('reset', function deleteReminder() {

            reminderBtn.textContent = "Remind Me";

            currentObj.rawReminderDate = "";
            currentObj.formattedReminderDate = "";

            moveMyTask(currentObj);

            reminderDialog.close();

        }, {once: true})

    }


    editList(listBtn) {


        // Prepare all user lists.
        const currentLists = Array.from(document.querySelectorAll('ul.userLists > li > a'));
        const currentListsClone = currentLists.map((list) => list.cloneNode(true)); // To be appended in linksContainer

        const linksContainer = document.getElementById('linksContainer');
        
        const listsInsideListContainer = Array.from(linksContainer.children);

        const listsInsideListContainerText = listsInsideListContainer.map((list) => { return list.textContent })

        // Updates based on newly created lists.
        currentListsClone.forEach((clone) => {

            if(!listsInsideListContainerText.includes(clone.textContent)) {

                linksContainer.append(clone);

                if(currentObj.list === clone.textContent) {

                    // Added class of current for current list that To-Do object is in.
                    clone.className += ' current';
                    listBtn.innerHTML = `<i class='bx bx-list-ul'></i>${currentObj.list}`;

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

                }

            }

        })

    }


    setTag(setTagBtn) {

        // Open dialog
        const tagDialogElem = document.getElementById('tagDialog');

        tagDialogElem.showModal();

        const allTags = Array.from(document.getElementById('allTags').children); // Array of all anchor tags under allTags div.

        const tempTagsList = []; // Empty array to contain selected tags.
        const tagsToRemove = []; // Insert tag index from currentObj.tags for removal.

        // Style relevant tags associated with currentObj.tags array.
        if(currentObj.tags.length !== 0) {

            currentObj.tags.forEach((tag) => {

                tempTagsList.push(tag);

                allTags.forEach((existingTag) => {

                    if(tag === existingTag.textContent) {

                        existingTag.innerHTML = `${tag}<i class='bx bxs-check-circle'></i>`;

                    }

                })
    
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
                // If currentObj.tags is empty, push all saved tags in tempTagsList into currentObj.tags.
                if(currentObj.tags.length === 0) {

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

                        // tempTagsList = [];
            
                        currentObj.tags = tempTagsList; // Resets currentObj.tags to empty array.

                    }

                }

                updateTagsDisplay();
                this.removeEventListener('click', tagDialogFunc);

                tagDialogElem.close();

            }

        })


        // Update tags display after saving.
        function updateTagsDisplay() {

            let tagsInsideTheirDivs = [];
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

                // tagsBtn.innerHTML = "";

                // Insert each tag in its own div.
                currentObj.tags.forEach((tag, idx) => {

                    // const individualTagDiv = document.createElement('div');
                    // individualTagDiv.textContent = tag;

                    // tagsInsideTheirDivs.push(individualTagDiv);

                    if(idx === 0) {
                        tagsBtn.innerHTML = `${tag}`;
                        // tagsBtn.append(tagsInsideTheirDivs[idx]);

                    } else {
                        tagsBtn.innerHTML += ` ${tag}`;
                        // tagsBtn.append(tagsInsideTheirDivs[idx]);
                    }

                })

                tagsBtn.innerHTML += ` <i class='bx bx-message-square-add'></i>`;
                tagsBtn.className = 'selectedTagsDivContainer';

                selectedTagsDivContainer.appendChild(tagsDiv);

                additionalElemsSect.insertAdjacentElement('afterend', selectedTagsDivContainer); // Using flex for #divTwoContainer appends this where I want it.

            } else {

                // Update selectedTagsDivContainer display (not first time save).
                let tagsBtnDisplayArray = tagsBtn.innerHTML.split(" ");

                const boxiconTag = tagsBtnDisplayArray.splice(tagsBtnDisplayArray.indexOf("<i")).join(" "); // <i></i> boxicon tag.
                
                // Addition or removal of tags update the display (or innerHTML) of selectedTagsDivContainer.
                tagsBtnDisplayArray = currentObj.tags;

                if(currentObj.tags.length === 0) {

                    tagsBtn.innerHTML = `<i class='bx bx-hash' style='color:#fdfdfd'></i>Tags`;
                    tagsBtn.className = 'additionalFeatBtns';

                    selectedTagsDivContainer.remove();

                    additionalElemsSect.insertAdjacentElement('beforeend', tagsDiv);

                } else {

                    tagsBtn.innerHTML = `${tagsBtnDisplayArray.join(" ")} ${boxiconTag}`; // Constructs the final string for display.

                }

            }

            console.log(tagsInsideTheirDivs);

        }

    }

}


function createNewChecklistItem(checklistItems) {

    // Checklist fieldset
    const checkListFieldset = document.getElementById('checkList');
        
    // Add input checklist task.
    const checklistInputDiv = document.createElement('div');

    const checklistCheckbox = document.createElement('input');
    checklistCheckbox.type = 'checkbox';
    checklistCheckbox.className = 'toDoObj';

    const checklistInput = document.createElement('input');
    checklistInput.type = 'text';
    checklistInput.className = 'taskInputs checklistItem';

    // Sets ID for each task input created.
    const countOfItems = checklistItems.length;
    checklistInputDiv.id = `checklistDiv-${countOfItems}`;
    checklistInput.id = `checklistInput-${countOfItems}`;
    checklistCheckbox.id = `checkbox-${countOfItems}`;
    
    checklistInputDiv.append(checklistCheckbox);
    checklistInputDiv.append(checklistInput);
    checkListFieldset.append(checklistInputDiv);

    checklistInput.focus();


    // If input is out of focus, automatically pushes input into To-Do object checklist property.
    checklistInput.addEventListener('focusout', (event) => {

        // Store checklist item inside an object.
        const checklistItem = {
            input: checklistInput,
            value: checklistInput.value,
            divElem: checklistInputDiv
        };

        // Remove checklistInputDiv element if checklistInput loses focus and does not contain any inputs.
        if(checklistInput.value === "" || multipleSpacesRegex.test(checklistInput.value) === true) {

            // Remove checklistInputDiv and delete from checklist property array.
            checklistInputDiv.remove();

        } else {

            // Change to label and transfer over attributes to label elem.
            const checklistInputLabel = document.createElement('label');
            checklistInputLabel.className = 'taskInputs checklistItem';
            checklistInputLabel.id = `checklistInput-${countOfItems}`;
            checklistInputLabel.textContent = checklistInput.value;
            checklistInputLabel.htmlFor = checklistCheckbox.id;

            checklistInput.replaceWith(checklistInputLabel);

            checklistItem.input = checklistInputLabel;

            currentObj.checklist.push(checklistItem);

        }

    }, {once: true});

}