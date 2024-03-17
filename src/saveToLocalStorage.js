// localStorage

export default function saveToLocal(listOfObjs) {

    localStorage.setItem("listOfObjs", JSON.stringify(listOfObjs));

    console.log(JSON.parse(localStorage.getItem("listOfObjs")));

}