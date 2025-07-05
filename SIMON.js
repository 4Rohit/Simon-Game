
let gameSeq = [];
let userSeq = [];
let btns = ["pink","sky-blue","orange","blue"];

let started = false;
let level = 0;

const h2 = document.querySelector('h2')
//GAME START CODE
document.addEventListener("keypress" , function(){
    if(started == false){
        started = true;
        
        levelUp();
    }
});

//BUTTON FLASH FUNCTION
function gameFlash(btn){
     btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

//LEVEL UP FUNCTION
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `GAME START LEVEL ${level}`; 

//CHOOSING RANDOM BUTTON BY GAME SYSTEM
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor)
    // console.log(gameSeq)
    gameFlash(randBtn); 
}

//BUTTON FLASH BY USER
function userFlash(btn){
     btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);
}

//CHECK USER SEQ OR GAME SEQ ARE SAME OR NOT
function checkAns(indx){
    if(userSeq[indx] == gameSeq[indx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `GAME OVER! YOUR SCORE WAS <b>${level}</b> <br> PRESS ANY KEY TO START`;
        document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor = "white";
            }, 150);
            reset();
        }
    }

//BUTTON PRESS BY USER
function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnPress)
}

//GAME RESET FUNCTION
function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}