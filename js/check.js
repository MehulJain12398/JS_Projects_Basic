const btn = document.getElementById('btn')

const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://mehuljain-eval-test.apigee.net/pracr');
    xhr.setRequestHeader('Set-cookie','Apigee-cookie-html')
    xhr.send()
}

btn.addEventListener('click',getData)