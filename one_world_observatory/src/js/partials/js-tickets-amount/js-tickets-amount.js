let adult = 0, senior = 0, youth = 0, child = 0, allTickets = 0;

document.querySelector('.js-plus-adult').onclick = function plusTicket(){
  adult = adult + 1;
  allTickets = allTickets + 1;
  if (allTickets > 10){
    allTickets -= 1;
    adult -= 1;
    document.querySelector('.js-plus-adult').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-plus-senior').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-plus-youth').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-plus-child').classList.add('js-plus-minus-disabled');
  }
  if (allTickets > 0){
    document.querySelector('.js-minus-adult').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-minus-senior').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-minus-youth').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-minus-child').classList.remove('js-plus-minus-disabled');
  }
  document.querySelector('.js-tickets-adult').innerHTML = '';
  document.querySelector('.js-tickets-adult').innerHTML += adult;
  console.log(allTickets);
}

document.querySelector('.js-minus-adult').onclick = function minusTicket(){
  if (allTickets<10){
    document.querySelector('.js-plus-adult').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-plus-senior').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-plus-youth').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-plus-child').classList.remove('js-plus-minus-disabled');
  }
  adult = adult - 1;
  allTickets = allTickets - 1;
  if (adult < 0){
    adult = 0;
    allTickets = allTickets + 1;
    document.querySelector('.js-minus-adult').classList.add('js-plus-minus-disabled');
  }
  if (allTickets < 0){
    allTickets = 0;
    document.querySelector('.js-minus-adult').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-minus-senior').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-minus-youth').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-minus-child').classList.add('js-plus-minus-disabled');
  }
  document.querySelector('.js-tickets-adult').innerHTML = '';
  document.querySelector('.js-tickets-adult').innerHTML += adult;
  console.log(allTickets);
}

document.querySelector('.js-plus-senior').onclick = function plusTicket(){
  senior = senior + 1;
  allTickets = allTickets + 1;
  if (allTickets > 10){
    allTickets -= 1;
    senior -= 1;
    document.querySelector('.js-plus-adult').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-plus-senior').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-plus-youth').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-plus-child').classList.add('js-plus-minus-disabled');
  }
  if (allTickets > 0){
    document.querySelector('.js-minus-adult').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-minus-senior').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-minus-youth').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-minus-child').classList.remove('js-plus-minus-disabled');
  }
  document.querySelector('.js-tickets-senior').innerHTML = '';
  document.querySelector('.js-tickets-senior').innerHTML += senior;
  console.log(allTickets);
}

document.querySelector('.js-minus-senior').onclick = function minusTicket(){
  if (allTickets<10){
    document.querySelector('.js-plus-adult').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-plus-senior').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-plus-youth').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-plus-child').classList.remove('js-plus-minus-disabled');
  }
  senior = senior - 1;
  allTickets = allTickets - 1;
  if (senior < 0){
    senior = 0;
    allTickets = allTickets + 1;
    document.querySelector('.js-minus-senior').classList.add('js-plus-minus-disabled');
  }
  if (allTickets < 0){
    allTickets = 0;
    document.querySelector('.js-minus-adult').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-minus-senior').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-minus-youth').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-minus-child').classList.add('js-plus-minus-disabled');
  }
  document.querySelector('.js-tickets-senior').innerHTML = '';
  document.querySelector('.js-tickets-senior').innerHTML += senior;
  console.log(allTickets);
}

document.querySelector('.js-plus-youth').onclick = function plusTicket(){
  youth = youth + 1;
  allTickets = allTickets + 1;
  if (allTickets > 10){
    allTickets -= 1;
    youth -= 1;
    document.querySelector('.js-plus-adult').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-plus-senior').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-plus-youth').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-plus-child').classList.add('js-plus-minus-disabled');
  }
  if (allTickets > 0){
    document.querySelector('.js-minus-adult').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-minus-senior').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-minus-youth').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-minus-child').classList.remove('js-plus-minus-disabled');
  }
  document.querySelector('.js-tickets-youth').innerHTML = '';
  document.querySelector('.js-tickets-youth').innerHTML += youth;
  console.log(allTickets);
}

document.querySelector('.js-minus-youth').onclick = function minusTicket(){
  if (allTickets<10){
    document.querySelector('.js-plus-adult').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-plus-senior').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-plus-youth').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-plus-child').classList.remove('js-plus-minus-disabled');
  }
  youth = youth - 1;
  allTickets = allTickets - 1;
  if (youth < 0){
    youth = 0;
    allTickets = allTickets + 1;
    document.querySelector('.js-minus-youth').classList.add('js-plus-minus-disabled');
  }
  if (allTickets < 0){
    allTickets = 0;
    document.querySelector('.js-minus-adult').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-minus-senior').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-minus-youth').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-minus-child').classList.add('js-plus-minus-disabled');
  }
  document.querySelector('.js-tickets-youth').innerHTML = '';
  document.querySelector('.js-tickets-youth').innerHTML += youth;
  console.log(allTickets);
}

document.querySelector('.js-plus-child').onclick = function plusTicket(){
  child = child + 1;
  allTickets = allTickets + 1;
  if (allTickets > 10){
    allTickets -= 1;
    child -= 1;
    document.querySelector('.js-plus-adult').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-plus-senior').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-plus-youth').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-plus-child').classList.add('js-plus-minus-disabled');
  }
  if (allTickets > 0){
    document.querySelector('.js-minus-adult').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-minus-senior').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-minus-youth').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-minus-child').classList.remove('js-plus-minus-disabled');
  }
  document.querySelector('.js-tickets-child').innerHTML = '';
  document.querySelector('.js-tickets-child').innerHTML += child;
  console.log(allTickets);
}

document.querySelector('.js-minus-child').onclick = function minusTicket(){
  if (allTickets<10){
    document.querySelector('.js-plus-adult').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-plus-senior').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-plus-youth').classList.remove('js-plus-minus-disabled');
    document.querySelector('.js-plus-child').classList.remove('js-plus-minus-disabled');
  }
  child = child - 1;
  allTickets = allTickets - 1;
  if (child < 0){
    child = 0;
    allTickets = allTickets + 1;
    document.querySelector('.js-minus-child').classList.add('js-plus-minus-disabled');
  }
  if (allTickets < 0){
    allTickets = 0;
    document.querySelector('.js-minus-adult').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-minus-senior').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-minus-youth').classList.add('js-plus-minus-disabled');
    document.querySelector('.js-minus-child').classList.add('js-plus-minus-disabled');
  }
  document.querySelector('.js-tickets-child').innerHTML = '';
  document.querySelector('.js-tickets-child').innerHTML += child;
  console.log(allTickets);
}
