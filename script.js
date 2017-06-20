const testWrapper=document.querySelector(".test-wrapper");
const testArea=document.querySelector("#test-area");
const originText=document.querySelector("#origin-text p").innerHTML;
const resetButton=document.querySelector("#reset");
const theTimer=document.querySelector(".timer");

var timer=[0,0,0,0];
var interval;
var timerRunning=false;


function runTimer()
{
    let currentTime= timer[0]+":"+timer[1]+":"+timer[2];
    theTimer.innerHTML=currentTime;
    timer[3]++;
    
    timer[0]=Math.floor((timer[3]/100)/60);
    timer[1]=Math.floor((timer[3]/100)-(timer[0]*60));
    timer[2]=Math.floor(timer[3]-(timer[1]*100)-(timer[0]*6000));
}

function spellCheck()
{
    let textEntered=testArea.value;
    let originTextMatch=originText.substring(0,textEntered.length);
    
    if(textEntered==originText)
        {
            clearInterval(interval);
            document.body.style.backgroundColor = "#32cd32";
        }
        
    else
    {
        if(textEntered==originTextMatch)
            document.body.style.backgroundColor="#65ccf3";
        else
            document.body.style.backgroundColor="#ff0000";
        
    }
    
    console.log(textEntered);
}


function start()
{
    let textEnteredLength=testArea.value.length;
    if(textEnteredLength===0 && !timerRunning)
        {
            timerRunning=true;
            interval=setInterval(runTimer,10);   
        }
    console.log(textEnteredLength);
}

function reset()
{
    clearInterval(interval);
    interval=null;
    timer=[0,0,0,0];
    timerRunning=false;
    
    testArea.value="";
    theTimer.innerHTML="00:00:00";
    document.body.style.backgroundColor="#ffffff";
    
    
    console.log("Reset Button has been pressed!"); 
}


testArea.addEventListener("keypress",start,false);
testArea.addEventListener("keyup",spellCheck,false);
resetButton.addEventListener("click",reset,false);