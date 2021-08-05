var modal_button = document.querySelector(".modal-btn")
var close_button = document.querySelector(".close-btn")
var modal_overlay = document.querySelector(".modal-overlay")

modal_button.addEventListener("click",function(){
    modal_overlay.classList.add("open-modal")
})

close_button.addEventListener("click",function(){
    if(modal_overlay.classList.contains("open-modal")){
        modal_overlay.classList.remove("open-modal")
    }
})