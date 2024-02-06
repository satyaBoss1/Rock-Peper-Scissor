let userscore=0;
let comscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const comscorepara=document.querySelector("#com-score");
showwinner=(userwin,userchoice,comchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("User Won ")
        msg.innerText=`You Win! ${userchoice} beats ${comchoice}`;
        msg.style.backgroundColor="green"
    }
    else{
        comscore++;
        comscorepara.innerText=comscore;
        console.log("User Lose")
        msg.innerText=`You Lose! ${comchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red"
    }
}
const gencomchoice=()=>{
    const options=["rock","peper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}
const drawgame=()=>{
    console.log("Game is Draw");
    msg.innerText="Game Drow. Play Again ";
    msg.style.backgroundColor="black"
};
 
const playGame=(userchoice)=>{
    console.log("User choice =",userchoice);
    const comchoice=gencomchoice();
    console.log("Com choice=",comchoice);
    if(userchoice===comchoice){
      drawgame();  
    }
    else{
        userwin=true;
        if(userchoice==="rock"){
            userwin=comchoice==="peper"?false:true;
        }
        else if(userchoice==="peper"){
            userwin=comchoice==="scissor"?false:true;
        }
        else {
            userwin=comchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,comchoice);
    }
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
         
    });

});