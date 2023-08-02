function changeIcon(element) {
    element.innerHTML = `<i class="material-icons">content_copy</i>`;
  }
  
  const copyContainer = document.getElementsByClassName("code-snippet");
  for (var i = 0; i < copyContainer.length; i++) {
      copyBtn = copyContainer[i].getElementsByClassName("copy-btn");
      copyBtn[0].addEventListener("click", function() {
      parent = this.parentNode;
      let copyText = parent.querySelector("pre");
      navigator.clipboard.writeText(copyText.innerText).then(function() {
        copyBtnActive = parent.getElementsByClassName("copy-btn")[0];
        copyBtnActive.innerHTML = `<i class="material-icons">done_all</i>`;
        setTimeout(changeIcon, 500, copyBtnActive);
      }, function(err) {
        console.error("Could not copy text: ", err);
      });
    });
  }
  
   