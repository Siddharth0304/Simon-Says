let gameSeq=[];
let userSeq=[];
let h2=document.querySelector("h2");
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

document.addEventListener("keypress",function(){  //Starting the game on keypress
    if(started==false){
        started=true;
    }
    levelUp();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 280);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random() * 4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    // console.log(gameSeq);
    btnFlash(randBtn);
    // console.log(randColor);
    // console.log(randBtn);
}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{    
        h2.innerHTML=`Game Over! Your score was <b>${level-1}</b><br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor="#fa5f55";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="black";
        },300);
        
        reset();
        
    }

}

function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(bt of allbtns){
    bt.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];

}
