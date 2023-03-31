function toggleMenu(){
    //console.log("It Worked!");
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburguerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburguerBtn");

x.onclick = toggleMenu;

