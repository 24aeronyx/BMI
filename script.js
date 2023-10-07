let weight = document.getElementById("weight");
let height = document.getElementById("height");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

function calculate() {
  if (weight.value === "" || height.value === "") {
    modal.style.display = "block";
    modalText.innerHTML = "Data tidak boleh kosong";
  } else {
    countBMI();
  }
}

function countBMI() {
  let BMI = (weight / (height / 100)) * 2;
  let result = "";
  if (BMI < 18.5) {
    result = "Kekurangan Berat Badan";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    result = "Normal";
  } else if (25 <= BMI && BMI <= 29.9) {
    result = "Kelebihan Berat Badan";
  } else if (30 <= BMI && BMI <= 34.9) {
    result = "Obesitas";
  }

  resultArea.style.display = "block";
  document.querySelector(
    ".comment"
  ).innerHTML = `Kamu <span id="comment">${result}</span>`;
  document.querySelector("#result").innerHTML = BMI;
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
