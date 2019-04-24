// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}










$(Document).ready(function(){
    
    $("#preloader").fadeOut(1000,function(){
            $("body").css("overflow","auto");

    });
    
    $(".test").click(function(){
        
        $(".test2").slideToggle(1000);
    })

    
    
    $(".btn-info").click(function(){
        
    $(".anime").animate({left:"250px"},"fast",function(){

            $(".anime p").animate({fontSize:"70px"},1000);
    });

    });
    

    
    
    
    
    
    $("#scrolltop").click(function(){
        
        $("body").animate({scrollTop:0},"slow");
    });
    

$(window).scroll(function(){
    
    var wscroll = $(window).scrollTop();
    if (wscroll < 520)
        {
            $("#scrolltop").css("display","none");
        }
    else
        
            $("#scrolltop").css("display","block");
        
});
    
    
    $(".navbar-nav a").click(function(){
        
        $(".navbar").find("a.active").removeClass("active");
        $(this).addClass("active");
    })
    
    $(".workbtn button").click(function(){
        
        $(".workbtn").find("button.active1").removeClass("active1");
        $(this).addClass("active1");
        
    })
    
    
 });

var scrol = $("#about").offset().top;
$(window).scroll(function(){
    
     var navscrol = $(window).scrollTop();
    if(navscrol > scrol-100)
        {
            $(".navbar").css({"background-color":"#fff","padding":"10px 0px","transition":".6s","boxShadow":"0 4px 8px 0 rgba(0,0,0,.4)"});

        }
    else
        {
            $(".navbar").css({"background-color":"#fff","padding":"20px 0px"});

            
        }
    $("#wd").click(function(){
        
        $(".p1, .p2, .p3, .p4, .p6").show(500);
        $(".p5").hide(500);
    });
    $("#d").click(function(){
        $(".p2, .p3, .p5").show(500);
        $(".p1, .p4, .p6").hide(500);
    });
    $("#all").click(function(){
        
        $(".p1, .p2, .p3, .p4, .p5, .p6").show(500);

    });
    $("#gd").click(function(){
        $(".p1, .p3, .p4, .p6").show(500);
        $(".p2, .p5").hide(500);

    });
    $("#ph").click(function(){
        
        $(".p3, .p5").show(500);
        $(".p1, .p2, .p4, .p6").hide(500);
    })


    
})

new WOW().init();


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
    }
})

$(".count1").click(function(){

        {
            document.getElementsByClassName(".count1").innerHTML = "asd";
            
        }
});


var typed = new Typed('.test1', {
  strings: [" A Front-end Developer.", " PHP Developer.","UI/UX Designer."],
  typeSpeed:50,
  backSpeed:50,    
  loop:true
});






$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});






/*particle.js*/
particlesJS("particles-js", {
 "particles": {
   "number": {
     "value": 180,
     "density": {
       "enable": true,
       "value_area": 1200
     }
   },
   "color": {
     "value": "#ffffff"
   },
   "shape": {
     "type": "circle",
     "stroke": {
       "width": 0,
       "color": "#000000"
     },
     
   },
   "opacity": {
     "value": 0.2,
     "random": false,
     "anim": {
       "enable": false,
       "speed": 1,
       "opacity_min": 0.1,
       "sync": false
     }
   },
   "size": {
     "value": 3,
     "random": true,
     "anim": {
       "enable": false,
       "speed": 40,
       "size_min": 0.1,
       "sync": false
     }
   },
   "line_linked": {
     "enable": true,
     "distance": 150,
     "color": "#ffffff",
     "opacity": 0.4,
     "width": 1
   },
   "move": {
     "enable": true,
     "speed": 6,
     "direction": "none",
     "random": false,
     "straight": false,
     "out_mode": "out",
     "bounce": false,
     "attract": {
       "enable": false,
       "rotateX": 600,
       "rotateY": 1200
     }
   }
 },
 "interactivity": {
   "detect_on": "canvas",
   "events": {
     "onhover": {
       "enable": true,
       "mode": "grab"
     },
     "onclick": {
       "enable": true,
       "mode": "push"
     },
   },
   "modes": {
     "grab": {
       "distance": 140,
       "line_linked": {
         "opacity": 1
       }
     },
     "bubble": {
       "distance": 400,
       "size": 40,
       "duration": 2,
       "opacity": 8,
       "speed": 3
     },
     "repulse": {
       "distance": 200,
       "duration": 0.4
     },
     "push": {
       "particles_nb": 4
     },
     "remove": {
       "particles_nb": 2
     }
   }
 },
 "retina_detect": true
});


/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
 stats.begin();
 stats.end();
 if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
   count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
 }
 requestAnimationFrame(update);
};
requestAnimationFrame(update);
