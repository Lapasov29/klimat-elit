let allLinks = document.querySelectorAll("a");
const navsLinks = document.querySelectorAll(".nav-s ul li");
const navOpen = document.getElementById("menu-open");
// const form = document.querySelector("form");


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

