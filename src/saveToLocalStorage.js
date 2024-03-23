// localStorage Web API.

export default function saveToLocal(userData, dataName) {

    localStorage.setItem(dataName, JSON.stringify(userData));
    
}

// Save changes to user data properties such as Reminder, Notes, Checklist Items etc.
export function saveUserData(currentObj, userProp) {

    // Check if listOfObjs exist
    const listOfObjs = localStorage.getItem("listOfObjs") ? JSON.parse(localStorage.getItem("listOfObjs")) : null;

    for(let obj of listOfObjs) {
                        
        if(currentObj.title === obj.title && currentObj[userProp] !== obj[userProp]) {

            console.log(`Old ${userProp}: ${obj[userProp]} vs New ${userProp}: ${currentObj[userProp]}`);
            obj[userProp] = currentObj[userProp];

        }

    }

    saveToLocal(listOfObjs, "listOfObjs");

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