// images

const images = [
    "images/image 1.jpg",
    "images/image 2.jpg",
    "images/image 3.jpg",
    "images/image 4.jpg",
];

// buttons selcted

const prev1 = document.getElementById("previous-btn1");
const next1 = document.getElementById("next-btn1");

const prev2 = document.getElementById("previous-btn2");
const next2 = document.getElementById("next-btn2");


// images selection


const uperImage = document.getElementById("uper-image");
const lowerImage = document.getElementById("lower-image");

const slider = document.querySelector(".lower-image-section");

// main logic


const imagesCount = document.querySelectorAll(".lower-image-section img").length;
let index = 0;

function updateSlider() {
    const width = 400; // Behtar hai ke width element se check ki jaye
    slider.style.transform = `translateX(-${index * width}px)`;
}

next2.addEventListener("click", () => {
    index = (index + 1) % imagesCount; // Ye automatically 0 par le jata hai last ke baad
    
    updateSlider();
});

prev2.addEventListener("click", () => {
    index = (index - 1 + imagesCount) % imagesCount; // Reverse loop logic
    updateSlider();
});




let currentindex = 0;


prev1.addEventListener("click", () => {
    currentindex--;
    if (currentindex < 0) {
        currentindex = images.length - 1;
    }
    uperImage.src = images[currentindex];
})

next1.addEventListener("click", () => {
    currentindex++;
    if (currentindex > images.length - 1) {
        currentindex = 0;
    }
    uperImage.src = images[currentindex];

})