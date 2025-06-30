let page1Content = document.querySelector("#page1-content");
let cursor = document.querySelector("#cursor-animation");
let page2Content =  document.querySelector("#page2");

// core js
// page1Content.addEventListener('mousemove',(e)=>{
//     cursor.style.left=e.clientX+'px';
//     cursor.style.top=e.clientY+'px';
// })

// WHIT HELP OF GSAP
page1Content.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
       x:e.x,
       y:e.y
    })
})