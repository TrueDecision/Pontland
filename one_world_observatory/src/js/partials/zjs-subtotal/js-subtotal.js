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
