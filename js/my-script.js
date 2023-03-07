const fixedNumber = 21;//Fixed number to add at the end of the generated password
let error = false;

//Ask the name of the user and check the value
let userName = prompt("Inserisci il tuo nome");
if (!userName || userName.length === 0 || userName === ' '){
    alert("Il nome inserito non è valido");
    userName = "nome";
    error = true;
}

//Ask the name of the user and check the value
let userLastName = prompt("Inserisci il tuo cognome");
if (!userLastName || userLastName.length === 0 || userLastName === ' '){
    alert("Il cognome inserito non è valido");
    userLastName = "cognome";
    error = true;
}

//Ask the favorite color of the user and check the value
let userColor = prompt("Inserisci il tuo colore preferito");
if (!userColor || userColor.length === 0 || userColor === ' '){
    alert("Il colore inserito non è valido");
    userColor = "colorepreferito";
    error = true;
}

//Generate the password concatenating the variables inserted by the user
let password = userName + userLastName + userColor + fixedNumber;
//If there are errors during the insert of the password, set the pass with an invalid text
if(error)
    password = "Uno o più campi inseriti non sono validi!";

//Define the password generated as the text of the paragraph with the id "GeneratedPassword"
document.getElementById("GeneratedPassword").innerHTML = password;