const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const NUMS = '0123456789';
const SYMS = '#!@&*()+-/$';

let Pass_displayer = document.getElementById("pwDisplay");
let Pass_Generator = document.getElementById("genBtn");

let UPPERindex = 0;
let LOWERindex = 0;
let NUMSindex = 0;
let SYMSindex = 0;



let generated_pass;

function Passmaker() {
    UPPERindex = Math.floor(Math.random() * UPPER.length);
    LOWERindex = Math.floor(Math.random() * LOWER.length);
    NUMSindex = Math.floor(Math.random() * NUMS.length);
    SYMSindex = Math.floor(Math.random() * SYMS.length);

    generated_pass = UPPER[UPPERindex] + LOWER[LOWERindex] + NUMS[NUMSindex] + SYMS[SYMSindex] + UPPER[UPPERindex] + LOWER[LOWERindex] + NUMS[NUMSindex] + SYMS[SYMSindex];
    Pass_displayer.innerHTML = generated_pass;

}



Pass_Generator.addEventListener("click", () => {


    Passmaker();


})
