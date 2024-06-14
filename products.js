let openNav = document.getElementById("open-nav")
let closeNav = document.getElementById("close-nav")
let sideNav = document.getElementById("side-nav")

openNav.addEventListener("click", function(){
    sideNav.style.right = "0"
})

closeNav.addEventListener("click", function(){
    sideNav.style.right = "-50%"
})

//Search Functionality

let productContainer = document.getElementById("products-container")
let search = document.getElementById("search")
let productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function(){
    let enteredValue = event.target.value.toUpperCase()

    for(count = 0; count < productList.length; count++){
        let productName = productList[count].querySelector("h1").textContent

        if(productName.toUpperCase().indexOf(enteredValue) < 0){
            productList[count].style.display = "none"
        }
        else{
            productList[count].style.display = "block"
        }
    }
})