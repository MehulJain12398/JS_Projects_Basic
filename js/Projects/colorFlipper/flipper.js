const colors = ['red','blue','rgba(133,122, 200)']

const btn = document.getElementById('btn');

const color = document.querySelector('.color')
const span = document.getElementsByClassName('color')

btn.addEventListener('click',function(){
    
    const random = ran();
    document.body.style.backgroundColor = colors[random]
    color.textContent = colors[random]
    span[0].style.color = colors[random]
    
})

function ran(){
    
   return Math.floor((Math.random() * colors.length))
}
