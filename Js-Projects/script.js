function myFunction(x) {
    x.classList.toggle("change");
}
let container = document.getElementById("container");
let dropDown = document.getElementById("dropDown");

container.addEventListener('click', () => {
    dropDown.classList.toggle("show");
})




let input = document.getElementById("numberInput");
let submit = document.getElementById("submit");
let textfield = document.getElementById("textfield");
let reset = document.getElementById("reset")
let randomNumber = Math.floor((Math.random() * 100) + 1);
let versuche = 0;

console.log(randomNumber)
submit.addEventListener('click', () => {
    let value = input.value;
    versuche++;
         if (value == randomNumber) {
            textfield.innerHTML = "Glückwunsch, richtig geraten";
            document.getElementById("con1").style.background = background;
        } else if (versuche >= 10) {
            textfield.innerHTML = "Zu oft falsch geraten";
            submit.disabled = true;
            submit.style.opacity = 0.3;
        }  else (value < randomNumber) ? textfield.innerHTML = "zu wenig" : textfield.innerHTML = "zu hoch"
})


reset.addEventListener('click', () => {
    textfield.innerHTML = "Hier kommt dein Wert";
    input.value = 0;
    versuche = 0;
    randomNumber = Math.floor((Math.random() * 100) + 1);
    document.getElementById("con1").style.background = "#2d2180"
    submit.style.opacity = 1;


})