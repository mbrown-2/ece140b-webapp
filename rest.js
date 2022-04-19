function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}


// Assignment 2 pages
function productPage_load() {
  alert('hey there');
  let pageID='/product_page/';

  print("made it here");

  fetch(pageID)
    .then(function(response) {
      print("working");
    }
  )
}

function mainPage_load() {
  fetch('/')
    .then(function(response) {
      print("working");
    }
  )
}