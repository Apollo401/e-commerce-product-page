const sidebar = document.querySelector(".sidebar")
const toggleBtn = document.querySelector(".toggle-btn")
const closeSidebar = document.querySelector(".close-sidebar")
const slidesContainer = document.querySelector(".slides")  
const buttons = document.querySelectorAll(".btn")
const thumbnails = document.querySelectorAll(".thumbnail")
const overlay = document.querySelector(".overlay")
const plusBtn = document.querySelector(".plus-btn")
const minusBtn = document.querySelector(".minus-btn")
const amount = document.querySelector(".amount")
const cart = document.querySelector(".cart")
const cartItems = document.querySelector(".cart-items")
const emptyCart = document.querySelector(".empty")
const cartContent = document.querySelector(".cart-content")
const indicator = document.querySelector(".indicator")
const addCart = document.querySelector(".add")


let count = 0




toggleBtn.addEventListener("click",function(){
    sidebar.classList.add("display")
    overlay.style.display = "block"
})
closeSidebar.addEventListener("click",function(){
    sidebar.classList.remove("display")
    overlay.style.display = "none"
})
buttons.forEach(button => {
    button.addEventListener("click",() =>{
        const offset = button.classList.contains === "prev" ? -1 : 1
        const slides = button.parentElement.nextElementSibling

        const activeSlide = slides.querySelector(".active")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if(newIndex < 0){
            newIndex = slides.children.length - 1
        }
        if(newIndex >= slides.children.length - 1){
            newIndex = 0
        }
        slides.children[newIndex].classList.add("active")
        activeSlide.classList.remove("active")
    })
})
thumbnails.forEach(thumbnail =>{
    thumbnail.addEventListener("click", ()=>{
        console.log(66)
        const activeSlide = slidesContainer.querySelector(".active")
         if(thumbnail.classList.contains("thumbnail-1")){
            activeSlide.classList.remove("active")
            slidesContainer.children[0].classList.add("active")
        
         }
         if(thumbnail.classList.contains("thumbnail-2")){
            activeSlide.classList.remove("active")
            slidesContainer.children[1].classList.add("active")
            
        }
        if(thumbnail.classList.contains("thumbnail-3")){
            activeSlide.classList.remove("active")
            slidesContainer.children[2].classList.add("active")
            
        }
        if(thumbnail.classList.contains("thumbnail-4")){
            activeSlide.classList.remove("active")
            slidesContainer.children[3].classList.add("active")
        }
        

    })
})
plusBtn.addEventListener("click",() =>{
    count++
    amount.innerHTML = count
    console.log("hi")
    
})
minusBtn.addEventListener("click",() =>{
    if(count > 0){
        count--
    }
    amount.innerHTML = count
    
})

//cart functionality
cart.addEventListener('click',() => {
    cartItems.classList.toggle("invisible")
    console.log(12)
    
})
function addItem(){
    if(count > 0){
        
        let total = 125 * count
        //emptyCart.classList.add("invisible")
        cartContent.innerHTML =
        `<div class="product">
            <img src="images/image-product-1-thumbnail.jpg" class="cart-item-img" alt="">
            <div class="product-info">
                <p class="product-title">Fall Limited Edition Sneakers</p>
                <p>$125 x <span>${count}</span> <span class="total"> $${total}.00 </span></p>
            </div>
            <img src="images/icon-delete.svg" class="delete-btn" alt="">
        </div>
        <button class="checkout-btn">Checkout</button>`
        const deleteBtn = cartContent.querySelector(".delete-btn")    
        deleteBtn.addEventListener("click", () => {
            cartContent.innerHTML =
            `<p class="empty">Your cart is empty</p>`
            indicator.classList.add("invisible")
            
        })                
        indicator.classList.remove("invisible")
        indicator.innerText = count
    }
}
addCart.addEventListener("click", addItem)