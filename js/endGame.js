const endGame = ()=>{


    main$$.innerHTML="";

    let endDiv$$ = document.createElement('div');
    endDiv$$.classList="endDiv";

    let endImg$$ = document.createElement('img');
    endImg$$.classList="endImg"
    endImg$$.setAttribute('src','./public/assets/memoryGame/endGame.png');

    endDiv$$.appendChild(endImg$$);
    main$$.appendChild(endDiv$$);
}

