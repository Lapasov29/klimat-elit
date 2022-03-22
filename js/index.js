let allLinks = document.querySelectorAll("a");
const navsLinks = document.querySelectorAll(".nav-s ul li");
const navOpen = document.getElementById("menu-open");
const modalBtn = document.getElementById("modalBtn");
const modalContent = document.querySelector(".modal-content");


document.addEventListener("DOMContentLoaded", () => {
    allLinks.forEach(link => {
        if (link.getAttribute("href") == "#") {
            link.setAttribute("href", "#default");  
        }
    })
})

window.addEventListener("scroll", () => {
    const navBar = document.querySelector(".nav-s");
    if (window.scrollY > 550) {
        navBar.classList.add("fixed-top");
    } else {
        navBar.classList.remove("fixed-top");
    }
})

navOpen.addEventListener("click", () => {
    const ulParent = document.querySelector(".nav-s ul");
    ulParent.classList.toggle("active");
})

navsLinks.forEach(navLink => {
    navLink.addEventListener("click", (ev) => {
        const target = ev.currentTarget;
        target.parentElement.classList.remove("active");
    })
})

modalBtn.addEventListener("click", ()=> {
    modalContent.classList.add("modal-content-active");
})

document.body.addEventListener("click", (ev) => {
    ev.target.classList.remove("modal-content-active");
})