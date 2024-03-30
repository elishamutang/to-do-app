// localStorage Web API.

export default function saveToLocal(userData, dataName) {

    localStorage.setItem(dataName, JSON.stringify(userData));
    
}

// Save changes to user data properties such as Reminder, Notes, Checklist Items etc.
export function saveUserData(currentObj, userProp) {

    // Check if objForObjs exist
    const objForObjs = localStorage.getItem("allObjs") ? JSON.parse(localStorage.getItem("allObjs")) : null;

    Object.keys(objForObjs).forEach((key) => {

        if(currentObj.taskId === key) {

            const relevantObj = objForObjs[key];

            // Displays old vs new data for the selected object.
            console.log(`Old ${userProp}: ${relevantObj[userProp]} vs New ${userProp}: ${currentObj[userProp]}`);

            relevantObj[userProp] = currentObj[userProp];
            

        }

    })

    saveToLocal(objForObjs, "allObjs");

}

// Test whether localStorage is supported in user's browser.
export function checkForLocalStorageSupport() {

    try {

        const key = "testKey";
        localStorage.setItem(key, key);
        localStorage.removeItem(key);
        return true;

    } catch (e) {

        return false;

    }

}