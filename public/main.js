console.log(`it's main.js` )

let ajax = new XMLHttpRequest()
ajax.open('GET','/infomation.json')
ajax.onreadystatechange = ()=>{
    if(ajax.readyState===4&ajax.status===200){
        const obj = JSON.parse(ajax.response)
        console.log(obj)
    }
}
ajax.send()