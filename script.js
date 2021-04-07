const menuBtn = document.querySelector('.menu-btn');
const checkbox = document.querySelector('#toggler');
const content = document.querySelectorAll('.container .content div')

let menuIsOpen = false;

function OpenCloseMenu(){
  if(!menuIsOpen){
    menuBtn.classList.add('open');
    checkbox.setAttribute('checked', 'checked');
    menuIsOpen = true;
  } else {
    menuBtn.classList.remove('open');
    checkbox.removeAttribute('checked');
    menuIsOpen = false;
  }
}

function changeColor(color) {
  if(color === 'blue'){

    content.forEach(item => {
      item.style.backgroundColor = 'rgb(14, 43, 206)';

    });
  } if(color === 'red'){

    content.forEach(item => {
      item.style.backgroundColor = 'rgb(206, 14, 14)';

    });
  } if(color === 'yellow'){

    content.forEach(item => {
      item.style.backgroundColor = 'rgb(206, 203, 14)';

    });
  } if(color === 'green'){

    content.forEach(item => {
      item.style.backgroundColor = 'rgb(14, 206, 40)';
      
    });
  }

  menuIsOpen = true;
  OpenCloseMenu();
}