let openNav = document.getElementById("open-nav")
let closeNav = document.getElementById("close-nav")
let sideNav = document.getElementById("side-nav")

openNav.addEventListener("click", function(){
    sideNav.style.right = "0"
})

closeNav.addEventListener("click", function(){
    sideNav.style.right = "-50%"
})