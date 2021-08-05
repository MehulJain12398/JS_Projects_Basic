const button = document.querySelector('.switch-btn')
const video = document.querySelector(".video-container")
const loader = document.querySelector(".preloader")
// console.log(loader)

button.addEventListener("click",function(){
    if(!button.classList.contains('slide')){
        button.classList.add('slide')
        video.pause()
    }else{
        button.classList.remove("slide")
        video.play()
    }
    // button.classList.toggle('slide')
})

window.addEventListener("load",function(){
loader.classList.add('hide-preloader')
    
})

