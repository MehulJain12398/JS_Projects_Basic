var links = document.querySelector('.links')
var button = document.querySelector('.nav-toggle')
var change = document.getElementsByClassName('nav-toggle')

button.addEventListener('click',function(){
    // if(links.classList.contains('show-links')){

    //     links.classList.remove('show-links')
        

    // }else{
    //     links.classList.add('show-links')
    // }

    links.classList.toggle('show-links')
})

