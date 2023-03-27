// assign constant to dom elements
const OnClick = document.getElementById ("OnClick");
const OnDblClick = document.getElementById("OnDblClick");
const NameInput = document.getElementById("name_input")
const display_Key = document.getElementById("displayKey")
//  function for diffent events/

function On_Click() {
  alert("you just clicked me 👍 which means your are ready. SO NOW DOUBLE CLICK BELOW BUTTON TO GO AHEAD")
}


function On_Dbl_Click() {
  alert("you just double clicked me 👍 Now type your name in the text box below 👇 ")
}

OnClick.addEventListener("click", On_Click);
OnDblClick.addEventListener("dblclick", On_Dbl_Click);

NameInput.addEventListener("keypress", function(key){
    display_Key.innerText ="You have just Pressed " + key.key
})


