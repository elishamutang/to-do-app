// Switch between different lists and tags.

export default function switchView(selection, homePage) {

    // Container holding div.overview and addTask form.
    const allTasksDivOne = document.getElementById('allTasksDivOne');

    if(selection.textContent === "All My Tasks") {

        if(Array.from(allTasksDivOne.children).includes(homePage)) {

            console.log(`div.overview included`);

        } else {

            document.querySelector('.overview').replaceWith(homePage);

        }

    } else {

        // Create a blank page for other pages other than All My Tasks.
        const otherPage = document.createElement('div');
        otherPage.className = 'overview';
        otherPage.className += selection.textContent.includes('#') ? ' ' + selection.textContent.toLowerCase().replace('#', '') : ' ' + selection.textContent.toLowerCase();

        // Replace All My Tasks page with other pages when selected.
        homePage.replaceWith(otherPage);

    }

}