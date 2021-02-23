// local data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "actor",
        img: 
            "https://i.picsum.photos/id/827/200/300.jpg?hmac=0Q7y5JGXuxSXgO7VUvdNhXC4yoAupOJiKmRS9RoPqs8",
        text:
            "I like peanuts."
    },
    {
        id: 2,
        name: "john snow",
        job: "killer",
        img: 
            "https://i.picsum.photos/id/828/200/300.jpg?hmac=YwDXceJcHQbinJfsIHJgrD8NakhtHzBMH-vD4aNcPo4",
        text:
            "Pineapple on pizza is the superior pizza."
    },
    {
        id: 3,
        name: "joe moma",
        job: "memelord",
        img: 
            "https://i.picsum.photos/id/544/200/300.jpg?hmac=YL3M_fg_84Kqg0EQTvbltmjeGeQetARWPFA5YLn5hS0",
        text:
            "My favorite pokemon is charmander"
    }
]

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const description = document.getElementById("description");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const randomBtn = document.querySelector(".random");

// let starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
});

// Show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    description.textContent = item.text;
}