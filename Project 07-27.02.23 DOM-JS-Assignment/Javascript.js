// assign constant to dom elements

const DecrementBtn = document.getElementById ("DecrementBtn");
const IncrenmentBtn = document.getElementById ("IncrenmentBtn");
const reset_value_btn = document.getElementById ("resetbtn");
const display_value = document.getElementById ("display_value");
const OnClick = document.getElementById ("OnClick");

// increment & decrement function
function decrement() {
    const value = Number(display_value.innerText);
    if (value > 50000) {
        alert ("Ohh! with all my pleasure");
        display_value.innerText = value - 10000
    } else {
        alert ("😒 Bas Pagle, ab rulayega kya? - Less than 50k will be too low.");
    }
}
function increment() {
    const value = Number(display_value.innerText);
    if (value < 80000) {
        alert ("Your Wish is my Command");
        display_value.innerText = value + 10000
    } else {
        alert ("😁😁😁 Don't be greedy! Sorry! You are over ambitious.");
    }
}

// DecrementBtn.addEventListener("click", myFunction);
IncrenmentBtn.addEventListener("click", increment);
DecrementBtn.addEventListener("click", decrement);

reset_value_btn.addEventListener("click", ()=>{
    display_value.innerText = 50000;     
});

