function amountTickets(){

let varietyTicketAmount = document.querySelectorAll('.js-price'), i=28, j=37;

if (document.querySelector('.js-tab-standard').classList.contains('js-non-active-tab')){
  for (let variety of varietyTicketAmount){
      variety.innerHTML = '';
      variety.innerHTML += ' $' + i;
      i = i - 2;
    }
} else {
  for (let variety of varietyTicketAmount){
    variety.innerHTML = '';
    variety.innerHTML += ' $' + j;
    j = j - 2;
  }
}
}
