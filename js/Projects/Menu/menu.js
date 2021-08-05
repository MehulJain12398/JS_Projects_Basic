var article = document.querySelectorAll(".question")

article.forEach(function (items) {
    const btn = items.querySelector(".question-btn")

    btn.addEventListener("click",function(){

        article.forEach(function(rep){
            if(rep !== items){
                rep.classList.remove("show-text")
            }
        })

        items.classList.toggle("show-text")
    })

    
})