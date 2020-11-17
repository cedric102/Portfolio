

window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

function lightbox_open() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  window.scrollTo(0, 0);
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}
function myFunction(x) {
  x.classList.toggle("change");
}



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}



var showMenuSwitch1 = true
function showMenu1(a) {
  var y = document.getElementsByClassName("inHiddingLink1");
    console.log("in");
  for (i = 0; i < y.length; i++) {
    if(showMenuSwitch1 == true)
      y[i].style.display = "none";
    else
      y[i].style.display = "block";
  }
  showMenuSwitch1 ^= 1
  myFunction(a);
}

var showMenuSwitch2 = true
function showMenu2(a) {
  var y = document.getElementsByClassName("inHiddingLink2");
    console.log("in");
  for (i = 0; i < y.length; i++) {
    if(showMenuSwitch2 == true)
      y[i].style.display = "none";
    else
      y[i].style.display = "block";
  }
  showMenuSwitch2 ^= 1
  myFunction(a);
}

/*
    $(window).resize(function(e) {
        resizeFn();
    });
$(window).resize(resizeFn());
$(document).ready(function(){
    $(window).trigger('resize'); // on load, init the lastBoundry
});
*/

