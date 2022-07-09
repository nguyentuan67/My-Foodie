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

// nav mobile
const moreBtn = document.getElementById("more-btn")
const closeBtn = document.getElementById("close-btn")
const navMobileMenu = document.getElementById("nav-mb__menu")
const overlay = document.querySelector(".overlay")

moreBtn.onclick = () => {
    navMobileMenu.classList.add('active')
    overlay.style.display = 'block'
}

closeBtn.onclick = () => {
    navMobileMenu.classList.remove('active')
    overlay.style.display = 'none'
}

overlay.onclick = () => {
    navMobileMenu.classList.remove('active')
    overlay.style.display = 'none'
}