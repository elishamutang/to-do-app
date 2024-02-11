// Click on any task to view details in a separate window next to task overview window.

export default function viewTask(task) {

    // Extract title from label
    const getTitle = task.textContent;
    console.log(getTitle);

    // Target window next to tasks overview.
    const allTasksDivTwo = document.getElementById('allTasksDivTwo');

    // Target header
    const allTasksDivTwoDiv = document.querySelector('#detailHeader');
    const allTasksDivTwoHeader = document.createElement('h1');
    allTasksDivTwoHeader.textContent = getTitle;

    // Displays to-do detail title.
    if(allTasksDivTwoDiv.children.length === 0) {
        allTasksDivTwoDiv.append(allTasksDivTwoHeader);
    } else {
        allTasksDivTwoDiv.querySelector('h1').textContent = getTitle;
    }

}