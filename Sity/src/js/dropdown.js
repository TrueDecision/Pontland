btn.onclick = function(){
 menu.classList.toggle('open');
}

map_btn.onclick = function(){
  map.classList.toggle('open');
}

map_btn1.onclick = function(){
  map.classList.toggle('open');
}

map_btn2.onclick = function(){
  filers_form.classList.toggle('open')
}


dropdown1.onclick = function(){
  dd_cell_1.classList.toggle('open');
}

dropdown2.onclick = function(){
  dd_cell_2.classList.toggle('open');
}

dropdown3.onclick = function(){
  dd_cell_3.classList.toggle('open');
}

filters_btn.onclick = function(){
  filers_form.classList.toggle('open')
}

filters_btn_exit.onclick = function(){
  filers_form.classList.toggle('open')
}

reset.onclick = function(){
    let form1=document.forms['dd_cell_1'];
    for(let i=0;i<form1.elements.length;i++) {
        if(form1.elements[i].checked) {
            form1.elements[i].checked=false;
        }
      }
        let form2=document.forms['dd_cell_2'];
        for(let i=0;i<form2.elements.length;i++) {
            if(form2.elements[i].checked) {
                form2.elements[i].checked=false;
            }
          }
            let form3=document.forms['dd_cell_3'];
            for(let i=0;i<form3.elements.length;i++) {
                if(form3.elements[i].checked) {
                    form3.elements[i].checked=false;
                }
  }
}
