// ____________form Changer
const formBtn = document.querySelectorAll(".form-button");
const formContent = document.querySelectorAll(".content-form");
function formChanger(n) {
  for (i = 0; i < formContent.length; i++) {
    formContent[i].classList.replace("flex", "hidden");
    formBtn[i].classList.replace("text-[#24ae8f]", "text-gray-500");
  }
  formContent[n - 1].classList.replace("hidden", "flex");
  formBtn[n - 1].classList.replace("text-gray-500", "text-[#24ae8f]");
}

// ____________language Dropdown
const dropDwn = document.querySelector(".drop-down");
function showLang() {
  dropDwn.classList.replace("hidden", "block");
}
function hideLang() {
  dropDwn.classList.replace("block", "hidden");
}
// country List
const countryDropdwn = document.querySelector(".country-dropdown");
const countryDropdwnToggle = countryDropdwn.dataset.toggle;
const countryArrow = document.querySelector(".country-arrow");
const backDrop = document.querySelector(".back-drop");
function openPhoneDrpdwn() {
  console.log("done");
  if (countryDropdwn.dataset.toggle === "show") {
    countryDropdwn.classList.add("hidden");
    countryArrow.classList.replace("rotate-180", "rotate-0");
    countryDropdwn.dataset.toggle = "hide";
    backDrop.classList.add("hidden");
    console.log("hide");
  }
  else if (countryDropdwnToggle === "hide") {
    countryDropdwn.classList.remove("hidden");
    countryArrow.classList.replace("rotate-0", "rotate-180");
    countryDropdwn.dataset.toggle = "show";
    backDrop.classList.remove("hidden");
    console.log("show");
  }
}
function closePhoneDrpdwn(){
  countryDropdwn.classList.add("hidden");
  countryArrow.classList.replace("rotate-180", "rotate-0");
  countryDropdwn.dataset.toggle = "hide";
  backDrop.classList.add("hidden");
}

// const country = document.getElementById("country");
// const userLabel = document.getElementById("userLabel");
// const userInput = document.getElementById("userInput");
// const passLabel = document.getElementById("passLabel");
// const passInput = document.getElementById("passInput");
// const logBtn = document.getElementById("logBtn");
// const qrCodeContent = document.getElementById("qrCodeContent");
// function phoneForm() {
//   phoneBtn.classList.replace("text-gray-500", "text-emerald-400");
//   emailBtn.classList.replace("text-emerald-400", "text-gray-500");
//   qrCodeBtn.classList.replace("text-emerald-400", "text-gray-500");
//   country.classList.replace("hidden", "flex");
//   userInput.classList.replace("pl-4", "pl-24");
//   userLabel.innerHTML = "Phone Number";
//   userInput.classList.replace("hidden", "block");
//   userLabel.classList.replace("hidden", "block");
//   passLabel.classList.replace("hidden", "block");
//   passInput.classList.replace("hidden", "block");
//   logBtn.classList.replace("hidden", "block");
//   qrCodeContent.classList.replace("block", "hidden");
// }
// function emailForm() {
//   emailBtn.classList.replace("text-gray-500", "text-emerald-400");
//   phoneBtn.classList.replace("text-emerald-400", "text-gray-500");
//   qrCodeBtn.classList.replace("text-emerald-400", "text-gray-500");
//   country.classList.replace("flex", "hidden");
//   userInput.classList.replace("pl-24", "pl-4");
//   userLabel.innerHTML = "Email";
//   userInput.classList.replace("hidden", "block");
//   userLabel.classList.replace("hidden", "block");
//   passLabel.classList.replace("hidden", "block");
//   passInput.classList.replace("hidden", "block");
//   logBtn.classList.replace("hidden", "block");
//   qrCodeContent.classList.replace("block", "hidden");
// }
// function qrCodeForm() {
//   emailBtn.classList.replace("text-emerald-400", "text-gray-500");
//   phoneBtn.classList.replace("text-emerald-400", "text-gray-500");
//   qrCodeBtn.classList.replace("text-gray-500", "text-emerald-400");
//   country.classList.replace("flex", "hidden");
//   userInput.classList += " hidden";
//   userLabel.classList += " hidden";
//   passLabel.classList += " hidden";
//   passInput.classList += " hidden";
//   logBtn.classList += " hidden";
//   qrCodeContent.classList.replace("hidden", "block");
// }