// // Create an object type UserException
// function UserException(message) {
//     this.message = message;
//     this.name = 'UserException';
//   }
  
//   // Make the exception convert to a pretty string when used as a string
//   // (e.g., by the error console)
//   UserException.prototype.toString = function() {
//     return `${this.name}: "${this.message}"`;
//   }
  
//   // Create an instance of the object type and throw it
//   throw new UserException('Value too high');
// function doSomethingErrorProne() {
//     if (true) {
//       throw (new Error('chal gaya kya '));
//     } else {
//       return false
//     }
//   }
  
//   try {
//     doSomethingErrorProne();
//   } catch (e) {               // NOW, we actually use `console.error()`
//     console.error(e.name);    // logs 'Error'
//     console.error(e.message); // logs 'The message', or a JavaScript error message
//   }


//   doSomethingErrorProne()


// function timeConverter(UNIX_timestamp){
//     var a = new Date(UNIX_timestamp * 1000);
 
//     var year = a.getUTCFullYear();
//     var month = ('0' + (a.getMonth()+1)).slice(-2);
//     var date = ('0' + (a.getUTCDate())).slice(-2);
//     var hour = ('0' + (a.getUTCHours())).slice(-2);
//     var min =('0' + (a.getUTCMinutes())).slice(-2);
//     var sec = ('0' + (a.getUTCSeconds())).slice(-2);
//     var millisec = a.getUTCMilliseconds()
//     var timeZone = a.getTimezoneOffset()
//     var time = year + '-' + month + '-' + date + 'T' + hour + ':' + min + ':' + sec + '.' + millisec + timeZone ;
//     return time;
//   }
//   console.log(timeConverter(1616159787));

//   var today = new Date();
// var milliseconds = today.getUTCMilliseconds();
// console.log(milliseconds)

// var logic = Math.round(new Date("2021-03-19T13:16:26.772+00:00").getTime()/1000)
// console.log(logic)


// let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {
//   console.log('Outer loops: ' + x);
//   x ++;
//   z += x;
//   if(x >10){
//       break labelCancelLoops

//   }
//   else if(z > 2){
//       break;
//   }
// }

// function foo(i) {
//     if (i < 0)
//       return;
//     console.log('begin: ' + i);
//     foo(i - 1);
//     console.log('end: ' + i);
//   }
//   foo(3);

// function check(text){
//   var result = arguments.callee
//   return result
// }

// console.log(check(1,2,3,4,5,'q','w','e'))


function fac(n){
  if(n===0 || n===1){
    return 1;
  }
  else{
    return(n * arguments.callee(n-1))
  }
}


// console.log(fac(3))

var st = new String('lol')

// console.log(st.length)

// var propertyName = 'make';
// var myCar = {}
// myCar[propertyName] = 'Ford';

// propertyName = 'model';
// myCar[propertyName] = 'Mustang';

// function showProps(obj, objName) {
//   var result = ``;
//   for (var i in obj) {
//     // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
//     if (obj.hasOwnProperty(i)) {
//       result += `${objName}.${i} = ${obj[i]}\n`;
//     }
//   }
//   return result;
// }

// console.log(showProps(myCar,"myCar"))
// console.log(myCar)


// var vvv = [{name:"mehul",age:22},
// {name:"erwe",age:21},
// {name:"dads",age:20},
// {name:"czxczx",age:23}]

// var logic = vvv.filter((x) => {
//   return x.age != 23
// })

// console.log(logic)

// function foo(i) {
//   if (i < 0)
//     return;
//   // console.log('begin: ' + i);
//   foo(i - 1);
//   console.log('end: ' + i);
// }
// foo(3);

// var count  = 0

// for(var i = 0; i<10; i++){
  
//   console.log(--count)

// }


var request = {
 transa:{
      destinationCurrencyCode:"dsa",
      
      purposeOfPayment:""
      
   

 },
 reci:{
   firstname:"mehul",
   lastname:"jain",
   dateof:"2020",
   city:"jai"
 }
}


// const removeEmptyOrNull = (obj) => {
//   Object.keys(obj).forEach(k =>
//     (obj[k] && typeof obj[k] === 'object') && removeEmptyOrNull(obj[k]) ||
//     (!obj[k] && obj[k] !== undefined) && delete obj[k]
//   );
//   return obj;
// };

// myObj2 = removeEmptyOrNull(request);

// console.log(myObj2);
const check = (obj) => {
Object.keys(obj).forEach(k => {
  (obj[k] && typeof obj[k] === 'object') && check(obj[k]) ||
      (!obj[k] && (obj[k] !== undefined || obj[k] == undefined)) && delete obj[k] 
})
return obj
}
var logic = check(request)
// console.log(logic)
 var data = {
  transa:{
       destinationCurrencyCode:"",
       transactionCurrnecy:"233",
       payout:"speed",
       purposeOfPayment:''
    
 
  },
  reci:{
    firstname:"",
    lastname:"",
    dateof:"",
    city:""
  }
 }
data.transa.destinationCurrencyCode=request.transa.destinationCurrencyCode
data.transa.purposeOfPayment=request.transa.purposeOfPayment
data.reci.firstname=request.reci.firstname
data.reci.lastname=request.reci.lastname
data.reci.dateof=request.reci.dateof
data.reci.city=request.reci.city
// console.log(data)

const check2 = (obj) => {
  Object.keys(obj).forEach(k => {
    (obj[k] && typeof obj[k] === 'object') && check2(obj[k]) ||
        (!obj[k] && (obj[k] !== undefined || obj[k] == undefined)) && delete obj[k] 
  })
  return obj
  }

  var newData = check2(data)
  // console.log(newData) 

  
  
  
 var logic  = {"checking":"{{ddsds}}"
 }

//  var data = JSON.stringify(logic.checking).replace(/["']/g, "")
//  console.log(JSON.stringify(data))
  // const payload = (payload) => {
  
  //   delete payload['reci']['firstname']
  //   return payload;
  // }
  var accountType=[
    {"Country":	"IN","1": "CH",	"2":"SA", "3":"Invalid", "4":"Invalid", "5":"Invalid"},
    {"Country":	"BR","1": "CH",	"2":"SA", "3":"Invalid", "4":"Invalid", "5":"Invalid"},
    {"Country":	"CL", "3":"Invalid", "4":"3", "5":"Invalid"},
    {"Country":	"TT","2": "0","3":"Invalid", "4":"Invalid", "5":"2"},
    {"Country":	"JM", "1":"2", "2":"1", "3":"Invalid", "4":"Invalid", "5":"Invalid"},
    {"Country": "JP", "1":"Invalid", "2":"1"}
  ];


  
// function checking(country){
//   return accountType.find(x => x.Country === country)
// }

// var vv = checking("IN")

// console.log(vv["1"])
// // var lo = checking("N",undefined,"I")
// // console.log(lo)


// var payload = {
//   a:10,
//   b:20
// }
// var response = {}
// function add (x,y){

//   response.add = x+y 
//   return response.add
// }

// console.log(response)

  
  


 

//  console.log(newData)
// companyToIndi(newData)
// console.log(newData[])

// const cleanEmpty = obj => Object.entries(obj)
// .map(([k,v])=>[k,v && typeof v === "object" ? cleanEmpty(v) : v])
// .reduce((a,[k,v]) => (v == null ? a : (a[k]=v, a)), {});

// console.log(cleanEmpty(request))
// Object.keys(request).forEach(k => {
//   console.log((!request[k] && request[k] !== undefined) && delete request[k])
// })
// console.log(request)
// console.log(tre)


// function check(){

//   var response = {}

//   request.destinationCurrencyCode != "" ? response.destinationCurrencyCode == request.destinationCurrencyCode : "";
  
//   console.log(response)

// }

// check()
// request.forEach(function (el) {
//   Object.keys(el).forEach(function (prop){
//     if(el[prop] === ""){
//       console.log(true)
//     }
//   })
// });




var arr1 = [11,12,13,14,15]

const val1 = arr1.reduce(function(acc,values,index,a){
  return acc + values;
},5)

console.log(val1)