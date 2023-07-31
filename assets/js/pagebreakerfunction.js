 const main = document.getElementById('main');
 const lis = main.getElementsByTagName('li');
 const sections = document.getElementsByTagName("section");
 const back = document.getElementById('back');
 const next = document.getElementById('next');
 
 
 
 [...lis].forEach(li => {
     li.addEventListener('click', function() {
         gotoElement([...lis].indexOf(this));
     });
 });
 
 back.addEventListener('click', function() {
     let currents = document.getElementsByClassName("show-now");
     let index = [...sections].indexOf(currents[0]);
     gotoElement(index-1);
 });
 
 next.addEventListener('click', function() {
     let currents = document.getElementsByClassName("show-now");
     let index = [...sections].indexOf(currents[0]);
     gotoElement(index+1);
 });
 
 
 
 function gotoElement(i) {
     let currents = document.getElementsByClassName("show-now");
     currents[0]?.classList.remove('show-now');
     sections[i].classList.add('show-now');
     sections[i].scrollIntoView();
     let activeLis = main.getElementsByClassName('myactive');
     activeLis[0]?.classList.remove('myactive');
     lis[i].classList.add('myactive');
     switch (i) {
      case 0:
          back.style.display = 'none';
          next.style.display = 'inline';
          break;
      case sections.length-1:
          next.style.display = 'none';
          back.style.display = 'inline';
          break;
      default:
          back.style.display = 'inline';
          next.style.display = 'inline';

  }
 }
 
 //adding 'myactive' class to 1st item on list
 gotoElement(0)
