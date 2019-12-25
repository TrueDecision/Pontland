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
