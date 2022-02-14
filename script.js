class Player{
    constructor(symbol,victories){
        
        this.symbol=symbol;
        this.victories=victories;
    }
   
    
}

const player1=new Player("X",0);
const player2=new Player("O",0);



let currentPlayer=player1;




let b0=document.getElementById("0");
let b1=document.getElementById("1");
let b2=document.getElementById("2");
let b3=document.getElementById("3");
let b4=document.getElementById("4");
let b5=document.getElementById("5");
let b6=document.getElementById("6");
let b7=document.getElementById("7");
let b8=document.getElementById("8");


let arraybox=[b0,b1,b2,b3,b4,b5,b6,b7,b8];


let arrayVictories=Array.of(
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

);
let victories=[];
arrayVictories.forEach(element => {
    victories.push(element.slice());
});


    arraybox.forEach(element => {
        element.onclick=()=>{
            if(currentPlayer.symbol==="X"){
                element.style.color="#ff4d00";
                element.innerHTML="X";
                currentPlayer=player2;
                
            }else{
                element.style.color="#ffe600";
                element.innerHTML="O";
                currentPlayer=player1;
                
            }
            updateDataVictories(element.id,element.innerHTML);
           
            element.style.pointerEvents="none";
            checkWinner();
        };
    });

    



function updateDataVictories(id,symbol){
    arrayVictories.forEach(element => {
        element.forEach(function(value,index,array) {
            
            if(value==id){
                array[index]=symbol;
                
            }
        });
    });
}
function checkWinner(){
    try {
     
    arrayVictories.forEach(element => {
        if(element.every(winnerX)){
              endGame("X");
              throw new BreakException();
          }else if(element.every(winnerO)){
              endGame("O");
              throw new BreakException();
          }else if(drawGame()){
            let winner=document.getElementById("winner");
                    winner.innerHTML='Draw';
                    winner.style.color="#00bef8";
                    
          }
    
        });   
    } catch (e) {
        
    }

    
}
function winnerX(elemento,indice,arreglo){
    return elemento==="X";
}
function winnerO(elemento,indice,arreglo){
    return elemento==="O";
}

function drawGame(){
    let count=0;
    arraybox.forEach(element => {
        if(element.innerHTML==="X" || element.innerHTML==="O"){
            count++;
            
        }
        
    });

    if(count===9){
        return true;
        
    }else{
        return false;
    }

}
function endGame(player){
    arraybox.forEach(element => {
        element.style.pointerEvents="none";    
    });

    let winner=document.getElementById("winner");
    winner.innerHTML=`${player} Won`;
    let w=document.getElementById(`player${player}`);
    if(player==="X"){
        player1.victories=player1.victories+1;
        winner.style.color="#ff4d00";
        w.innerHTML=`PlayerX = ${player1.victories}`;
    }else{
        player2.victories=player2.victories+1;
        winner.style.color="#ffe600";
        w.innerHTML=`PlayerO = ${player2.victories}`;
    }
    
    
}
function restartGame(){
    currentPlayer=player1;
   
    arrayVictories=victories.slice();
    victories.length=0;
    arrayVictories.forEach(element => {
    victories.push(element.slice());
    });
    arraybox.forEach(element => {
        element.innerHTML="";
        element.style.pointerEvents="auto";
    });
    let winner=document.getElementById("winner");
    winner.innerHTML='';
}



