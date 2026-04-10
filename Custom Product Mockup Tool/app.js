const applybtn = document.getElementById("apply-btn");

const input_text = document.getElementById("shirt-user-text");

const colorButtons = document.querySelectorAll(".clr-btn");

const Tshirt = document.getElementById("Tshirt");

colorButtons.forEach(button => {
    button.addEventListener("click", () => {
        const clrname = button.getAttribute("data-shirt");
        Tshirt.src = `Shirts/${clrname} Shirt.png`;

    })
})




const new_shirt_text = document.getElementById("Tshirt-text");

const fontpicker = document.getElementById("font-selection");

applybtn.addEventListener("click", () => {
    const User_Tshirt_Text = input_text.value;
    const selectedFont = fontpicker.value;

    console.log("Selected Font:", selectedFont);
    console.log(User_Tshirt_Text);
    new_shirt_text.innerText = User_Tshirt_Text;
    new_shirt_text.style.fontFamily = selectedFont;
})