// toggle Manu
const collapseManu = document.querySelector("#collapseManu");
const bgBlack = document.querySelector("#backgroundBlack");
let toggle = collapseManu.dataset.toggle;
function collapseNav(){
    if (toggle === "hide") {
        collapseManu.classList.replace("hidden","flex");
        bgBlack.classList.replace("hidden","block");
        toggle = "show";
    }
    else if(toggle === "show"){
        collapseManu.classList.replace("flex","hidden");
        bgBlack.classList.replace("block","hidden");
        toggle = "hide";
    }
}
// sideBar Manu
const menuItems = document.querySelectorAll(".menu-item");
function changeMenu(n) {
    console.log("hello there");
    for (let i = 0; i<menuItems.length ; i++) {
        menuItems[i].classList.remove("active-item");
    }
    menuItems[n-1].classList.add("active-item");
}
// wallet Table Toggle
let walletToggle = "hide";
function walletTable(n){
    const wallet = document.querySelectorAll("#walletTable");
    const walletTglIcon = document.querySelectorAll(".wallet-toggle-icon");
    if (walletToggle === "hide") {
        wallet[n-1].classList.replace("hidden","flex");
        walletTglIcon[n-1].style.transform = "rotate(180deg)";
        walletToggle = "show";
    }
    else if(walletToggle === "show"){
        wallet[n-1].classList.replace("flex","hidden");
        walletTglIcon[n-1].style.transform = "rotate(0deg)";
        walletToggle = "hide";
    }
}
// wallet Btn Sheet
let btnSheetTgl = "hide";
function walletButnSheet(){
    const btnSheet = document.querySelector("#btnSheet");
if (btnSheetTgl === "hide") {
    btnSheet.classList.add("btnSheet");
    btnSheetTgl = "show";
    console.log("show");
} else if(btnSheetTgl === "show"){
    btnSheet.classList.remove("btnSheet");
    btnSheetTgl = "hide";
    console.log("hide");
}
}