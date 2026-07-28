alert("main.js ishladi");
//==========================
// SCROLL TOP
//==========================

const scrollTopBtn=document.getElementById("scrollTop");

scrollTopBtn.classList.add("hide");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

scrollTopBtn.classList.remove("hide");

}else{

scrollTopBtn.classList.add("hide");

}

});

scrollTopBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

//==========================
// SMOOTH SCROLL
//==========================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});//==========================
// PREMIUM BACKGROUND
//==========================

function createEffect(parent,total,html,size){

const box=document.querySelector(parent);

for(let i=0;i<total;i++){

const item=document.createElement("span");

item.innerHTML=html;

item.style.left=Math.random()*100+"%";

item.style.animationDuration=
6+Math.random()*8+"s";

item.style.animationDelay=
Math.random()*6+"s";

if(size){

const s=10+Math.random()*40;

item.style.width=s+"px";
item.style.height=s+"px";

}

box.appendChild(item);

}

}

createEffect(".floating-hearts",18,"❤",false);

createEffect(".gold-particles",45,"",false);

createEffect(".bokeh-background",20,"",true);
