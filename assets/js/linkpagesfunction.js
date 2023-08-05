const nav = document.getElementsByClassName('nav__items')[0];
  const lis = nav.getElementsByTagName('li');
  const back = document.getElementById('back');
  const next = document.getElementById('next');
  
  
  
  /*[...lis].forEach(li => {
      li.addEventListener('click', function() {
          gotoElement([...lis].indexOf(this));
      });
  });*/
  
  back.addEventListener('click', function() {
      let currents = document.getElementsByClassName("myactive");
      let index = [...lis].indexOf(currents[0]);
      gotoElement(index-1);
  });
  
  next.addEventListener('click', function() {
      let currents = document.getElementsByClassName("myactive");
      let index = [...lis].indexOf(currents[0]);
      gotoElement(index+1);
  });
  
  
  
  function gotoElement(i) {
      //let activeLis = main.getElementsByClassName('myactive');
      //activeLis[0]?.classList.remove('myactive');
      //lis[i].classList.add('myactive');
      lis[i].children[0].click()
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
  

function getIndexOfUrl() {
  if (location.hash == "") {
    gotoElement(0)
  } else {
  let index = [...sections].indexOf(document.getElementById(location.hash.replace("#","")));
  gotoElement(index);
  }
}

  //listening for hash changes
  //window.addEventListener('hashchange', function() {
  //  getIndexOfUrl()
  //});

  //refreshing on loading
  //getIndexOfUrl()