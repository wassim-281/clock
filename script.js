const sec =document.getElementById('sec')
const min = document.getElementById('min')
const hrs= document.getElementById('hrs')

let secAngel
let secounds

let minAngel
let minuts

let hrsAngel
let hours

let minRat

let fHrsAngel

setInterval(()=>{
    let corrent=new Date()
    secounds=corrent.getSeconds()
   
    secAngel=secounds*360/60

    sec.style.transform=`rotate(${secAngel}deg)`


    minuts=corrent.getMinutes()
    
    minAngel=minuts*360/60
    min.style.transform=`rotate(${minAngel}deg)`


    hours=corrent.getHours()
    hrsAngel= hours*360/12
    minRat=minuts*30/60
    console.log(minRat)
    
    fHrsAngel=hrsAngel+minRat
    hrs.style.transform=`rotate(${fHrsAngel}deg)`


},1000)