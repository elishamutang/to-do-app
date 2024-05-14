// Checking the checklist checkbox.

import { saveUserData } from './saveToLocalStorage';
import { removeTaskFromObj, prepareTaskDeleteBtn } from './taskCompletion';

export default function checklistCompletion(inputElem, currentObj) {
  // Fetch latest allObjs object.
  const allObjs = localStorage.getItem('allObjs') ? JSON.parse(localStorage.getItem('allObjs')) : {};

  const checklistItemDeleteBtn = prepareTaskDeleteBtn();

  Object.keys(allObjs).forEach((key) => {
    if (key === currentObj.taskId) {
      // Compare DOM elements to task object.
      const checklistItemDiv = inputElem.parentElement;
      const checklistItemCheckbox = checklistItemDiv.querySelector('input');
      const checklistItemLabelElem = checklistItemDiv.querySelector('label');

      // Store reference of task checklist object to taskChecklist.
      const taskChecklist = currentObj.checklist;

      Object.keys(taskChecklist).forEach((key) => {
        if (taskChecklist[key].labelElemId === checklistItemLabelElem.id) {
          console.log(`${checklistItemLabelElem.id} checked: ${checklistItemCheckbox.checked}`);

          // Checked checkbox indicating checklist item is completed.
          if (checklistItemCheckbox.checked) {
            checklistItemDiv.className += ' complete';
            taskChecklist[key].completed = true;

            checklistItemDiv.append(checklistItemDeleteBtn);

            checklistItemDeleteBtn.addEventListener('click', () => {
              deleteChecklistItem(checklistItemDiv, currentObj);
            });
          } else {
            // Un-checked checkbox indicating checklist item is not completed.
            checklistItemDiv.className = Array.from(checklistItemDiv.classList)
              .filter((value) => value !== 'complete')
              .join(' ');
            taskChecklist[key].completed = false;

            checklistItemDiv.querySelector('button').remove();
          }
        }
      });

      saveUserData(currentObj, 'checklist');
    }
  });
}

export function deleteChecklistItem(checklistItemDiv, currentObj) {
  // Fetch latest data.
  const allObjs = JSON.parse(localStorage.getItem('allObjs'));

  // Remove checklist item div.
  checklistItemDiv.remove();

  Object.keys(allObjs).forEach((key) => {
    if (key === currentObj.taskId) {
      const checklistItems = currentObj.checklist;

      Object.keys(checklistItems).forEach((key, idx) => {
        if (key === checklistItemDiv.querySelector('label').id) {
          const getAllDivs = Array.from(
            document.getElementById('checkList').getElementsByClassName('checklistItem')
          ).map((elem) => elem.parentElement);

          // Splice here, and rename.
          const updatedChecklistObj = updateChecklistId(removeTaskFromObj(checklistItems, idx), getAllDivs);

          currentObj.checklist = updatedChecklistObj;

          saveUserData(currentObj, 'checklist');
        }
      });
    }
  });
}

function updateChecklistId(updatedChecklistObj, getAllDivs) {
  // Update label elem IDs.
  getAllDivs.forEach((div, idx) => {
    div.querySelector('label').id = `checklistInput-${++idx}`;
    div.querySelector('label').htmlFor = div.querySelector('input').id;
  });

  // Update in checklist object.

  updatedChecklistObj = Object.keys(updatedChecklistObj).map((key, idx) => {
    updatedChecklistObj[key].labelElemId = `checklistInput-${++idx}`;

    const newKey = updatedChecklistObj[key].labelElemId;

    return { [newKey]: updatedChecklistObj[key] };
  });

  const newObj = Object.assign({}, ...updatedChecklistObj);

  return newObj;
}
