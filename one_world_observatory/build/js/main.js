flatpickr(".select__date", {});


let menuSwitch = document.querySelectorAll('.menu__switch'),
    standardMenuItem = document.querySelectorAll('.js-Standard-menu-item'),
    priorityMenuItem = document.querySelectorAll('.js-Priority-menu-item');

for (let menuItem of menuSwitch) {
  menuItem.onclick = function choiseMenuItem(){
    for (i=0;i<4;i++){
      menuSwitch[i].classList.remove('js-choise');
    }
    menuItem.classList.add('js-choise');
    for (i=0;i<4;i++){
      standardMenuItem[i].classList.add('js-menu-none');
      priorityMenuItem[i].classList.add('js-menu-none');
      if (menuSwitch[i].classList.contains('js-choise')){
        standardMenuItem[i].classList.remove('js-menu-none');
        priorityMenuItem[i].classList.remove('js-menu-none');
      }
    }
  }
}

document.querySelector('.js-open-tickets').onclick = function openTickets(){
  document.querySelector('.js-ticket-options').classList.toggle('js-display-none');
}


let tabStandard = document.querySelector('.js-tab-standard'),
    tabPriority = document.querySelector('.js-tab-priority'),
    jsStandard = document.querySelectorAll('.js-Standard'),
    jsPriority = document.querySelectorAll('.js-Priority');


tabStandard.onclick = function tabSwitch(){
  amountTickets();
  if (tabStandard.classList.contains('js-non-active-tab')) {
    tabStandard.classList.remove('js-non-active-tab');
    tabPriority.classList.add('js-non-active-tab');
    for (i=0;i<6;i++){
      jsStandard[i].classList.remove('js-display-none');
      jsPriority[i].classList.add('js-display-none');
    }
  }
};

tabPriority.onclick = function tabSwitch(){
  amountTickets();
  if (tabPriority.classList.contains('js-non-active-tab')) {
    tabPriority.classList.remove('js-non-active-tab');
    tabStandard.classList.add('js-non-active-tab');
    for (i=0;i<6;i++){
      jsPriority[i].classList.remove('js-display-none');
      jsStandard[i].classList.add('js-display-none');
    }
  }
}

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

let tourOptions = document.querySelectorAll('.toor-option');
let tourSelect = document.querySelector('.js-tour-select');

tourSelect.onclick = function displaySwitch(){
  document.querySelector('.select__tour-options').classList.toggle('js-display-none');
}

function searchChoosenOption(){
  for (let option of tourOptions){
    option.onclick = function Choose(){
      document.querySelector('.js-tour-value').innerHTML = option.innerHTML;
      document.querySelector('.js-tour-value').style.color = '#000000';
    }
  }
}

searchChoosenOption();

let totalPrice;


document.querySelector('.js-btn').onclick = function total(){
  totalPrice = adult * 28 + senior * 26 + youth * 24;
  document.querySelector('.js-subtotal').innerHTML = 'Subtotal:';
  document.querySelector('.js-subtotal').innerHTML += ' $' + totalPrice;
  document.querySelector('.subtotal-result').innerHTML = 'Subtotal:';
  document.querySelector('.subtotal-result').innerHTML += ' $' + totalPrice;
  document.querySelector('.adult-result').innerHTML = 'Adult:';
  document.querySelector('.adult-result').innerHTML += ' ' + adult;
  document.querySelector('.senior-result').innerHTML = 'Senior:';
  document.querySelector('.senior-result').innerHTML += ' ' + senior;
  document.querySelector('.youth-result').innerHTML = 'Youth:';
  document.querySelector('.youth-result').innerHTML += ' ' + youth;
  document.querySelector('.child-result').innerHTML = 'Child:';
  document.querySelector('.child-result').innerHTML += ' ' + child;
  document.querySelector('.text-to-phone').classList.toggle('js-display-none');
}

document.querySelector('.text-to-phone__x').onclick = function clos(){
  document.querySelector('.text-to-phone').classList.toggle('js-display-none');
}
