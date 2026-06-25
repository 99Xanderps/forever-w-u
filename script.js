/* ===================================================
   HAPPY BIRTHDAY WEBSITE
   SCRIPT.JS
   PART 1
=================================================== */


/* ==========================
   Loader
========================== */

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},800);

},1800);

});


/* ==========================
   Typing Effect
========================== */

const typing=document.getElementById("typing");

let message=
"Today is your day. I hope every smile, every dream, and every little happiness finds you. Happy Birthday ❤️";

let index=0;

function typeWriter(){

if(index<message.length){

typing.innerHTML+=message.charAt(index);

index++;

setTimeout(typeWriter,45);

}

}

typeWriter();


/* ==========================
   Gift Button
========================== */

const giftBtn=document.getElementById("giftBtn");

giftBtn.addEventListener("click",()=>{

giftBtn.innerHTML="❤️ Happy Birthday ❤️";

giftBtn.style.transform="scale(1.1)";

launchConfetti();

createBalloons();

setTimeout(()=>{

giftBtn.style.transform="scale(1)";

},500);

});


/* ==========================
   Scroll Reveal
========================== */

const fade=document.querySelectorAll(".fade");

function reveal(){

fade.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-120){

item.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

reveal();


/* ==========================
   Music
========================== */

const music=document.getElementById("bgm");

const musicBtn=document.getElementById("music");

let playing=false;

music.volume=.45;

musicBtn.addEventListener("click",()=>{

if(!playing){

music.play();

musicBtn.innerHTML="❚❚";

playing=true;

}else{

music.pause();

musicBtn.innerHTML="♫";

playing=false;

}

});


/* ==========================
   Floating Hearts
========================== */

const hearts=document.querySelector(".hearts");

function createHeart(){

const heart=document.createElement("span");

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*25)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,450);


/* ==========================
   Balloon Generator
========================== */

function createBalloons(){

const colors=["red","blue","yellow","purple"];

for(let i=0;i<20;i++){

const balloon=document.createElement("div");

balloon.classList.add("balloon");

balloon.classList.add(colors[Math.floor(Math.random()*4)]);

balloon.style.left=Math.random()*100+"vw";

balloon.style.animationDuration=(6+Math.random()*6)+"s";

document.body.appendChild(balloon);

setTimeout(()=>{

balloon.remove();

},12000);

}

}


/* ==========================
   Cake Button
========================== */

const blow=document.getElementById("blow");

blow.addEventListener("click",()=>{

blow.innerHTML="✨ Make A Wish ✨";

launchConfetti();

});


/* ==========================
   Confetti
========================== */

const canvas=document.getElementById("confetti");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});

let particles=[];

function launchConfetti(){

particles=[];

for(let i=0;i<250;i++){

particles.push({

x:canvas.width/2,

y:canvas.height/3,

size:Math.random()*8+3,

speedX:(Math.random()-.5)*12,

speedY:(Math.random()-.5)*12,

gravity:.18,

life:150,

color:`hsl(${Math.random()*360},100%,60%)`

});

}

animateConfetti();

}

function animateConfetti(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{

ctx.fillStyle=p.color;

ctx.fillRect(p.x,p.y,p.size,p.size);

p.x+=p.speedX;

p.y+=p.speedY;

p.speedY+=p.gravity;

p.life--;

if(p.life<=0){

particles.splice(index,1);

}

});

if(particles.length){

requestAnimationFrame(animateConfetti);

}

}

 /* ===================================================
   SCRIPT.JS
   PART 2
=================================================== */


/* ==========================
   Gallery Lightbox
========================== */

const galleryImages=document.querySelectorAll(".photos img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

lightbox.style.position="fixed";
lightbox.style.top="0";
lightbox.style.left="0";
lightbox.style.width="100%";
lightbox.style.height="100%";
lightbox.style.background="rgba(0,0,0,.9)";
lightbox.style.display="none";
lightbox.style.justifyContent="center";
lightbox.style.alignItems="center";
lightbox.style.zIndex="999999";

const preview=document.createElement("img");

preview.style.maxWidth="90%";
preview.style.maxHeight="90%";
preview.style.borderRadius="20px";
preview.style.boxShadow="0 0 40px rgba(255,94,168,.5)";

lightbox.appendChild(preview);

document.body.appendChild(lightbox);

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

preview.src=img.src;

lightbox.style.display="flex";

});

});

lightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});


/* ==========================
   Catch My Heart Game
========================== */

const heart=document.getElementById("heartGame");

const score=document.getElementById("score");

let total=0;

heart.addEventListener("click",()=>{

total++;

score.innerHTML=total;

moveHeart();

if(total===10){

birthdayPopup("🎉 You're doing great! ❤️");

}

if(total===25){

birthdayPopup("💖 You found lots of love!");

launchConfetti();

}

if(total===50){

birthdayPopup("🏆 Achievement Unlocked!<br>You stole my heart forever ❤️");

launchConfetti();

}

});


function moveHeart(){

const x=Math.random()*(window.innerWidth-120);

const y=Math.random()*(window.innerHeight-120);

heart.style.position="fixed";

heart.style.left=x+"px";

heart.style.top=y+"px";

}


/* ==========================
   Birthday Popup
========================== */

function birthdayPopup(text){

const popup=document.createElement("div");

popup.innerHTML=text;

popup.style.position="fixed";
popup.style.left="50%";
popup.style.top="50%";
popup.style.transform="translate(-50%,-50%)";
popup.style.background="rgba(18,18,18,.95)";
popup.style.padding="30px 40px";
popup.style.borderRadius="20px";
popup.style.color="white";
popup.style.fontSize="20px";
popup.style.textAlign="center";
popup.style.boxShadow="0 0 35px rgba(255,94,168,.5)";
popup.style.zIndex="999999";

document.body.appendChild(popup);

setTimeout(()=>{

popup.remove();

},2500);

}


/* ==========================
   Shooting Stars
========================== */

function shootingStar(){

const star=document.createElement("div");

star.style.position="fixed";

star.style.left=Math.random()*window.innerWidth+"px";

star.style.top="-120px";

star.style.width="3px";

star.style.height="120px";

star.style.background="linear-gradient(white,transparent)";

star.style.transform="rotate(35deg)";

star.style.pointerEvents="none";

star.style.opacity=".8";

star.style.zIndex="-1";

document.body.appendChild(star);

let pos=-120;

const fall=setInterval(()=>{

pos+=18;

star.style.top=pos+"px";

if(pos>window.innerHeight+150){

clearInterval(fall);

star.remove();

}

},16);

}

setInterval(shootingStar,4500);


/* ==========================
   Cursor Heart Effect
========================== */

document.addEventListener("click",(e)=>{

const love=document.createElement("div");

love.innerHTML="❤️";

love.style.position="fixed";

love.style.left=e.clientX+"px";

love.style.top=e.clientY+"px";

love.style.fontSize="22px";

love.style.pointerEvents="none";

love.style.zIndex="99999";

document.body.appendChild(love);

let scale=1;

let opacity=1;

const effect=setInterval(()=>{

scale+=0.05;

opacity-=0.03;

love.style.transform=`scale(${scale})`;

love.style.opacity=opacity;

if(opacity<=0){

clearInterval(effect);

love.remove();

}

},16);

});


/* ==========================
   Secret Easter Egg
========================== */

let secret=0;

document.addEventListener("keydown",(e)=>{

if(e.key==="h"){

secret++;

}

if(secret===7){

birthdayPopup("🎁 Secret Found!<br>You're the best gift I've ever received ❤️");

launchConfetti();

secret=0;

}

});


/* ==========================
   Console Message
========================== */

console.log("%c🎂 Happy Birthday ❤️","font-size:28px;color:#ff5ea8;font-weight:bold;");
console.log("%cMade with love.","font-size:16px;color:white;");

 /* ===================================================
   SCRIPT.JS
   PART 3 (FINAL)
=================================================== */


/* ==========================
   Birthday Quotes
========================== */

const birthdayQuotes=[
"May your smile always shine. ❤️",
"I'm so lucky to know you.",
"You deserve every happiness.",
"Thank you for being born.",
"I hope today is unforgettable. 🎂"
];

let quoteIndex=0;

function changeQuote(){

    index=0;

    typing.innerHTML="";

    message=birthdayQuotes[quoteIndex];

    typeWriter();

    quoteIndex++;

    if(quoteIndex>=birthdayQuotes.length){

        quoteIndex=0;

    }

}

setInterval(changeQuote,9000);


/* ==========================
   Auto Balloons
========================== */

setInterval(()=>{

    createBalloons();

},18000);


/* ==========================
   Birthday Firework Effect
========================== */

function createFirework(){

    for(let i=0;i<25;i++){

        const spark=document.createElement("div");

        spark.className="firework";

        spark.style.left=Math.random()*window.innerWidth+"px";

        spark.style.top=Math.random()*window.innerHeight*.6+"px";

        spark.style.background=`hsl(${Math.random()*360},100%,65%)`;

        document.body.appendChild(spark);

        setTimeout(()=>{

            spark.remove();

        },1000);

    }

}

setInterval(createFirework,12000);


/* ==========================
   Final Birthday Message
========================== */

window.addEventListener("scroll",()=>{

    const ending=document.querySelector(".ending");

    const top=ending.getBoundingClientRect().top;

    if(top<window.innerHeight-150){

        createFirework();

    }

});


/* ==========================
   Music Fade
========================== */

music.addEventListener("play",()=>{

    music.volume=0;

    let v=0;

    const fade=setInterval(()=>{

        v+=0.05;

        music.volume=Math.min(v,0.45);

        if(v>=0.45){

            clearInterval(fade);

        }

    },120);

});


/* ==========================
   Secret Birthday Message
========================== */

console.log("🎂");
console.log("Happy Birthday!");
console.log("Made with ❤️ by someone who loves you.");


/* ==========================
   Finish
========================== */

console.log("Birthday Website Loaded Successfully ❤️");