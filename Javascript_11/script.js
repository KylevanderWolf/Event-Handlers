


//Opdracht1: Alert
let message = document.querySelector('#alertButton')

message.addEventListener('click', function (e) {
    alert("button clicked")
});

//Opdracht2 Change body background Color
let bgButton = document.querySelector('#changeButton')
let body = document.querySelector(".blue-background")

let changeBodyColor = () => {
    body.classList.add("red-background");
}
bgButton.addEventListener('click', changeBodyColor);


//Opdracht3: Toggle body background Color
let toggleButton = document.querySelector('#toggleButton')

let toggleBodyColor = () => {
    body.classList.toggle("red-background");
}
toggleButton.addEventListener('click', toggleBodyColor);

