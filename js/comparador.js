
// this function compare the selected cards and compared it
const compareCards = () => {
const firstCardDiv$$ = document.querySelectorAll('.selected');
const removeClass =()=>{

    firstCardDiv$$[0].classList.remove("descubierta");
    firstCardDiv$$[1].classList.remove("descubierta");
    firstCardDiv$$[0].classList.remove("selected");
    firstCardDiv$$[1].classList.remove("selected");

}

    const firstCard = cardsPicked[0];
    const secondCard = cardsPicked[1];

  

if (firstCard.id !== secondCard.id){
    setTimeout(removeClass,800);
    cardsPicked=[];

    //here goes the counter function
    contador()
}else {

    cardsMatched.push(cardsPicked[0]);
    cardsMatched.push(cardsPicked[1]);
    firstCardDiv$$[0].classList.remove("selected");
    firstCardDiv$$[1].classList.remove("selected");
    cardsPicked=[];
    scorePlay();
}
    // console.log(cardsPicked);

  
  };
