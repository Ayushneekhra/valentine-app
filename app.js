function start(){location.href='questions.html'}
const q=['Do you believe in love at first sight? 💕','Do you smile when you think about me? 😊','Would you choose me today and always? 💍','Can I be your forever Valentine? 🌹']
let i=0
const el=document.getElementById('question')
if(el)el.innerText=q[i]
function next(){
i++
if(i<q.length){el.innerText=q[i]}else{location.href='success.html'}
}