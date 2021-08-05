var request = {
    
    reci:{
      firstname:"mehul",
      lastname:"jain",
      name:"VISA INC.",
      purpose:""
    }
   }
   
   

   const check = (obj) => {
   Object.keys(obj).forEach(k => {
     (obj[k] && typeof obj[k] === 'object') && check(obj[k]) ||
         (!obj[k] && (obj[k] !== undefined || obj[k] == undefined)) && delete obj[k] 
   })
   return obj
   }
   var logic = check(request)
//    console.log(logic)
    var CompanyIndi = {
     
     reci:{
       firstname:"",
       lastname:"",
       dateof:"21",
       city:"Jai",
       name:"",
       purpose:""
     }
    }
  
    CompanyIndi.reci.firstname=request.reci.firstname
    CompanyIndi.reci.lastname=request.reci.lastname
    CompanyIndi.reci.name = request.reci.name;
    CompanyIndi.reci.purpose = request.reci.purpose

  
    var IndiCompany = {
     
        reci:{


          name:"",
          purpose:""
        }
       }
       
   
   const check2 = (obj) => {
     Object.keys(obj).forEach(k => {
       (obj[k] && typeof obj[k] === 'object') && check2(obj[k]) ||
           (!obj[k] && (obj[k] !== undefined || obj[k] == undefined)) && delete obj[k] 
     })
     return obj
     }
   
     var newData = check2(CompanyIndi)
     console.log(newData) 



var fetched 

     var unsToUns = {
      "originatorDetail": {
          "bankId": 416584,
          "bankCountryCode": "840",
          "originatorId": "CAIDCode77765",
          "originatorName": "VPL Postman Test",
          "originatorBIC":"98767",
          "bankName": "Bank of America",
          "bankBIC":"1234567",
          "address": {
              "addressLine": "Times Square–42nd Street",
              "state": "NY",
              "postalCode": "10001",
              "country": "USA"
          },
          "paymentFacilitator": {
              "name":"name",
              "id":"id",
              "country":"country"
          },
          "merchantCategoryCode": "6012",
          "originatorShortName":"originatorShortName",
          "bid":"bid"
      },
      "serviceProviderDetail": {
          "routingId": "4655710020000018"
      },
      "transactionDetail": {
          "destinationAmount": 3000,
          "destinationCurrencyCode":"356",
          "retrievalReferenceNumber":"{{current_time_in_ms}}",
          "transmissionDateTime": "2020-04-17T18:04:07.000Z",
          "systemTraceAuditNumber": "444555",
          "transactionAmount": 2000,
          "transactionCurrencyCode": "978",
          
          "businessApplicationId": "FD",
          "payoutSpeed": "standard",
          "statementNarrative": "Advance payment",
          "purposeOfPayment":"ISTRAD",
          "clientReferenceId":"clientReferenceId",
          "endToEndId":"endToEndId",
          "settlementModel":"settlementModel",
          "usesVisaLiquidity":"usesVisaLiquidity",
          "expectedFundingTimestamp":"expectedFundingTimestamp",
          "additionalData":[{
              "name":"name",
              "value":"value"
          }]
      },
      "recipientDetail": {
          "type": "I",
          "firstName": "Jessica",
          "name":"VISA INC.",
          "lastName": "smith",
          "cityOfBirth": "AUS",
          "countryOfBirth": "AUS",
          "dateOfBirth": "2020-02-27",
          "identificationList": [{
              "idType":"L",
              "idNumber":"57857857",
              "idIssueCountry":"COUNTRY"
          }],  
          "additionalData":[{
              "name":"name",
              "value":"value"
          }],          
          "contactNumber": "2345678909",
          "contactEmail": "jessica@visa.com",
          "address": {
              "addressLine1": "123 Main St",
              "addressLine2": "Lane 1",
              "city": "Jaipur",
              "country": "IND",
              "postalCode":"optional",
              "state":"optional"
          },
          "payoutMethod": "B",
          "bank": {
              "bankName": "AXIS BANK",
              "accountName": "Money Market",
              "accountNumberType": "DEFAULT",
              "accountNumber": "643401505732",
              "bankCodeType": "DEFAULT",
              "bankCode": "ICIC0006650",
              "accountType": "2",
              "branchCode": "94706",
              "countryCode": "IND",
              "currencyCode": "INR",
              "BIC":"COMMVNVXXXX"
          }
      },
      "senderDetail": {
        "type": "I",
        "firstName": "Jessica",
        "name":"Earthport",
        "lastName": "smith",
      


          "identificationList": [
              {
              "idType":"L",
              "idNumber":"57857857",
              "idIssueCountry":"COUNTRY"
              }],
          "additionalData":[{
              "name":"name",
              "value":"value"
          }],
          "contactNumber": "2345678909",
          "contactEmail": "employee@visa.com",
          "sourceOfIncome": "employement",
          "beneficiaryRelationship": "partner",
          "senderReferenceNumber": "34536789056",
          "senderAccountNumber": "senderAccountNumber",
          "sourceOfFunds": "sourceOfFunds",
          "cityOfBirth": "optional",
          "countryOfBirth": "USA",
          "dateOfBirth": "2000-01-01",


          "address": {
              "addressLine1": "Street 2",
              "addressLine2": "Lane 2",
              "city": "San Francisco",
              "country": "USA",
              "postalCode": "78759",
              "state": "CA"
          }
      }
}
   

unsToUns.transactionDetail.destinationCurrencyCode=fetched.transactionDetail.destinationCurrencyCode
unsToUns.transactionDetail.transactionCurrencyCode = fetched.transactionDetail.transactionCurrencyCode
unsToUns.transactionDetail.purposeOfPayment = fetched.transactionDetail.purposeOfPayment
unsToUns.transactionDetail.retrievalReferenceNumber = unsToUns.transactionDetail.retrievalReferenceNumber.replace(/["']/g, ""); 

unsToUns.recipientDetail.identificationList

var total = fetched.recipientDetail.identificationList.length;
var ID_TYPE = []
var ID_NUMBER = []
var ID_ISSUE_COUNTRY = []


if(total>0){
for(var i = 0; i<total ; i++){

  var idType_P = fetched.recipientDetail.identificationList[i].idType.split(',')


  ID_TYPE.push(idType_P[0]);

    ID_NUMBER.push(fetched.recipientDetail.identificationList[i].idNumber);
    ID_ISSUE_COUNTRY.push(fetched.recipientDetail.identificationList[i].idIssueCountry);
}
}
      


        //idType
        if(fetched.recipientDetail.identificationList[0].hasOwnProperty('idType')){
          unsToUns.recipientDetail.identificationList[0].idType = ID_TYPE.join('-');
        }




        //idNumber
        if(fetched.recipientDetail.identificationList[0].hasOwnProperty('idNumber')){
          unsToUns.recipientDetail.identificationList[0].idNumber = ID_NUMBER.join('-');
        }



        //idIssueCountry 
        if(fetched.recipientDetail.identificationList[0].hasOwnProperty('idIssueCountry')){
          unsToUns.recipientDetail.identificationList[0].idIssueCountry = ID_ISSUE_COUNTRY.join('-');
        }

    
    
        
        unsToUns.recipientDetail.dateOfBirth = fetched.recipientDetail.dateOfBirth
        unsToUns.recipientDetail.countryOfBirth = fetched.recipientDetail.countryOfBirth
        unsToUns.recipientDetail.cityOfBirth = fetched.recipientDetail.cityOfBirth

        unsToUns.recipientDetail.address.addressLine1 = fetched.recipientDetail.address.addressLine1
        unsToUns.recipientDetail.address.addressLine2 = fetched.recipientDetail.address.addressLine2
        unsToUns.recipientDetail.address.city = fetched.recipientDetail.address.city
        unsToUns.recipientDetail.address.country = fetched.recipientDetail.address.country
        unsToUns.recipientDetail.address.postalCode = fetched.recipientDetail.address.postalCode
        unsToUns.recipientDetail.address.state = fetched.recipientDetail.address.state

       
        unsToUns.recipientDetail.bank.bankName = fetched.recipientDetail.bank.bankName
        unsToUns.recipientDetail.bank.accountName = fetched.recipientDetail.bank.accountName
        unsToUns.recipientDetail.bank.accountNumberType = fetched.recipientDetail.bank.accountNumberType
        unsToUns.recipientDetail.bank.accountNumber = fetched.recipientDetail.bank.accountNumber
        unsToUns.recipientDetail.bank.bankCodeType = fetched.recipientDetail.bank.bankCodeType
        unsToUns.recipientDetail.bank.bankCode = fetched.recipientDetail.bank.bankCode
        unsToUns.recipientDetail.bank.accountType = fetched.recipientDetail.bank.accountType
        unsToUns.recipientDetail.bank.branchCode = fetched.recipientDetail.bank.branchCode
        unsToUns.recipientDetail.bank.countryCode = fetched.recipientDetail.bank.countryCode
        unsToUns.recipientDetail.bank.currencyCode = fetched.recipientDetail.bank.currencyCode
        unsToUns.recipientDetail.bank.BIC = fetched.recipientDetail.bank.BIC

        if('additionalData' in fetched.recipientDetail){
          var add_total = fetched.recipientDetail.additionalData.length;
          var add_NAME = []
          var add_VALUE = [] 
      
          for(var a=0; a<add_total; a++){
              add_NAME.push(fetched.recipientDetail.additionalData[a].name);
              add_VALUE.push(fetched.recipientDetail.additionalData[a].value)
          }
      
   
      
      
          //name field
          if(fetched.recipientDetail.additionalData[0].hasOwnProperty('name')){
            unsToUns.recipientDetail.additionalData[0].name = add_NAME.join('-');
          }
  
      
      
          //value field
          if(fetched.recipientDetail.additionalData[0].hasOwnProperty('value')){
            unsToUns.recipientDetail.additionalData[0].value = add_VALUE.join('-');
          }

      }else{
          delete unsToUns.recipientDetail.additionalData
      }

//senderDetail


var SEN_total = fetched.senderDetail.identificationList.length;
var SEN_ID_TYPE = []
var SEN_ID_NUMBER = []
var SEN_ID_ISSUE_COUNTRY = []


if(SEN_total>0){
for(var i = 0; i<SEN_total ; i++){

  var idType_P = fetched.recipientDetail.identificationList[i].idType.split(',')


  SEN_ID_TYPE.push(idType_P[0]);
    SEN_ID_NUMBER.push(fetched.senderDetail.identificationList[i].idNumber);
    SEN_ID_ISSUE_COUNTRY.push(fetched.senderDetail.identificationList[i].idIssueCountry);
}
}



        //idType
        if(fetched.senderDetail.identificationList[0].hasOwnProperty('idType')){
          unsToUns.senderDetail.identificationList[0].idType = SEN_ID_TYPE.join('-');
        }





        //idNumber
        if(fetched.senderDetail.identificationList[0].hasOwnProperty('idNumber')){
          unsToUns.senderDetail.identificationList[0].idNumber = SEN_ID_NUMBER.join('-');
        }



        //idIssueCountry 
        if(fetched.senderDetail.identificationList[0].hasOwnProperty('idIssueCountry')){
          unsToUns.senderDetail.identificationList[0].idIssueCountry = SEN_ID_ISSUE_COUNTRY.join('-');
        }

if('additionalData' in fetched.senderDetail){
          var add_total = fetched.senderDetail.additionalData.length;
          var add_NAME = []
          var add_VALUE = [] 
      
          for(var a=0; a<add_total; a++){
              add_NAME.push(fetched.senderDetail.additionalData[a].name);
              add_VALUE.push(fetched.senderDetail.additionalData[a].value)
          }
      
   
      
      
          //name field
          if(fetched.senderDetail.additionalData[0].hasOwnProperty('name')){
            unsToUns.senderDetail.additionalData[0].name = add_NAME.join('-');
          }
  
      
      
          //value field
          if(fetched.senderDetail.additionalData[0].hasOwnProperty('value')){
            unsToUns.senderDetail.additionalData[0].value = add_VALUE.join('-');
          }

      }else{
          delete unsToUns.senderDetail.additionalData
      }


        unsToUns.senderDetail.address.addressLine1 = fetched.senderDetail.address.addressLine1
        unsToUns.senderDetail.address.addressLine2 = fetched.senderDetail.address.addressLine2
        unsToUns.senderDetail.address.city = fetched.senderDetail.address.city
        unsToUns.senderDetail.address.country = fetched.senderDetail.address.country
        unsToUns.senderDetail.address.postalCode = fetched.senderDetail.address.postalCode
        unsToUns.senderDetail.address.state = fetched.senderDetail.address.state



   



