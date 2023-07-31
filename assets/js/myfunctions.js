/*
const navItems = document.getElementsByTagName("li");
for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function() {
  modifyElement(this)
  });
}


// Create a new Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          // The element is in view
          console.log("Element is in view! ID:", entry.target.id);
          var element = document.getElementById(entry.target.id);
          modifyElement(element)
      }
  });
});


const sectionItems = document.getElementsByTagName("section");
// Start observing each target element
for (var i = 0; i < sectionItems.length; i++) {
  observer.observe(sectionItems[i]);
}




function modifyElement(element) {
let currents = document.getElementsByClassName("myactive");
  let current = currents[0];
  current?.classList.remove("myactive");
  element.classList.add("myactive");
}



*/


 
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
