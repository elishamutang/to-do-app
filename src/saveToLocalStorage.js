// localStorage

export default function saveToLocal(userData, dataName) {

    localStorage.setItem(dataName, JSON.stringify(userData));
    
}


export function saveUserData(currentObj, userProp) {

    // Check if listOfObjs exist
    const listOfObjs = localStorage.getItem("listOfObjs") ? JSON.parse(localStorage.getItem("listOfObjs")) : null;

    for(let list of listOfObjs) {
                        
        if(currentObj.title === list.title && currentObj[userProp] !== list[userProp]) {

            console.log(`Old ${userProp}: ${list[userProp]} vs New ${userProp}: ${currentObj[userProp]}`);
            list[userProp] = currentObj[userProp];

        }

    }

    saveToLocal(listOfObjs, "listOfObjs");

}