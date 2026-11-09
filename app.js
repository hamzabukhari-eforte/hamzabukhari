document.documentElement.classList.add("js");
document.querySelectorAll("a[data-u]").forEach(function(a){a.href="mailto:"+a.dataset.u+"@"+a.dataset.d});
document.querySelectorAll(".card").forEach(function(c){var b=c.querySelector(".tg");b.onclick=function(){var o=c.classList.toggle("open");b.setAttribute("aria-expanded",o);b.textContent=o?"Hide details":"Show what I built"};
c.addEventListener("mousemove",function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform="perspective(800px) rotateY("+x*6+"deg) rotateX("+-y*6+"deg)"});
c.addEventListener("mouseleave",function(){c.style.transform=""})});
var rm=matchMedia("(prefers-reduced-motion:reduce)").matches,R=document.getElementById("role"),T="Full-Stack Developer with an eye for UI",k=0;
if(rm){R.textContent=T}else{(function ty(){R.textContent=T.slice(0,++k);if(k<T.length)setTimeout(ty,55)})()}


var LN=[[["k","const"],["","\u0020"],["v","hamza"],[""," = {"]],[["","  "],["p","role"],["",": "],["s","\"Full-Stack Developer\""],["",","]],[["","  "],["p","stack"],["",": ["],["s","\"Next.js\""],["",", "],["s","\"NestJS\""],["",", "],["s","\"TypeScript\""],["","],"]],[["","  "],["p","since"],["",": "],["n","2022"],["",","]],[["","  "],["p","city"],["",": "],["s","\"Karachi\""],["",","]],[["","  "],["p","openTo"],["",": "],["s","\"remote roles\""],["",","]],[["",""],["",""],["","};"]]];
var cd=document.getElementById("code"),pvs=document.querySelectorAll("#pv span");
function lineHtml(t,n){var o="",c=n;t.forEach(function(x){if(c<=0)return;var q=x[1].slice(0,c);c-=x[1].length;o+=x[0]?"<span class=\""+x[0]+"\">"+q.replace(/</g,"&lt;")+"</span>":q.replace(/</g,"&lt;")});return o}
function len(t){return t.reduce(function(a,x){return a+x[1].length},0)}
function draw(li,ci,cur){var h="";for(var i=0;i<=li&&i<LN.length;i++){h+="<div class=\"ln\">"+lineHtml(LN[i],i<li?1e9:ci)+(i===li&&cur?"<span class=\"cur\"></span>":"")+"</div>"}cd.innerHTML=h}
function show(l){pvs.forEach(function(p){if(+p.dataset.l<=l)p.classList.add("on")})}
if(rm){draw(LN.length-1,1e9,false);show(9)}else{var li=0,ci=0;setTimeout(function st(){ci++;if(ci>len(LN[li])){show(li);li++;ci=0;if(li>=LN.length){draw(LN.length-1,1e9,true);return}}draw(li,ci,true);setTimeout(st,ci===0?260:34)},700)}
var tl=document.getElementById("tl");
function sp(){var r=tl.getBoundingClientRect(),v=Math.min(1,Math.max(0,(innerHeight*.75-r.top)/r.height));tl.style.setProperty("--p",v)}
addEventListener("scroll",sp,{passive:true});sp();
