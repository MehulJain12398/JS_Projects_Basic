let count = 0

var value = document.querySelector('#value')

var buttons = document.querySelectorAll('.btn')

buttons.forEach(function(btn){
    btn.addEventListener('click',function(e){
        var logic = e.currentTarget.classList
        if(logic.contains('decrease')){
            count--
        }
        else if(logic.contains('increase')){
            count++
        }
        else{
            count = 0
        }
        value.textContent = count
        if(count > 0){
            value.style.color = 'green'
        }
        else if(count < 0){
            value.style.color = 'red'
        }
        else{
            value.style.color = 'black'
        }
    })
})