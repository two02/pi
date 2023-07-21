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