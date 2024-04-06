# Action List for this Project.

Priority (Low, High)

## To-Do List Basic Functionality (High)
- Create home page for user. User should be directed to an existing project list or 'home'.
    - Currently named as 'All My Tasks', user able to get an overview of all current and upcoming tasks.
    - This will require 'To-Do' objects to be created dynamically, ~~try~~ using classes to create the objects.

- **Based on username, store user data.** (Not started, might be discontinued as not using database to store user data and need to do tons of re-factoring.)
- **Figure out how to remove to do tasks and also setup tasks in home page based on localStorage** (Doing)
    - Remove task, update total in localStorage as well (Done).
    - Set up tasks based on remaining objets in localStorage (Doing).
- **Remove checklist items and also setup these items based on localStorage.** (Not started)
- **Figure out how to switch between lists, tags and all my tasks page.** (Done)
    - Re-think a better way to keep track of the to-do objects, a better ID should be used for each task.
- **Detect user IP address and get an approximate location of where he/she is from, provide a greeting in their country's language in sidebar.**
    - Replacing onStartup module.

### To-Do List Basic Functionality (Low)
- Revise radio buttons for Tasks Overview container (On-hold for now)

## Re-factoring (Low)
- Use inheritance for features in additionalElems div.