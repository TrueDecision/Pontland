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
