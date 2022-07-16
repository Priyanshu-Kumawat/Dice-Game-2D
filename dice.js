function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function dice_game()
{
  let r1=getRandomIntInclusive(1, 6);
  let r2=getRandomIntInclusive(1, 6);

  
  document.querySelector(".img1").setAttribute("src","images\\dice"+ r1 +".png" );
  document.querySelector(".img2").setAttribute("src","images\\dice"+ r2 +".png" );
  
  if (r1>r2) {
    
    document.querySelector("h1").innerHTML="🏁Player 1 Wins!";
  }
  else if (r1<r2) {
    document.querySelector("h1").innerHTML="Player 2 Wins!🏁";
  }
  else
  {
    document.querySelector("h1").innerHTML="Tie";
  }
}

dice_game();


