// Switch detail task view based on currentObj from taskDetails.js and overwrite the details.

import { deleteChecklistItem } from './checklistCompletion';
import { prepareInputListItem, switchElem } from './checklistFeat';
import { prepareTaskDeleteBtn } from './taskCompletion';

export default function changeTask(currentObj) {
  // Get divTwoContainer
  const divTwoContainer = document.getElementById('divTwoContainer');
  divTwoContainer.dataset.task = currentObj.taskId;

  // Check whether selected task has been completed or not.
  checkCompletion(currentObj, divTwoContainer);

  // Overwrite header
  const taskDetailsHeader = document.getElementById('detailHeader');
  taskDetailsHeader.textContent = currentObj.title;

  // Overwrite notes
  const notesSect = document.getElementById('notes');
  notesSect.value = currentObj.notes;

  // Overwrite checklist items
  const checklistFieldset = document.getElementById('checkList');

  const checklistDiv = Array.from(checklistFieldset.children).filter((child) => {
    return child.tagName === 'DIV';
  });

  if (Object.keys(currentObj.checklist).length === 0) {
    console.log(`${currentObj.title} has no checklist items`);

    if (checklistDiv.length !== 0) {
      // If currentObj checklist property is empty, remove all existing divs if present.
      checklistDiv.forEach((div) => {
        div.remove();
      });
    }
  } else {
    let result = false;

    // Check if still viewing currentObj by comparing each checklist item on fieldset against checklist array.
    if (checklistDiv.length !== 0) {
      const checklistCurrentItems = Array.from(checklistFieldset.getElementsByClassName('checklistItem'));

      result = Object.keys(currentObj.checklist).every((key, idx) => {
        return currentObj.checklist[key].value === checklistCurrentItems[idx].textContent;
      });
    }

    if (result === true) {
      console.log('All checklist current items are identical with currentObj checklist items');
      return;
    } else {
      if (checklistDiv.length !== 0) {
        console.log('Overwrite current divs');

        checklistDiv.forEach((div) => {
          div.remove();
        });
      }

      Object.keys(currentObj.checklist).forEach((key, idx) => {
        const checklistDivWrapper = prepareInputListItem(idx);
        const currentObjChecklistItem = currentObj.checklist[key];

        // Gets INPUT elem inside checklistDivWrapper to be sub to LABEL elem.
        const checklistItemInput = checklistDivWrapper.querySelector("input[type='text']");

        const checklistLabelElem = switchElem(checklistItemInput);
        checklistLabelElem.textContent = currentObjChecklistItem.value;

        checklistItemInput.replaceWith(checklistLabelElem);

        checklistFieldset.append(checklistDivWrapper);
      });
    }
  }

  // Overwrite Reminder date
  const reminderBtn = document.getElementById('remindMe');

  if (currentObj.rawReminderDate === '') {
    reminderBtn.innerHTML = "<i class='bx bxs-bell-ring' style='color:#fdfdfd'></i>" + 'Remind Me';
  } else {
    reminderBtn.textContent = currentObj.formattedReminderDate;
  }

  // Overwrite currentList button text
  const currentListBtn = document.getElementById('currentList');

  currentListBtn.innerHTML = `<i class='bx bx-list-ul'></i>${currentObj.list}`;
  const linksContainerChildren = Array.from(linksContainer.children);

  linksContainerChildren.forEach((link) => {
    // Overwrite currentList styling to highlight current list that the To-Do object is currently sitting in.
    if (link.className.includes('current') && link.textContent !== currentObj.list) {
      link.className = 'list';
    } else if (!link.className.includes('current') && link.textContent === currentObj.list) {
      link.className += ' current';
    }
  });

  // Overwrite tags display.
  const targetTagsDivContainer = document.getElementById('selectedTagsDivContainer');

  const tagsDiv = document.getElementById('tagsDiv');
  const tagsBtn = document.getElementById('tags');

  const additionalElems = document.getElementById('additionalElems');
  const divTwoContainerChildren = Array.from(document.getElementById('divTwoContainer').children);

  if (currentObj.tags.length === 0) {
    if (divTwoContainerChildren.includes(targetTagsDivContainer)) {
      targetTagsDivContainer.remove();

      tagsBtn.innerHTML = `<i class='bx bx-hash' style='color:#fdfdfd'></i>Tags`;
      tagsBtn.className = 'additionalFeatBtns';

      additionalElems.insertAdjacentElement('beforeend', tagsDiv);
    }
  } else {
    console.log('currentObj tags not empty');

    if (!divTwoContainerChildren.includes(targetTagsDivContainer)) {
      console.log('no selectedTagsDivContainer');

      const selectedTagsDivContainer = document.createElement('div'); // Prepare extra div to insert after additionalElems div.
      selectedTagsDivContainer.id = 'selectedTagsDivContainer';

      tagsBtn.innerHTML = '';

      // Insert each tag in its own div.
      currentObj.tags.forEach((tag) => {
        const individualTagDiv = document.createElement('div');

        individualTagDiv.className = 'selectedTags';
        individualTagDiv.id = tag.toLowerCase();
        individualTagDiv.textContent = tag;

        tagsBtn.append(individualTagDiv);
      });

      tagsBtn.innerHTML += ` <i class='bx bx-message-square-add selectedTags'></i>`;
      tagsBtn.className = 'selectedTagsDivContainer';

      selectedTagsDivContainer.appendChild(tagsDiv);

      additionalElems.insertAdjacentElement('afterend', selectedTagsDivContainer); // Using flex for #divTwoContainer appends this where I want it.
    } else {
      console.log('has selectedTagDivContainer');

      const boxiconTag = tagsBtn.querySelector('i');
      tagsBtn.innerHTML = '';

      currentObj.tags.forEach((tag) => {
        const createNewTagDiv = document.createElement('div');

        createNewTagDiv.className = 'selectedTags';
        createNewTagDiv.id = tag.toLowerCase();
        createNewTagDiv.textContent = tag;

        tagsBtn.append(createNewTagDiv);
      });

      tagsBtn.insertAdjacentElement('beforeend', boxiconTag);
    }
  }

  // Overwrite tagDialogElem.
  const allTags = Array.from(document.getElementById('allTags').children);

  allTags.forEach((tag) => {
    if (currentObj.tags.includes(tag.textContent)) {
      console.log(`${currentObj.title} includes ${tag.textContent}`);
      tag.innerHTML = `${tag.textContent}<i class='bx bxs-check-circle'></i>`;
    } else {
      tag.innerHTML = `${tag.textContent}`;
    }
  });
}

function checkCompletion(currentObj, divTwoContainer) {
  // Task completion.
  const toDoStatus = currentObj.completed;

  const divTwoContainerClassList = Array.from(divTwoContainer.classList);

  const getAllInputs = Array.from(divTwoContainer.getElementsByTagName('input'));
  const getAllButtons = Array.from(divTwoContainer.getElementsByTagName('button'));

  // taskDetailsContainer will show the task that was clicked.
  if (currentObj.taskId === divTwoContainer.dataset.task) {
    // If task is not complete and taskDetailsContainer is disabled, remove the disable class.
    if (!toDoStatus && divTwoContainerClassList.includes('disable')) {
      const newClassList = divTwoContainerClassList.filter((className) => {
        return className !== 'disable';
      });

      // Enables all inputs/buttons.
      divTwoContainer.className = newClassList.join(' ');

      getAllInputs.forEach((input) => {
        input.disabled = false;
      });

      getAllButtons.forEach((button) => {
        button.disabled = false;
      });
    } else if (toDoStatus) {
      if (!divTwoContainerClassList.includes('disable')) {
        divTwoContainer.className += ' disable';

        getAllInputs.forEach((input) => {
          input.disabled = true;
        });

        getAllButtons.forEach((button) => {
          button.disabled = true;
        });
      }

      // Add delete functionality to remove taskDetailsContainer.
      const getDiv = () => {
        let result; // Store div.
        const getAllTasks = Array.from(document.getElementsByClassName('toDoDiv')).reverse();

        getAllTasks.forEach((div) => {
          if (div.querySelector('p').textContent === currentObj.title) {
            result = div;
          }
        });

        return result;
      };

      const deleteBtn = getDiv().querySelector('button');

      deleteBtn.addEventListener('click', () => {
        divTwoContainer.remove();
      });
    }
  }

  // Check checklist item status.
  checklistItemStatus(currentObj);
}

// Style checklist items based on completed value.
function checklistItemStatus(currentObj) {
  Object.keys(currentObj.checklist).forEach((key) => {
    if (currentObj.checklist[key].completed) {
      // Instantly run code after DOM finishes loading.
      setTimeout(() => {
        const itemDiv = document.getElementById(key);
        itemDiv.className += ' complete';

        const itemCheckbox = itemDiv.querySelector('input[type="checkbox"]');
        itemCheckbox.checked = true;

        const deleteItemBtn = prepareTaskDeleteBtn();

        // Prevents appending of delete checklist item button more than once.
        if (!Array.from(itemDiv.children).includes(itemDiv.querySelector('button'))) {
          itemDiv.append(deleteItemBtn);

          // Add delete functionality.
          deleteItemBtn.addEventListener('click', () => {
            deleteChecklistItem(itemDiv, currentObj);
          });
        }
      }, 0);
    }
  });
}
