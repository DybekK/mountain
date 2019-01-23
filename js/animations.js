 // animacja menu

 var btnOpen = document.getElementById("hamburger");
 var sectionMenu = document.getElementById("navbar-section");
 var btnClose = document.getElementById("menu");
 var menuOptions = document.getElementById("options").querySelectorAll("div");
 var body = document.body;
 var whiteHamburger = document.getElementsByClassName("white-hamburger");
 var blackHamburger = document.getElementsByClassName("black-hamburger");
 var hamburger = btnOpen.querySelectorAll("div");

 var btn = document.getElementsByClassName("button-show-more");
 var hero = document.getElementById("hero");
 var html = document.getElementsByTagName("HTML")[0];
 var overflow = document.getElementById("overflow");

 //zmienne hero 

 var rightPanel = document.getElementById("right-panel");
 var boxes = document.getElementById("boxes-animate");
 var heroTextH1 = document.getElementById("hero-text").querySelector("h1");
 var heroTextH2 = document.getElementById("hero-text").querySelector("h2");
 var hrText = document.getElementById("hr-text");
 // var respoBoxesH2 = document.getElementById("responsive-boxes-animate").querySelectorAll("h2");
 // var respoBoxesP = document.getElementById("responsive-boxes-animate").querySelectorAll("p");
 //var aBox = document.getElementById("responsive-boxes-animate").querySelector("a");


 // Zmienne about us
 var about = document.getElementById("about-us");
 var aboutH1 = document.getElementById("text-column").querySelectorAll("h1");
 var aboutH2 = document.getElementById("text-column").querySelectorAll("h2");
 var aboutP = document.getElementById("text-column").querySelectorAll("p");
 var aboutBtn = document.getElementById("text-column").getElementsByClassName("button-click");
 var sliderStart = document.getElementById("slider-start");
 // Zmienne job

 var jobOffersBlock = document.getElementById("job-offers-animation");
 var jobOffers = document.getElementById("job-offers");
 var jobOffersH1 = document.getElementById("job-offers").querySelectorAll("h1");
 var jobOffersH2 = document.getElementById("job-offers").querySelectorAll("h2");
 var jobOffersBtn = document.getElementById("job-offers").getElementsByClassName("button-offers");
 var jobOffersHover = document.getElementsByClassName("com-block");

 //zmienne loading screen
 var loadingScreen = document.getElementById("loading");
 var loadingCube = document.getElementsByClassName("spinner");
 var socialMedia = document.getElementsByClassName("social-media");

 //zmienne presentation
 var image = document.getElementsByClassName("image-in");
 var textSlide = document.getElementsByClassName("animation-text-slide");
 var presentSpan = document.querySelectorAll("span");
 var presentation = document.getElementById("presentation");
 var presentH2 = document.getElementById("presentation").querySelector("h2");
 var presentH3 = document.getElementById("presentation").querySelectorAll("h3");
 var sliderAnimationStart = document.getElementById("what-thinks");
 var slideCounter = document.getElementById("slide-counter");
 var slideText = document.getElementById("what-thinks-animation");
 var slideButtons = document.getElementsByClassName("slider-buttons")[0];






 btn[0].addEventListener("click", function () {
     setTimeout(function () {
         rightPanel.style.opacity = 0;
         boxes.style.opacity = 0;
         socialMedia[0].style.opacity = 0;
     }, 1000);


     setTimeout(function () {
         heroTextH1.style.opacity = 0;

     }, 1000);

     setTimeout(function () {
         heroTextH2.style.opacity = 0;

     }, 1000);

     setTimeout(function () {

         hrText.style.opacity = 0;

         btn[0].style.opacity = 0;
     }, 1000);

     setTimeout(function () {

         hero.style.height = 0;

     }, 1800);


     setTimeout(function () {
         overflow.style.overflowY = "visible";
         html.style.overflowY = "visible";


     }, 2000);



 });


 btnOpen.addEventListener("click", function () {

     body.style.overflowY = "hidden";
     btnOpen.style.opacity = 0;

     if (btnClose.querySelector("div").style.opacity == 0) {
         setTimeout(function () {

             btnClose.querySelectorAll("div")[0].style.transform = "rotate(45deg)";
             btnClose.querySelectorAll("div")[0].style.opacity = 1;
             btnClose.querySelectorAll("div")[1].style.transform = "rotate(-45deg)";
             btnClose.querySelectorAll("div")[1].style.opacity = 1;

         }, 500);
     }


     sectionMenu.style.display = "flex";


     setTimeout(function () {
         sectionMenu.style.width = "100%";
     }, 80);

     setTimeout(function () {
         sectionMenu.style.opacity = 1;
     }, 50);

     for (var i = 0; i < 5; i++) {

         if (i == 0) {
             setTimeout(function () {
                 menuOptions[0].style.opacity = 1;
                 menuOptions[0].style.transform = "translateY(0px)";
             }, 1150);
         } else if (i == 1) {

             setTimeout(function () {
                 menuOptions[1].style.opacity = 1;
                 menuOptions[1].style.transform = "translateY(0px)";
             }, 1100);
         } else if (i == 2) {
             setTimeout(function () {
                 menuOptions[2].style.opacity = 1;
                 menuOptions[2].style.transform = "translateY(0px)";
             }, 1050);
         } else if (i == 3) {
             setTimeout(function () {
                 menuOptions[3].style.opacity = 1;
                 menuOptions[3].style.transform = "translateY(0px)";
             }, 1000);

         } else if (i == 4) {
             setTimeout(function () {
                 menuOptions[4].style.opacity = 1;
                 menuOptions[4].style.transform = "translateY(0px)";
             }, 950);

         }
     }







 });

 btnClose.addEventListener("click", function () {


     setTimeout(function () {


         for (var i = 0; i < 2; i++) {
             btnClose.querySelectorAll("div")[i].style.transform = "rotate(0deg)";
             btnClose.querySelectorAll("div")[i].style.opacity = 0;
         }


         btnClose.style.transform = "rotate(0deg)";

     }, 100);

     for (var i = 0; i < 5; i++) {

         if (i == 0) {
             setTimeout(function () {
                 menuOptions[0].style.opacity = 0;
                 menuOptions[0].style.transform = "translateY(100px)";
             }, 800);
         } else if (i == 1) {

             setTimeout(function () {
                 menuOptions[1].style.opacity = 0;
                 menuOptions[1].style.transform = "translateY(100px)";
             }, 850);
         } else if (i == 2) {
             setTimeout(function () {
                 menuOptions[2].style.opacity = 0;
                 menuOptions[2].style.transform = "translateY(100px)";
             }, 900);
         } else if (i == 3) {
             setTimeout(function () {
                 menuOptions[3].style.opacity = 0;
                 menuOptions[3].style.transform = "translateY(100px)";
             }, 950);

         } else if (i == 4) {
             setTimeout(function () {
                 menuOptions[4].style.opacity = 0;
                 menuOptions[4].style.transform = "translateY(100px)";
             }, 1000);

         }

     }


     setTimeout(function () {
         sectionMenu.style.display = "none";
         body.style.overflowY = "visible";

         btnOpen.style.opacity = 1;

     }, 1700);


     setTimeout(function () {
         sectionMenu.style.width = "0%";

     }, 1400);

     setTimeout(function () {
         sectionMenu.style.opacity = 0;
         btnOpen.style.opacity = 1;
     }, 1500);
 });








 // animacje tekstu i elementow na stronie

 document.addEventListener("DOMContentLoaded", function () {



     // Tutaj sa wszystkie animacje scrollowania

     setInterval(function () {

         var fullHeight = window.pageYOffset + window.innerHeight;

         //HAMBURGER







         // RESPONSYWNE 
         /*
                  if (fullHeight >= respoBoxesH2[0].offsetTop) {
                      setTimeout(function () {
                          respoBoxesH2[0].style.transform = "translateY(0px)";
                          respoBoxesH2[0].style.opacity = 1;
                      }, 400);



                      setTimeout(function () {
                          respoBoxesP[0].style.transform = "translateY(0px)";
                          respoBoxesP[0].style.opacity = 1;
                      }, 600);
                  }

                  if (fullHeight >= respoBoxesH2[1].offsetTop) {
                      setTimeout(function () {
                          respoBoxesH2[1].style.transform = "translateY(0px)";
                          respoBoxesH2[1].style.opacity = 1;
                      }, 400);



                      setTimeout(function () {
                          respoBoxesP[1].style.transform = "translateY(0px)";
                          respoBoxesP[1].style.opacity = 1;
                      }, 600);
                  }

                  if (fullHeight >= respoBoxesH2[2].offsetTop) {
                      setTimeout(function () {
                          respoBoxesH2[2].style.transform = "translateY(0px)";
                          respoBoxesH2[2].style.opacity = 1;
                      }, 400);



                      setTimeout(function () {
                          respoBoxesP[2].style.transform = "translateY(0px)";
                          respoBoxesP[2].style.opacity = 1;
                          aBox.style.transform = "translateY(0px)";
                          aBox.style.opacity = 1;
                      }, 600);
                  }
         */
         // PRESENTATION


         if (fullHeight >= presentation.offsetTop) {
             setTimeout(function () {
                 image[0].style.width = "0%";
                 textSlide[0].style.transform = "translate(100%)";


             }, 500);

             setTimeout(function () {
                 presentSpan[0].style.opacity = 1;
                 presentSpan[1].style.opacity = 1;
                 presentSpan[2].style.opacity = 1;

             }, 1100);

             setTimeout(function () {

                 textSlide[1].style.transform = "translate(100%)";
                 textSlide[2].style.transform = "translate(100%)";
                 textSlide[3].style.transform = "translate(100%)";

             }, 1600);


             setTimeout(function () {
                 presentH3[0].style.opacity = 1;
                 presentH3[1].style.opacity = 1;


             }, 2000);


         }



         // SLIDER SCROLL 

         if (fullHeight >= sliderAnimationStart.offsetTop) {
             setTimeout(function () {
                 slideCounter.style.opacity = 1;
                 slideCounter.style.transform = "translate(0px)";
             }, 500);

             setTimeout(function () {
                 slideText.style.opacity = 1;
                 slideText.style.transform = "translate(0px)";
             }, 900);

             setTimeout(function () {
                 slideButtons.style.opacity = 1;
                 slideButtons.style.transform = "translate(0px)";
             }, 1300);








         }





         // ABOUT


         if (fullHeight >= about.offsetTop) {

             setTimeout(function () {
                 backgroundMask.style.width = "44%";
             }, 1100);

         }


         if (window.pageYOffset >= sliderStart.offsetTop) {
             document.getElementsByClassName("animation-gallery-scroll")[0].style.top = 50 + "px";
             document.getElementsByClassName("transition-box")[0].style.opacity = 1;
         } else {
             document.getElementsByClassName("transition-box")[0].style.opacity = 0;
         }

         if (window.pageYOffset >= aboutP[3].offsetTop) {
             document.getElementsByClassName("transition-box")[0].style.opacity = 0;
         }


         if (fullHeight >= aboutH1[0].offsetTop) {
             setTimeout(function () {
                 aboutH1[0].style.transform = "translateY(0px)";
                 aboutH1[0].style.opacity = 1;

             }, 800);

             setTimeout(function () {
                 aboutH2[0].style.transform = "translateY(0px)";
                 aboutH2[0].style.opacity = 1;
             }, 900);

             setTimeout(function () {
                 aboutP[0].style.transform = "translateY(0px)";
                 aboutP[0].style.opacity = 1;
                 aboutBtn[0].style.transform = "translateY(0px)";
                 aboutBtn[0].style.opacity = 1;
             }, 1000);
         }

         if (fullHeight >= aboutH1[1].offsetTop) {
             setTimeout(function () {
                 aboutH1[1].style.transform = "translateY(0px)";
                 aboutH1[1].style.opacity = 1;
             }, 800);

             setTimeout(function () {
                 aboutH2[1].style.transform = "translateY(0px)";
                 aboutH2[1].style.opacity = 1;
             }, 900);

             setTimeout(function () {
                 aboutP[1].style.transform = "translateY(0px)";
                 aboutP[1].style.opacity = 1;
                 aboutBtn[1].style.transform = "translateY(0px)";
                 aboutBtn[1].style.opacity = 1;
             }, 1000);
         }

         if (fullHeight >= aboutH1[2].offsetTop) {
             setTimeout(function () {
                 aboutH1[2].style.transform = "translateY(0px)";
                 aboutH1[2].style.opacity = 1;
             }, 800);

             setTimeout(function () {
                 aboutH2[2].style.transform = "translateY(0px)";
                 aboutH2[2].style.opacity = 1;
             }, 900);

             setTimeout(function () {
                 aboutP[2].style.transform = "translateY(0px)";
                 aboutP[2].style.opacity = 1;
                 aboutBtn[2].style.transform = "translateY(0px)";
                 aboutBtn[2].style.opacity = 1;
             }, 1000);
         }
         if (fullHeight >= aboutH1[3].offsetTop) {
             setTimeout(function () {
                 aboutH1[3].style.transform = "translateY(0px)";
                 aboutH1[3].style.opacity = 1;
             }, 800);

             setTimeout(function () {
                 aboutH2[3].style.transform = "translateY(0px)";
                 aboutH2[3].style.opacity = 1;
             }, 900);

             setTimeout(function () {
                 aboutP[3].style.transform = "translateY(0px)";
                 aboutP[3].style.opacity = 1;
                 aboutBtn[3].style.transform = "translateY(0px)";
                 aboutBtn[3].style.opacity = 1;
             }, 1000);
         }




         // JOB-OFFERS


         if (fullHeight >= jobOffers.offsetTop) {
             setTimeout(function () {
                 jobOffersBlock.style.width = "0%"

             }, 400);

             setTimeout(function () {
                 jobOffersH1[0].style.opacity = 1;
                 jobOffersH1[1].style.opacity = 1;
                 jobOffersH1[0].style.transform = "translateY(0px)";
                 jobOffersH1[1].style.transform = "translateY(0px)";
             }, 1500);

             setTimeout(function () {
                 jobOffersH2[0].style.opacity = 1;
                 jobOffersH2[1].style.opacity = 1;
                 jobOffersH2[0].style.transform = "translateY(0px)";
                 jobOffersH2[1].style.transform = "translateY(0px)";

             }, 1700);

             setTimeout(function () {
                 jobOffersBtn[0].style.transform = "translateY(0px)";
                 jobOffersBtn[1].style.transform = "translateY(0px)";
                 jobOffersBtn[0].style.opacity = 1;
                 jobOffersBtn[1].style.opacity = 1;


             }, 1900)

         }


         /*
      
                   if (fullHeight >= whiteHamburger[0].offsetTop) {
             setTimeout(function () {
                 for (var i = 0; i < 3; i++) {
                     hamburger[i].style.backgroundColor="black";    
                   
                 }
                 re
             }, 1);
         } else if(fullHeight >= blackHamburger[0].offsetTop || blackHamburger[1].offsetTop || blackHamburger[2].offsetTop){
             for (var i = 0; i < 3; i++) {
                  hamburger[i].style.backgroundColor="white"; 
             }
         }
       
     */





     }, 100);




     // ANIMACJE BEZ SCROLLA 

     //LOADING

     setTimeout(function () {
         loadingCube[0].style.opacity = 0;
     }, 2600);

     setTimeout(function () {
         loadingScreen.style.height = 0;
     }, 3400);


     setTimeout(function () {
         loadingScreen.style.height = 0;
     }, 3400);


     // HOVER W OFFERS




     setTimeout(function () {
         if (jobOffersHover[0].className == "com-block") {
             jobOffersHover[0].className += " com-block-hover";
         }

         if (jobOffersHover[1].className == "com-block") {
             jobOffersHover[1].className += " com-block-hover";
         }

     }, 5000);



     //ANIMACJE HERO


     setTimeout(function () {
         rightPanel.style.opacity = 1;
         boxes.style.opacity = 1;
         socialMedia[0].style.opacity = 1;
     }, 4800);





     setTimeout(function () {
         heroTextH1.style.transform = "translateY(0px)";
         heroTextH1.style.opacity = 1;

     }, 4600);

     setTimeout(function () {
         heroTextH2.style.transform = "translateY(0px)";
         heroTextH2.style.opacity = 1;

     }, 4800);

     setTimeout(function () {
         hrText.style.transform = "translateY(0px)";
         hrText.style.opacity = 1;
         btn[0].style.transform = "translateY(0px)";
         btn[0].style.opacity = 1;
     }, 4700);



 });

 // scrollowanie

 var colorSections = Array.prototype.slice.call(document.querySelectorAll('[data-color]'));
 var backgroundColorArray = [];
 var backgroundMask = document.getElementsByClassName("slider-image")[0];


 var BackgroundColorController = function (elem, index, colorStart, colorEnd) {
     this.elem = elem;
     this.index = index;

     this.transitionRange = colorSections[index - 1].clientHeight;

     this.colorStart = colorStart;
     this.colorEnd = colorEnd;
     this.colorDif = {
         r: this.colorStart.r - this.colorEnd.r,
         g: this.colorStart.g - this.colorEnd.g,
         b: this.colorStart.b - this.colorEnd.b
     };

     this.colorTransition = {
         r: (this.colorDif.r === 0) ? 0 : Math.floor(this.transitionRange / this.colorDif.r),
         g: (this.colorDif.g === 0) ? 0 : Math.floor(this.transitionRange / this.colorDif.g),
         b: (this.colorDif.b === 0) ? 0 : Math.floor(this.transitionRange / this.colorDif.b)
     };
 };

 BackgroundColorController.prototype.run = function () {
     var boundingRectY = this.elem.getBoundingClientRect().top;

     if (boundingRectY < this.transitionRange && boundingRectY > 0) {

         var changeForR = (this.colorTransition.r === 0) ? 0 : Math.floor((this.transitionRange - boundingRectY) / this.colorTransition.r),
             changeForG = (this.colorTransition.g === 0) ? 0 : Math.floor((this.transitionRange - boundingRectY) / this.colorTransition.g),
             changeForB = (this.colorTransition.b === 0) ? 0 : Math.floor((this.transitionRange - boundingRectY) / this.colorTransition.b);

         var r = this.colorStart.r - changeForR,
             g = this.colorStart.g - changeForG,
             b = this.colorStart.b - changeForB;

         var colorChangeString = "rgb(" + r + ", " + g + ", " + b + ")";

         backgroundMask.style.backgroundColor = colorChangeString;
     }
 };

 colorSections.forEach(function (elem, index) {
     if (index > 0) {
         var colorStart = getSectionColorCode(colorSections[index - 1]);
         var colorEnd = getSectionColorCode(colorSections[index]);
         backgroundColorArray.push(new BackgroundColorController(elem, index, colorStart, colorEnd));
     }
 }, this);

 function getSectionColorCode(sectionElem) {
     var colorString = sectionElem.getAttribute('data-color');
     var colorStringArray = colorString.split(',');
     var colorNums = [];

     colorStringArray.forEach(function (elem, index) {
         colorNums.push(parseInt(elem));
     }, this);

     return {
         r: colorNums[0],
         g: colorNums[1],
         b: colorNums[2]
     };
 }


 setTimeout(function () {
     document.addEventListener("scroll", function () {
         backgroundColorArray.forEach(function (elem, index) {
             elem.run();
         }, this);

     });
 }, 500);


 //ANIMACJA PRZESUWANIA OBRAZKOW W SCROLLU


 window.addEventListener("scroll", function () {

     //console.log("1:" + scrollPos);
     //console.log("2:" + document.body.getBoundingClientRect().top);

     var scrollPos = 0;
     var pos = 0;


     if (document.body.getBoundingClientRect().top > scrollPos) {
         //UP
         pos = backgroundMask.getBoundingClientRect().top - scrollPos;
         document.getElementsByClassName("animation-gallery-scroll")[0].style.left = pos + "px";
         console.log(pos);
     } else {
         //DOWN
         pos = backgroundMask.getBoundingClientRect().top + scrollPos;
         document.getElementsByClassName("animation-gallery-scroll")[0].style.left = pos + "px";
         console.log(pos);
     }
 });


 //SLIDER

 var slideIndex = 1;
 var previousSlide = document.getElementById("previous-slide");
 var nextSlide = document.getElementById("next-slide");
 var slideNumber = 1;
 var firstNumber = document.getElementById("slide-counter").querySelectorAll("p")[0];

 showDivs(slideIndex);



 previousSlide.addEventListener("click", function () {
     showDivs(slideIndex -= 1)
 });

 nextSlide.addEventListener("click", function () {
     showDivs(slideIndex += 1)
 });
/*
sliderAnimationStart.addEventListener("touchmove", function(event){
    var firstTouch = event.touches[0].clientX;
});
*/



 function showDivs(n) {
     var x = document.getElementsByClassName("what-thinks");
     firstNumber.style.opacity = "0";
     if (n > x.length) {
         slideIndex = 1;
         slideNumber = 1;
     }
     if (n < 1) {
         slideIndex = x.length;
         slideNumber = x.length;
     }
     for (let i = 0; i < x.length; i++) {
         setTimeout(function () {
             x[i].style.opacity = 0;
             x[i].style.position = "absolute";
         }, 500);
     }
     setTimeout(function () {
         x[slideIndex - 1].style.position = "relative";
     }, 500);

     setTimeout(function () {
         x[slideIndex - 1].style.opacity = 1;
     }, 1300);


     setTimeout(function () {
         firstNumber.innerHTML = slideIndex;
         firstNumber.style.opacity = "1";
     }, 1300);



 }
