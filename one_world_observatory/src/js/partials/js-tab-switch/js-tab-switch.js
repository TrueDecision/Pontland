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
