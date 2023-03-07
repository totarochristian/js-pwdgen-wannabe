let userName = prompt("Inserisci il tuo nome");
let userLastName = prompt("Inserisci il tuo cognome");
let userColor = prompt("Inserisci il tuo colore preferito");
const fixedNumber = 21;
if (!userName || userName.length === 0 || userName === ' '){
    alert("Il nome inserito non è valido");
    userName = "nome";
}
if (!userLastName || userLastName.length === 0 || userLastName === ' '){
    alert("Il cognome inserito non è valido");
    userLastName = "cognome";
}
if (!userColor || userColor.length === 0 || userColor === ' '){
    alert("Il colore inserito non è valido");
    userColor = "colorepreferito";
}
let password = userName + userLastName + userColor + fixedNumber;
document.getElementById("GeneratedPassword").innerHTML = password;