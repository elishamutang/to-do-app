// localStorage

export default function saveToLocal(userData, dataName) {

    localStorage.setItem(dataName, JSON.stringify(userData));

    console.log(localStorage);
    
}