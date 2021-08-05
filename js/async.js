
// async function mehul() {
//     console.log("inside the function")



// const { reject } = require("async")

//     let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let responseData = response.json()
//     console.log('got data');
//     return responseData
// }
// console.log("outside")
// let a = mehul()
// console.log(a)
// a.then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })
// console.log("after the func")


// const checking = (x) =>{
//     return new Promise((resolve,reject) => {
//         if(x > 10){
//             resolve(`yeah it's working fine`);
//         }
//         else{
//             reject('oops,sorry mate')
//         }
//     })
// }

// checking(1).then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })


// var ario = [1,2,3,4,5,6]

// const getNumber = () =>{
//     setTimeout(() => {
//         let output = ''
//         ario.forEach((x) => {
    
//             output += `<li>${x}</li>`
//     },1000)

//     document.body.innerHTML = output
//     })
// }
// const createNumber = (numb) => {
//     return new Promise((resolve,reject) => {

//         setTimeout(() => {
//             ario.push(numb)
//             let error = false
//             if(!error){
//                 resolve()
//             }
//             else{
//                 reject('got error mate')
//             }
//          },2000)
//     })
  
// }


// createNumber().then(getNumber).catch(err=>{
//     console.log(err)
// })



// const conv = (val) => {
    
// }

// console.log(conv(3))


// async function work(){

//   return new Promise((resolve,reject)=>{

//     const fetching =  fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data = fetching.json()

//     if(fetching.status === 200){
       
//         resolve(data)
//     }
//     else{
//         reject()
//     }
    
    
//   })
   

// }

// work().then(m=>{
//     console.log(m)
// }).catch(e=>{
//     console.log(e.message)
// })


var count = 0 
document.getElementById('click').addEventListener('click',function(){
    document.getElementById('p').innerHTML = ++count
})

