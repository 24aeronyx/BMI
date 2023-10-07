document.body.style.zoom="80%"
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
  let BMI = weight.value / (height.value / 100) ** 2;
  let result = "";
  if (BMI < 18.5) {
    result = "Kekurangan Berat Badan";
    document.querySelector(
      ".comment"
    ).innerHTML = `Kamu <span style="color:red" id="comment">${result}</span>`;
  } else if (18.5 <= BMI && BMI <= 24.9) {
    result = "Sehat";
    document.querySelector(
      ".comment"
    ).innerHTML = `Kamu <span style="color:blue" id="comment">${result}</span>`;
  } else if (25 <= BMI && BMI <= 29.9) {
    result = "Kelebihan Berat Badan";
    document.querySelector(
      ".comment"
    ).innerHTML = `Kamu <span style="color:red" id="comment">${result}</span>`;
  } else if (BMI > 30) {
    result = "Obesitas";
    document.querySelector(
      ".comment"
    ).innerHTML = `Kamu <span style="color:darkred" id="comment">${result}</span>`;
  }

  resultArea.style.display = "block";
  document.querySelector("#result").innerHTML = BMI.toFixed(2);
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
