let choice=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let uscore=document.querySelector("#user-score");
let cscore=document.querySelector("#comp-score");




let userscore=0;
let compscore=0;

 const playgame =(userchoice)=>{
console.log("userchoice=",userchoice)
let compchoice=computerchoice()
 

  const showwinner=(winner)=>{
    if (winner){
         userscore++;
    uscore.innerText=userscore;
  
    msg.innerText=`you win, your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
    }
    else{
        msg.innerText=`you lose, ${compchoice} beats your ${userchoice}` ;
        msg.style.backgroundColor="#800000";
         compscore++;
        cscore.innerText=compscore;
       
    }

  }

  const draw=()=>{
     msg.innerText=" its draw,try again ";
    msg.style.backgroundColor="rgb(28, 28, 44)";
  }
  if (userchoice===compchoice){
   draw();
  }
else{
       let userwin=true;

       if(userchoice==="rock"){
        userwin= compchoice === "paper" ? false :true;

       }
       else if
        (userchoice==="paper"){
         userwin=   compchoice==="scissor" ? false:true;
        }
        else
       {
         userwin=   compchoice==="rock" ? false:true;
        }

        showwinner(userwin);
}
}



//   if (userchoice===compchoice){
//     msg.innerText=" its draw,try again ";
//     msg.style.backgroundColor="rgb(28, 28, 44)";
    
//   }
//  else  if((userchoice==="rock"&& compchoice==="paper")||(userchoice==="paper"&& compchoice==="scissor")||(userchoice==="scissor"&&compchoice==="rock")){

//     msg.innerText="you lose try again";
//     msg.style.backgroundColor="red";
//      compscore++;
//     cscore.innerText=compscore;
//   }
//   else{
//      userscore++;
//     uscore.innerText=userscore;
  
    // msg.innerText="congratulations you win";
    // msg.style.backgroundColor="green";
//   }

 


choice.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
  playgame(userchoice);
});
});


const computerchoice=()=>{
    let compturn=["rock", "paper","scissor"];
let randindx=Math.floor(Math.random()*3);
return compturn[randindx];


}


