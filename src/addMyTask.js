// Home (or All Lists page)
// Default page users get directed to. An overview of all Lists/Projects.
import { isToday, isTomorrow, isFuture } from 'date-fns';
import CreateToDoObj from './createToDoObj';

// Add new task and displays them.
export default function addMyTask(task) {
  // Creates new task
  const newTask = createTaskWrapper(task);
  const overviewDiv = document.querySelector('.overview');
  const fieldsetToday = document.getElementById('today');

  // Always insert tasks at the top.
  // If at homepage (All My Tasks), insert in Today section.
  const relevantDiv = Array.from(overviewDiv.children).includes(fieldsetToday) ? fieldsetToday : overviewDiv;
  relevantDiv.insertAdjacentElement('afterbegin', newTask);

  // Determine what page is task added to.
  const [category] = Array.from(relevantDiv.classList).filter((value) => value !== 'overview');

  if (category) {
    // If user enters task in Personal, Work, Study etc list page.
    const getList = () => {
      if (category.includes('#')) {
        console.log(`${category} belongs to Tags.`);

        return 'Personal';
      } else {
        const toArr = category.split('');

        return toArr
          .map((char, idx) => {
            if (idx === 0) {
              return toArr[0].toUpperCase();
            } else {
              return toArr[idx];
            }
          })
          .join('');
      }
    };

    // If users enter in one of the tags under Tags.
    const getTag = () => {
      if (category.includes('#')) {
        const objTag = Array.from(category.replace('#', ''))
          .map((char, idx) => {
            if (idx === 0) {
              return char.toUpperCase();
            }

            return char.toLowerCase();
          })
          .join('');

        return [objTag];
      }
    };

    // Create new object
    return new CreateToDoObj(task, newTask.id, getList(), getTag());
  } else {
    // When entering task in All My Tasks.
    return new CreateToDoObj(task, newTask.id, 'Personal');
  }
}

function createTaskWrapper(taskValue) {
  // Creates new task in overview div.
  const newTaskDiv = document.createElement('div');
  newTaskDiv.className = 'toDoDiv';

  // Append text content as a text node.
  const newTaskText = document.createElement('p');
  newTaskText.textContent = taskValue;
  newTaskText.className = 'taskTitle';

  const newCheckBox = document.createElement('input');
  newCheckBox.type = 'checkbox';
  newCheckBox.className = 'toDoObj';

  // Check number of To Do's.
  setToDoIds(newCheckBox, newTaskDiv);

  newTaskDiv.append(newCheckBox);
  newTaskDiv.append(newTaskText);

  return newTaskDiv;
}

function setToDoIds(newCheckBox, newTaskDiv) {
  // Check for number of to do's present.
  const existingDivs = document.getElementsByClassName('toDoDiv');

  let divNum = 1;

  // Updates checkbox ID and label for attribute based on number of existing to do's.
  if (existingDivs.length == 0) {
    newTaskDiv.id = `taskDiv-${divNum}`;
    newCheckBox.id = `task-${divNum}`;
  } else {
    const lastdivNum = existingDivs.length;

    newTaskDiv.id = `taskDiv-${lastdivNum + divNum}`;
    newCheckBox.id = `task-${lastdivNum + divNum}`;
  }
}

// Move To-Do task based on reminder date set.
export function moveMyTask(currentObj) {
  // Get currentObj element in DOM (assume user does not create a task with the same title)
  const existingToDoTasks = Array.from(document.getElementsByClassName('toDoDiv'));

  for (const task of existingToDoTasks) {
    if (task.textContent === currentObj.title) {
      if (isToday(currentObj.rawReminderDate)) {
        const todayFieldset = document.getElementById('today');

        todayFieldset.append(task);
      } else if (isTomorrow(currentObj.rawReminderDate)) {
        const tomorrowFieldset = document.getElementById('tomorrow');

        tomorrowFieldset.append(task);
      } else if (isFuture(currentObj.rawReminderDate)) {
        const upcomingFieldset = document.getElementById('upcoming');

        upcomingFieldset.append(task);
      } else {
        const todayFieldset = document.getElementById('today');

        todayFieldset.append(task);
      }
    }
  }
}
