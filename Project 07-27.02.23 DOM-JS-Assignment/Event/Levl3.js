// assign constant to dom elements
const Restricted_Area = document.getElementById("RestrictedArea")
const Office_Premises = document.getElementById("OfficePremises")
let Key_Up_Down = document.getElementById("KeyUpDown")
let display_Key = document.getElementById("displayKey")
//  Creation of function for diffent events/

// function Mouse_Over() {
//   alert("you just clicked me 👍 which means your are ready. SO NOW DOUBLE CLICK ME TO GO AHEAD")
// }



Restricted_Area.addEventListener("mouseover", function(){
    alert ("Caution! 🙅 Just now you 🫵 try to mouseover on Restricted Area. This is the first and Last warnig that YOU MUST NOT TRY TO EXPLORE PROHIBITED AREAS.")
    });


Restricted_Area.addEventListener("mouseout", function(){
    alert ("Very Good!👏 You 🫵 have mouseout from Restricted Area. OBEDIENCE IS THE MOST ADMIRABLE QUALITY IN OUR ORGANISATION.")
});

Office_Premises.addEventListener("mouseout", function(){
    alert ("⚠️Never leave you desk or office without permission.")    
});

document.addEventListener('keydown', function(e){
display_Key.style.color = "red"
display_Key.innerText = e.key + " is KeyDown"
})

document.addEventListener('keyup', function(e){
display_Key.style.color = "green"
display_Key.innerText = e.key + " is KeyUP"
})



