
function showExtraText(n) {
  var x = document.getElementsByClassName("extraTextDiv");

  if( x[n].style.display == "block" )
  	x[n].style.display = "none";
  else
  	x[n].style.display = "block";

}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  n = n % 3
  var x = document.getElementsByClassName("mySlides");
  var Tabs = document.getElementsByClassName("fixedRightTabs");
  var dots = document.getElementsByClassName("demo");
  var ch = document.getElementsByClassName("choicing");
//  var ch2 = document.getElementsByClassName("choicing2");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < Tabs.length; i++) {
    Tabs[i].style.backgroundColor = "blue";
  }
  for (i = 0; i < dots.length; i++) {
//    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
//    ch[i].style.backgroundColor = "white";
    ch[i].style.opacity = 0.5;
//    ch2[i].style.opacity = 0.5;
  }
  Tabs[slideIndex-1].style.backgroundColor = "green";
  x[slideIndex-1].style.display = "block";
//  dots[slideIndex-1].className += " w3-opacity-off";
//  ch[slideIndex-1].style.backgroundColor = "green";
  ch[slideIndex-1].style.opacity = 1;
  ch[slideIndex+3-1].style.opacity = 1;
//  ch2[slideIndex-1].style.opacity = 1;
/*
  if( n == 1 ) {
     document.getElementByClassName("Menu1").style.backgroundColor = "blue";
     x.style.backgroundColor = "blue";
  } else {
     document.getElementByClassName("Menu1").style.backgroundColor = "green";
    
  }
*/
}

function currentDiv2(n) {
  showDivs2(slideIndex = n);
}

function showDivs2(n) {
  var i;
  var sel = document.getElementsByClassName("hidding");
  for (i = 0; i < sel.length; i++) {
    sel[i].style.display = "none";
  }
  sel[n-1].style.display = 'block' ;
/*
    var video = document.getElementsByTagName('video')[0];
    var sources = video.getElementsByTagName('source');
    sources[4].src = sources[slideIndex-1].src;
    video.load();
*/
}

function currentDiv3(n) {
  showDivs3(slideIndex = n);
}

function showDivs3(n) {
  var i;
  var sel = document.getElementsByClassName("imageHidding");
  for (i = 0; i < sel.length; i++) {
    sel[i].style.display = "none";
  }
  sel[n-1].style.display = 'block' ;
}


  var x = document.getElementById("headerVid");

  window.onload = function() {
    x.autoplay = true;
    x.load(); 
  }
  var resizeVar1 = 0;
  var resizeVar2 = 0;
  var myVar = setInterval( onResize, 1000 );
  onResize();
  window.addEventListener('resize', onResize);
  function onResize() {
    var y = document.getElementsByClassName("inHiddingLink1");
 //   console.log("in1");
    if (window.innerWidth > 900) {
      resizeVar1 = 0
      for (i = 0; i < y.length; i++) {
        y[i].style.display = "inline-block";
      }
    } else {
      if( resizeVar1 == 0 ) {
        resizeVar1 = 1
        for (i = 0; i < y.length; i++) {
          y[i].style.display = "none";
        }
      }
    }

    y = document.getElementsByClassName("inHiddingLink2");
//    console.log("in1");
    if (window.innerWidth > 900) {
      resizeVar2 = 0
      for (i = 0; i < y.length; i++) {
        y[i].style.display = "inline-block";
      }
    } else {
      if( resizeVar2 == 0 ) {
        resizeVar2 = 1
        for (i = 0; i < y.length; i++) {
          y[i].style.display = "none";
        }
      }
    }

  }

/*
$('#portfolio').waypoint(function() {
   console.log("Waypoints");
});
*/

  var myVar = setInterval( onSetPoint , 2 );
  var animate = false
  var stop = false
  var i = 0
  var j = 0
  function onSetPoint() {
    if( animate == true && stop == false ) {

      i = i + 0.005
      j = j + 1
      if ( j > 249 )
        stop = true

      document.getElementById('webSlider').style.opacity = i;
      document.getElementById('webSlider').style.left = -1000+j*4+"px";

      document.getElementById('dotSlider1').style.opacity = i;
      document.getElementById('appSlider').style.opacity = i;
      document.getElementById('appSlider').style.transform = "rotate("+j*360/250+"deg)";
      document.getElementById('dotSlider2').style.opacity = i;

      document.getElementById('robotSlider').style.opacity = i;
      document.getElementById('robotSlider').style.left = 1000-j*4+"px";
      
    }
  }

  var myVar2 = setInterval( onSetPoint2 , 2 );
  var animate2 = false
  var stop2 = false
  var i2 = 0
  var j2 = 0
  function onSetPoint2() {
    if( animate2 == true && stop2 == false ) {

      i2 = i2 + 0.01
      j2 = j2 + 1
      if ( j2 > 125 )
        stop2 = true

      yLocal = document.getElementsByClassName("sliderClass");
      for( iLocal = 0 ; iLocal < yLocal.length ; iLocal++ ) {
        yLocal[iLocal].style.opacity = i2;
        if ( j2 > 125 )
          yLocal[iLocal].style.left = "0px";
        else {
          if( iLocal % 2 == 0 )
            yLocal[iLocal].style.left = -1000+j2*8+"px";
          else
            yLocal[iLocal].style.left = 1000-j2*8+"px";
        }
      }
      
    }
  }
/*
jQuery('#portfolio').one('inview', function (event, visible) {
  if (visible == true) {
    console.log("Waypoints");
  } else {
    console.log("No Waypoints");
  }
});
*/

/*
$('#portfolio').on('inview', function (event, visible) {
});
*/
var showTab = false;
$(window).scroll(function() {
/*
   var slideTop = $('.mySlides').offset().top,
       slideBottom = $('.slideChoice2').offset().top;
*/
   var hT = $('#portfolio').offset().top,
       hH = $('#portfolio').outerHeight(),
       wH = $(window).height()
       wW = $(window).width(),
       wS = $(this).scrollTop();
//   window.scrollTo(0, $('#portfolio').offset().top);
   document.getElementById('test').style.position = "absolute";
   document.getElementById('test').style.top = wS+"px";
   if( wS > 50 ) {
     animate = true
   }
   if( wS > 600 ) {
     animate2 = true
   }
//   $('#test').style.top = wS+"px";
//   $('#test').style.top = wS;
//   $('#test').offset().top = wS+"px";
//   $('#test').offset().top = wS;
//   console.log(wS);

// document.getElementById("headerTitle").style.position = "relative";
document.getElementById("headerTitle1").style.left = wS+"px";
document.getElementById("headerTitle2").style.left = -wS+"px";

/*
for(var els = document.getElementsByTagName ('section'), i = els.length; i--;) {
//    els[i].style.position = "relative";
    if( els[i].id !== "portfolio" )
      els[i].style.left = "100px";
} 
*/

// if( hH > wH + 250 ) {

   if (wS > hT + 200 && wS < hT + hH - 600 ){ // wS > (hT+hH-wH)
       document.getElementById("fixedRightTab").style.display="block";
//       showTabFunction();
   } else {
       document.getElementById("fixedRightTab").style.display="none";
   }

   // SlideMotionDiv
   var slideTop1 = $('#about').offset(); // .splice(0 , -2);
//   console.log(slideTop1)
// if( hH > wH + 250 ) {

   if ( wS > slideTop1 + 300 ){ // wS > (hT+hH-wH)
       document.getElementByClassName("text1").style.left="500px";
   }
/*
   if (wS > hT+ 100 && wSb < ( hT + 100 + hH ) ){ // wS > (hT+hH-wH)
       console.log('H1 on the view!');
       document.getElementById("fixedRightTab").style.display="block";
       showTabFunction();
   } else {
       document.getElementById("fixedRightTab").style.display="none";
       console.log('H1 out of the view!');
   }
*/
/*
} else {
   document.getElementById("fixedRightTab").style.display="none";
}
*/
});


$('#portfolio').scroll( function() {
  alert('On Section;');
// console.log("in'")
});
function myFunction(x) {
  x.classList.toggle("change");
}

/*
$('.imageDisplay').hover(function(){
  $( this ).style.color = white;
  console.log("BLA");
  });
*/


/*
  $('.imageDisplay').mouseover(function(){
    console.log("BLA");
 //   $(this).css("color", "red");
    }, function(){
 //   $(this).css("color", "black");
  });
*/

$(document).ready(function(){
  $('.shortSubText').hover(function(){
    $(this).children( "div" ).children( "a" ).children( "div" ).css("opacity", "1");
  }, function(){
    $(this).children( "div" ).children( "a" ).children( "div" ).css("opacity", "0");
  });

  $('.imageDisplay').hover(function(){
    console.log("BLA");
    $(this).css("opacity", "1");
    $(this).children( "div" ).css("background-color", "rgba(255 , 255 , 255 , 0.7)");
    $(this).children( "div" ).css("height", "210px");
    $(this).children( "div" ).children().css("color", "rgba(0 , 0 , 0 , 0.3)");
  }, function(){
    $(this).css("opacity", "0.5");
    $(this).children( "div" ).css("background-color", "rgba(255 , 255 , 255 , 0)");
    $(this).children( "div" ).css("height", "-20px");
    $(this).children( "div" ).children().css("color", "rgba(0 , 0 , 0 , 1)");
  });
});
