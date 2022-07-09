//preloader
window.onload = function(){
    $('#preload').css('opacity','0');
    $('#preload').css('visibility','hidden');
}

//sticky header
const header = document.getElementById("header")
document.onscroll = function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    header.classList.toggle("active", scrollTop > 100)
}