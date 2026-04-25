
const bill = document.getElementById("bill");
const tip_per = document.getElementById("tip-percentage");
const tip_amount = document.getElementById("Tip-Amount");
const total_bill = document.getElementById("totalbill");



tip_per.addEventListener("input", () => {

    if (bill.value === "") {
        alert("Enter Bill First");
    }
    else {
        const Numeric_inputVal = parseFloat(bill.value);
        const Numeric_tip_per_val = parseFloat(tip_per.value);
        const tip_calculate = Numeric_inputVal * (Numeric_tip_per_val / 100);
        const Numeric_tip_calculate = parseFloat(tip_calculate)
        tip_amount.value = tip_calculate.toFixed(2);

        total_bill.value = Numeric_tip_calculate + Numeric_inputVal;
    }


})
