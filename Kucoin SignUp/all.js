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
let countryDropdwnToggle = countryDropdwn.dataset.toggle;
const countryArrow = document.querySelector(".country-arrow");
const backDrop = document.querySelector(".back-drop");
function openPhoneDrpdwn() {
  if (countryDropdwn.dataset.toggle === "show") {
    countryDropdwn.classList.add("hidden");
    countryArrow.classList.replace("rotate-180", "rotate-0");
    countryDropdwn.dataset.toggle = "hide";
    backDrop.classList.add("hidden");
  }
  else if (countryDropdwnToggle === "hide") {
    countryDropdwn.classList.remove("hidden");
    countryArrow.classList.replace("rotate-0", "rotate-180");
    countryDropdwn.dataset.toggle = "show";
    backDrop.classList.remove("hidden");
  }
}
function closePhoneDrpdwn() {
  countryDropdwn.classList.add("hidden");
  countryArrow.classList.replace("rotate-180", "rotate-0");
  countryDropdwn.dataset.toggle = "hide";
  backDrop.classList.add("hidden");
}

// optional Input
const optionalArrow = document.querySelectorAll(".optional-arrow");
const optionalInput = document.querySelectorAll(".optional-input");
function optional(n) {
  if (optionalInput[n - 1].dataset.toggle === "show") {
    optionalInput[n - 1].classList.add("hidden");
    optionalInput[n - 1].dataset.toggle = "hide";
    optionalArrow[n - 1].classList.replace("rotate-0", "rotate-180");
  } else if (optionalInput[n - 1].dataset.toggle === "hide") {
    optionalInput[n - 1].classList.remove("hidden");
    optionalInput[n - 1].dataset.toggle = "show";
    optionalArrow[n - 1].classList.replace("rotate-180", "rotate-0");
  }
}
