let page1Content = document.querySelector("#page1-content");
let cursor=document.querySelector("#cursor-animation");

page1Content.addEventListener('mousemove',(e)=>{
    //   console.log(e.clientX,e.clientY);
    cursor.style.left=e.clientX+'px';
    cursor.style.top=e.clientY+'px';
})