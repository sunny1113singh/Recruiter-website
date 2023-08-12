var navBar = document.getElementById('navbar');
window.onscroll = function(){
if (window.scrollY > 2) {
    navBar.classList.add('scrolled');
}
else{
navBar.classList.remove("scrolled")
}
}