let choices=document.querySelectorAll(".choice");
let winner=document.querySelector("#whowon");
let count=document.querySelector("#scorecount");
let resetbutton=document.querySelector(".resetbutton");
let userscore=0;
let comscore=0;


// Generating Computer Choice

function computerchoice() 
{   
    const arraychoice =["rock","paper","scissor"];
    let randomnumber=Math.floor(Math.random()*3);
    return arraychoice[randomnumber];
}



//Printing User choice 
function userchoice (choice)
{
    const choiceId = choice.getAttribute("id");
    const computerchoiceId=computerchoice();
    console.log ("User Choice is ",choiceId);
    console.log("Computer Choose",computerchoiceId);
    playgame (choiceId,computerchoiceId);
    return choiceId;
}
choices.forEach((choice) => {
choice.addEventListener("click", () => userchoice(choice));}
);


// Playing Game 

const playgame = (choiceId,computerchoiceId) =>
{
    
    if(computerchoiceId === choiceId)
    {
        console.log ("Draw");
        winner.innerText=" It's a DRAW";
    }
    else if((computerchoiceId=="rock" && choiceId== "paper") || (computerchoiceId == "paper" && choiceId=="scissor") || (computerchoiceId==="scissor" && choiceId=== "rock"))
    {
        console.log("User Wins");
        winner.innerText="PLAYER WINS";
        userscore=userscore+1;
       count.innerText="Player :"+userscore +"  Computer :"+ comscore;

    }
    else
    {
        console.log("Computer Wins");
        winner.innerText="COMPUTER WINS";
         comscore=comscore+1;
       count.innerText="Player :"+userscore +"Computer :"+ comscore;
    }
}


// Resetting The Score When 
 function resetting ()
 {
    userscore=0;
    comscore=0;
     count.innerText="Player :"+userscore +"Computer :"+ comscore;
 }
 resetbutton.addEventListener("click" , () => resetting ());



