let userName = prompt("Inserisci il tuo nome");
let userLastName = prompt("Inserisci il tuo cognome");
let userColor = prompt("Inserisci il tuo colore preferito");
const fixedNumber = 21;
if (!userName || userName.length === 0){
    userName = "nome";
}
if (!userLastName || userLastName.length === 0){
    userLastName = "cognome";
}
if (!userColor || userColor.length === 0){
    userColor = "colorepreferito";
}
let password = userName + userLastName + userColor + fixedNumber;
document.getElementById("GeneratedPassword").innerHTML = password;