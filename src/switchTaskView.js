// Switch task view based on currentObj from taskDetails.js and overwrite the details.

export default function changeTask(currentObj) {

    const getTitle = currentObj.title;

    // Overwrite header
    const taskDetailsHeader = document.getElementById('detailHeader');
    const taskDetailsHeaderElem = document.createElement('h1');
    taskDetailsHeaderElem.textContent = getTitle;

    // Displays to-do detail title.
    if(taskDetailsHeader.children.length === 0) {
        taskDetailsHeader.append(taskDetailsHeaderElem);
    } else {
        taskDetailsHeader.querySelector('h1').textContent = getTitle;
    }

    // Overwrite notes
    const notesSect = document.getElementById('notes');
    notesSect.value = currentObj.notes;    


    // Overwrite checklist items
    const checklistFieldset = document.getElementById('checkList');

    const checklistDiv =  Array.from(checklistFieldset.children).filter((child) => {
        return child.tagName === 'DIV';
    })

    if(currentObj.checklist.length === 0) {

        console.log(`${currentObj.title} has no checklist items`);
        
        // If currentObj checklist property is empty, remove all divs.
        checklistDiv.forEach((div) => {
            div.remove();
        })

    } else {

        // Check if still viewing currentObj by comparing each checklist item on fieldset against checklist array.
        const checklistCurrentItems = Array.from(checklistFieldset.getElementsByClassName('checklistItem'));

        const result = currentObj.checklist.every((elem, idx) => {
            return elem.input === checklistCurrentItems[idx];
        })

        if(result === true) {

            console.log('All checklist current items are identical with currentObj checklist items');
            return;

        } else {

            const checklistDivElems = currentObj.checklist.map((elem) => {
                return elem.divElem;
            })

            if(checklistDiv.length === 0) {

                checklistDivElems.forEach((div) => {
                    checklistFieldset.append(div);
                })

            } else {

                console.log('Overwrite current divs');
                checklistDiv.forEach((div) => {
                    div.remove();
                })

                checklistDivElems.forEach((elem) => {
                    checklistFieldset.append(elem);
                })

            }

        }

    }


    // Overwrite Reminder date
    const reminderBtn = document.getElementById('remindMe');

    if(currentObj.rawReminderDate === "") {

        reminderBtn.innerHTML = "<i class='bx bxs-bell-ring' style='color:#fdfdfd'></i>" + "Remind Me";

    } else {

        reminderBtn.textContent = currentObj.formattedReminderDate;

    }


    // Overwrite currentList button text
    const currentListBtn = document.getElementById('currentList');

    currentListBtn.innerHTML = `<i class='bx bx-list-ul'></i>${currentObj.list}`;
    const linksContainerChildren = Array.from(linksContainer.children);

    linksContainerChildren.forEach((link) => {

        // Overwrite currentList styling to highlight current list that the To-Do object is currently sitting in.
        if(link.className.includes('current') && link.textContent !== currentObj.list) {

            link.className = 'list';

        } else if(!link.className.includes('current') && link.textContent === currentObj.list) {

            link.className += ' current';

        }

    })


    // Overwrite tags display.
    const targetTagsDivContainer = document.getElementById('selectedTagsDivContainer');

    const tagsDiv = document.getElementById('tagsDiv');
    const tagsBtn = document.getElementById('tags');

    const additionalElems = document.getElementById('additionalElems');
    const divTwoContainerChildren = Array.from(document.getElementById('divTwoContainer').children);


    if(currentObj.tags.length === 0) {

        if(divTwoContainerChildren.includes(targetTagsDivContainer)) {

            console.log('remove');
            targetTagsDivContainer.remove();

            tagsBtn.innerHTML = `<i class='bx bx-hash' style='color:#fdfdfd'></i>Tags`;;
            tagsBtn.className = 'additionalFeatBtns';

            additionalElems.insertAdjacentElement('beforeend', tagsDiv);

        }

    } else {

        console.log('currentObj tags not empty');

        if(!divTwoContainerChildren.includes(targetTagsDivContainer)) {

            console.log('no selectedTagsDivContainer');

            const selectedTagsDivContainer = document.createElement('div'); // Prepare extra div to insert after additionalElems div.
            selectedTagsDivContainer.id = 'selectedTagsDivContainer';

            tagsBtn.innerHTML = "";

            // Insert each tag in its own div.
            currentObj.tags.forEach((tag) => {

                const individualTagDiv = document.createElement('div');

                individualTagDiv.className = 'selectedTags';
                individualTagDiv.textContent = tag;

                tagsBtn.append(individualTagDiv);

            })

            tagsBtn.innerHTML += ` <i class='bx bx-message-square-add'></i>`;
            tagsBtn.className = 'selectedTagsDivContainer';

            selectedTagsDivContainer.appendChild(tagsDiv);

            additionalElems.insertAdjacentElement('afterend', selectedTagsDivContainer); // Using flex for #divTwoContainer appends this where I want it.

        } else {

            console.log('has seletedTagDivContainer');

            const boxiconTag = tagsBtn.querySelector('i');
            tagsBtn.innerHTML = "";

            currentObj.tags.forEach((tag) => {

                const createNewTagDiv = document.createElement('div');

                createNewTagDiv.className = 'selectedTags';
                createNewTagDiv.textContent = tag;

                tagsBtn.append(createNewTagDiv);

            })

            tagsBtn.insertAdjacentElement('beforeend', boxiconTag);

        }


    }

    
    // Overwrite tagDialogElem.
    const allTags = Array.from(document.getElementById('allTags').children);

    allTags.forEach((tag) => {

        if(currentObj.tags.includes(tag.textContent)) {

            console.log(`${currentObj.title} includes ${tag.textContent}`);
            tag.innerHTML = `${tag.textContent}<i class='bx bxs-check-circle'></i>`;

        } else {

            tag.innerHTML = `${tag.textContent}`;

        }
        
    })

}