let userName = prompt("Inserisci il tuo nome");
let userLastName = prompt("Inserisci il tuo cognome");
let userColor = prompt("Inserisci il tuo colore preferito");
const fixedNumber = 21;
let password = userName + userLastName + userColor + fixedNumber;
document.getElementById("GeneratedPassword").innerHTML = password;