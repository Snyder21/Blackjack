let count = 0;
document.getElementById("message1").textContent = "My All Wishes with You Will Definetly WIn the Game";
let cards =[ ];
var sum =0;
let Pay = 180;
var won=0;
document.getElementById("message2").textContent = "Amount You Have $" +Pay
img = (src) => `<img id="patte${src}" src="/img/${src}.png">`;
/*style =(src,position) => `#pattle${src}{
    position:${position} 
}`*/

function updateCards(card){
    document.getElementById("card").innerHTML+= img(card);
}
function gamestart(){
   if(won){
       won=0;
       count=0;
       sum=0;
   }
   if(count <1 &&Pay >10){
        let card = Math.floor(Math.random()*13) +1;
        updateCards(card);
        document.getElementById("card").innerHTML='<img src="/img/'+card+'.png">';
        sum += card;  document.getElementById("message1").textContent = "Thanks To Play this Game";
        document.getElementById("sum").textContent = "Sum:- " +sum;
        document.getElementById("cardshow").textContent += card;
        cards.push(card);
        document.getElementById("message").textContent = "You Can Now Draw Card";
        count +=1;}
   else if(sum<21){
        document.getElementById("message").textContent="You cann't start game Before ending one first"
    }
}
function cardswipe(){
    if(count>0){
    if(sum<21){
    var card = Math.floor(Math.random()*13) +1;
    updateCards(card);
    sum +=card;
    count += 1;
    
    document.getElementById("sum").textContent = "Sum:- " +sum;
    document.getElementById("cardshow").textContent += " "+card ;
    document.getElementById("message1").textContent = "Continue the Game ";
    document.getElementById("message").textContent = "You Can Now Draw Card";
    document.getElementById("message").textContent = "You Will win the Game If you Get Sum 21";}
    
    if(sum===21 && !won){
        document.getElementById("cardshow").textContent = "Cards:-";
        document.getElementById("card").innerHTML='<img src="/img/winner.jpg">';
        document.getElementById("message").textContent = "Woho You got the blackJack && Money $35 Reward😍🤩🤑";
        Pay+=32;
        document.getElementById("message2").textContent = "Amount You Have $" +Pay;
        won=1;
    }
    if(sum>21){
        document.getElementById("message1").textContent = "You Loose the Game && Also $10";
        document.getElementById("message").textContent = "You Can start New Game";
        sum =0;
        count =0;
        document.getElementById("cardshow").textContent = "Cards:-";
        Pay -=10;
        document.getElementById("message2").textContent = "Amount You Have $" +Pay;
    }}
}