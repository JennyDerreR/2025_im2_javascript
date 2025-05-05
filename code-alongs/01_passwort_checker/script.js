console.log("hi script.js");

let password = prompt("Passwort eingeben");
let username = prompt("Benutzername eingeben");

checkpassword (password);


checksStringLenght (password, 12);
checksStringLenght (username, 7);


/*Check Password: Dies ist unsere erste Funktion*/
function checkpassword (password) {

    if (password.length > 11) {

    console.log ("Das Passwort ist lang genug");
    } 

    else {
    console.log ("Bitte verwende ein längeres Passwort");
    }
}

/* Funktion 2 Stringlenght -> definieren*/
function checksStringLenght (testString, testlenght) {
    if (testString.length >= testlenght) {
        console.log ("Der Text ist lang genug");

    }

    else {
        console.log ("Bitte verwende einen längeren Text");
    }
 }


