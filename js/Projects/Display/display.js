const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "../../../Good_Food_Display_-_NCI_Visuals_Online.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "../../../Good_Food_Display_-_NCI_Visuals_Online.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "../../../Good_Food_Display_-_NCI_Visuals_Online.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "../../../Good_Food_Display_-_NCI_Visuals_Online.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "../../../Good_Food_Display_-_NCI_Visuals_Online.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "../../../Good_Food_Display_-_NCI_Visuals_Online.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "../../../Good_Food_Display_-_NCI_Visuals_Online.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "../../../Good_Food_Display_-_NCI_Visuals_Online.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "../../../Good_Food_Display_-_NCI_Visuals_Online.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];


  const section = document.querySelector(".section-center")

  const buttons = document.querySelectorAll(".filter-btn")

  const containerBtn = document.querySelector(".btn-container")
  

  window.addEventListener('DOMContentLoaded',function(){


// dynamic buttons 
const category = menu.reduce(function(values,items) {

  if(!(values.includes(items.category))){
    values.push(items.category)
  }
  return values

},['all'])

if(category.length !== 0){
let displayBtn = category.map(x =>{
  return `<button class="filter-btn" type="button" data-id=${x}>${x}</button>`
})
containerBtn.innerHTML = displayBtn.join("")
}

//dynamic buttons logic closed



//passing info on buttons while clicking
containerBtn.childNodes.forEach(function(list){


  list.addEventListener('click',function(e){
    const btnCategory = e.currentTarget.dataset.id
    const menuCategory = menu.filter(function(data){
      if(data.category === btnCategory){
        return data
      }
    })

    if(btnCategory === "all"){
      return displayItems(menu)
    }
    else{
      return displayItems(menuCategory)
    }
  })
})
//closed 
displayItems(menu)
  })


  function displayItems(items){

    let displayItems  = items.map(x => {
      return `<article class="menu-item">
      <img src=${x.img} class="photo" alt=${x.title}>
      <div class="item-info">
        <header>
          <h4>${x.title}</h4>
          <h4 class="price">$${x.price}</h4>
        </header>
        <p class="item-text">${x.desc}</p>

      </div>
    </article>` ;})
    displayItems = displayItems.join("");
    section.innerHTML = displayItems
  }

