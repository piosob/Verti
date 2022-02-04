const lineTop = document.querySelector(".burger .top");
const lineMiddle = document.querySelector(".burger .middle");
const lineBottom = document.querySelector(".burger .bottom");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".page-header .col-6");

burger.addEventListener("click", ()=>{
    lineTop.classList.toggle("active");
    lineMiddle.classList.toggle("active");
    lineBottom.classList.toggle("active");
    nav.classList.toggle("active");
})
