let weight = document.getElementById("weight");
let height = document.getElementById("height");
let result = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modaltext");
let modal = document.getElementById("#modaltext");
let span = document.getElementById("close")[0];

function calculate(){
    if(weight.value == "" || height.value==""){
        modal.style.display = "block";
        modaltext.innerHTML = "All fields are required!";
    } else{
        countBMI();
    }
}

function countBMI(){
    let BMI = weight/(height/100)^2 
}