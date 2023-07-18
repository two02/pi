// Add active class to the current button (highlight it)
const navItems = document.getElementsByTagName("li");
for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function() {
  selectElement(this)
  });
}


// Create a new Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          // The element is in view
          console.log("Element is in view! ID:", entry.target.id);
          var element = document.getElementById(entry.target.id);
          selectElement(element)
      }
  });
});


const sectionItems = document.getElementsByTagName("section");
// Start observing each target element
for (var i = 0; i < sectionItems.length; i++) {
  observer.observe(sectionItems[i]);
}


function selectElement(element) {
let currents = document.getElementsByClassName("myactive");
  let current = currents[0]
  current?.classList.remove("myactive");
  element.classList.add("myactive");
}

// modify above function to display required section of a page when  next button for navigation link clicked  //
