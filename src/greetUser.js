// Utilized Hello, Salut! API by Stefan Bohacek that utilizes user client IP address and browser language settings to greet in the preferred language.
// https://stefanbohacek.com/project/hellosalut-api/

export default async function greetings() {

    // Say hello in different languages
    const response = await fetch ('https://hellosalut.stefanbohacek.dev/?mode=auto');
    const data = await response.json();
    
    // Returns a Promise.
    return data;

}

