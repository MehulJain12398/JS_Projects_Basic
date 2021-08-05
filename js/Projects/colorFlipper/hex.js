const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn = document.getElementById('btn')
const color = document.querySelector('.color')
const span = document.getElementsByClassName('color')

btn.addEventListener('click',function(){
    var hexColor = '#'
    for(let i=0;i<6;i++){
        hexColor += hex[getHexColor()]
        
    }
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
    span[0].style.color = hexColor
})


function getHexColor(){
    return Math.floor(Math.random() * hex.length)
}