console.log("hi script.js");

let password = prompt("Passwort eingeben");

checkpassword (password);
checksStringLenght (password, 11);


function checkpassword (password) {


    if (password.length > 11) {

    console.log ("Das Passwort ist lang genug");
    } 

    else {
    console.log ("Bitte verwende ein längeres Passwort");
    }
}

function checksStringLenght (testString, testlenght) {
    if (testString.length > testlenght) {
        console.log ("Der Text ist lang genug");

    }

    else {
        console.log ("Bitte verwende einen längeren Text");
    }
 }


