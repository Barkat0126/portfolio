// Code for hamburger-nav...
function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open")
}

// Code to generate Dynamic text on screen...
const text=document.querySelector(".sec-text");
const textload = ()=>{
    setTimeout( ()=>{
        text.innerHTML="Learner...";
    }, 0)
    setTimeout( ()=>{
        text.innerHTML="Programmer";
    }, 4000)
    setTimeout( ()=>{
        text.innerHTML="Problem Solver";
    }, 7500)
    // setTimeout( ()=>{
    //     text.innerHTML="HardCore DSA Lover";
    // }, 9000)
    setTimeout( ()=>{
        text.innerHTML="MERN Stack Developer";
    }, 11450)
}
textload();
setInterval(textload,14500);