
// this function select the elements whit class="card" and for each one of them give it a click event that change de event current target or the target clicked a new class called "descubierta"
const flipCard =(event,i)=>{
    const card = totalOceanCards[i];
    const cardWon = cardsMatched.find(findedCard=> findedCard.name === card.name);

if(cardWon){
    console.log(cardWon);
    alert('this card is marked ;)')
}else{


    cardsPicked.push(card)
    event.target.classList.add("descubierta");
    event.target.classList.add("selected");

    if(event.target.firstChild){
    const cardImg = event.target.firstChild.firstChild

    cardImg.setAttribute('src', card.img);

} 
    if(cardsPicked.length===2){
        setTimeout(compareCards(),500);
        }
  
  }  
}