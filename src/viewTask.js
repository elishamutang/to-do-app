// Click on any task to view in a separate window next to task overview window.

export default function viewTask(task) {

    // Extract title from label
    const getTitle = task.querySelector('label').textContent;

    // Target window next to tasks overview.
    const allTasksDivTwo = document.getElementById('allTasksDivTwo');

    // Target header
    const allTasksDivTwoHeader = document.querySelector('#detailHeader > h1');
    allTasksDivTwoHeader.textContent = getTitle;

}