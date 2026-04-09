const applybtn = document.getElementById("apply-btn");

const black = document.getElementById("black-color");
const blue = document.getElementById("blue-color");
const brown = document.getElementById("brown-color");
const green = document.getElementById("green-color");
const orange = document.getElementById("orange-color");
const red = document.getElementById("red-color");
const white = document.getElementById("white-color");

const Tshirt = document.getElementById("Tshirt");


const new_shirt_text = document.getElementById("Tshirt-text");


blue.addEventListener("click", () => {
    Tshirt.src = "Shirts/blue Shirt.png"

})
white.addEventListener("click", () => {
    Tshirt.src = "Shirts/white Shirt.png"
})
red.addEventListener("click", () => {
    Tshirt.src = "Shirts/red Shirt.png"
})
orange.addEventListener("click", () => {
    Tshirt.src = "Shirts/orange Shirt.png"
})
green.addEventListener("click", () => {
    Tshirt.src = "Shirts/green Shirt.png"
})
brown.addEventListener("click", () => {
    Tshirt.src = "Shirts/brown Shirt.png"
})
black.addEventListener("click", () => {
    Tshirt.src = "Shirts/black Shirt.png"
})


applybtn.addEventListener("click", () => {
    const User_Tshirt_Text = document.getElementById("shirt-user-text").value;

    console.log(User_Tshirt_Text);
    new_shirt_text.innerText = User_Tshirt_Text;
})