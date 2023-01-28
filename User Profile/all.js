const sideBar = document.querySelectorAll(".side-bar");
const backDrop = document.querySelector(".back-drop");
const sideBarCloseBtn = document.querySelector(".sidebar-close-btn");
function navSideBarChange(n) {
  let sideBarToggle = sideBar.item(n - 1).dataset.toggle;
  if (sideBarToggle === "hide") {
    sideBar.item(n - 1).classList.replace("-right-full", "right-0");
    backDrop.classList.replace("hidden", "fixed");
    sideBarCloseBtn.classList.replace("left-11", "-left-11");
    sideBar.item(n - 1).dataset.toggle = "show";
    console.log(sideBar.item(n - 1).dataset.toggle);
  }
  else if (sideBarToggle === "show") {
    sideBar.item(n - 1).classList.replace("right-0", "-right-full");
    backDrop.classList.replace("fixed", "hidden");
    sideBarCloseBtn.classList.replace("-left-11", "left-11");
    sideBar.item(n - 1).dataset.toggle = "hide";
    console.log(sideBar.item(n - 1).dataset.toggle);
  }
}
function closeNavBar() {
  for (let i = 0; i < sideBar.length; i++) {
    sideBar[i].classList.replace("right-0", "-right-full");
    backDrop.classList.replace("fixed", "hidden");
    sideBarCloseBtn.classList.replace("-left-11", "left-11");
    sideBar[i].dataset.toggle = "hide";
  }
}
const sidebarItem = document.querySelectorAll(".sidebar-menu-option");
const sidebarItemArrow = document.querySelectorAll(".sidebar-menu-arrow");
function rotateArrow(n){
  if (sidebarItem[n-1].dataset.toggle === "hide") {
  sidebarItemArrow[n-1].classList.replace("rotate-0", "rotate-180");
  sidebarItem[n-1].dataset.toggle = "show";
  console.log("show");
  }
  else if (sidebarItem[n-1].dataset.toggle === "show") {
  sidebarItemArrow[n-1].classList.replace("rotate-180", "rotate-0");
  sidebarItem[n-1].dataset.toggle = "hide";
  console.log("hide");
  };
  window.addEventListener('click', function(e){   
    if (sidebarItem[n-1].contains(e.target)){
    } else{
      sidebarItemArrow[n-1].classList.replace("rotate-180", "rotate-0");
      sidebarItem[n-1].dataset.toggle = "hide";  }
  });
}
// scroll
const scrollingTag = document.querySelector(".overflow-custom");
function scrolltag(n){
  if (n === 0) {
    scrollingTag.scrollTo(0,0);
    console.log("first");
    console.log(scrollingTag);
  }
  else if (n===1) {
    scrollingTag.scrollTo(1000,0);
    console.log("last");
  }
}
