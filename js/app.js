const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn=document.getElementById("btn");
const value=document.getElementById("hex-value");
const body=document.querySelector('body');
btn.addEventListener("click",function(){
let hex="#";
for (let i=0;i<6;i++){
hex=hex+hexValues[Math.floor(Math.random()*hexValues.length)];
//hexvalue taki 0-5  mut 6 bar 6 ta okkor ba sonka anbo ania hex or loge jug oibo 
}
value.innerText=hex;
body.style.backgroundColor=hex;

})


