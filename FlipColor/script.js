const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
                "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color"); // gets classes?
let container = document.querySelector(".container");

btn.addEventListener('click', function(){
    const randomColor = getRandomColor();
    container.style.backgroundColor = randomColor;
    color.textContent = randomColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

function getRandomColor() {
    let new_hex = "#";
    for (let i = 0; i < 6; i++) {
        const randomNumber = getRandomNumber();
        const curr = hex[randomNumber];
        new_hex += curr;
    }
    return new_hex;
}