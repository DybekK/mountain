 // animacja menu

 var btnOpen = document.getElementById("hamburger");
 var sectionMenu = document.getElementById("navbar-section");
 var btnClose = document.getElementById("menu");
 var menuOptions = document.getElementById("options").querySelectorAll("div");
 var body = document.body;


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

     for (var i = 0; i < 4; i++) {

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

     for (var i = 0; i < 4; i++) {

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
     var rightPanel = document.getElementById("right-panel");
     var boxes = document.getElementById("boxes-animate");
     var heroTextH1 = document.getElementById("hero-text").querySelector("h1");
     var heroTextH2 = document.getElementById("hero-text").querySelector("h2");
     var hrText = document.getElementById("hr-text");
     var btn = document.getElementsByClassName("button-show-more");
     var respoBoxesH2 = document.getElementById("responsive-boxes-animate").querySelectorAll("h2");
     var respoBoxesP = document.getElementById("responsive-boxes-animate").querySelectorAll("p");
     var aBox = document.getElementById("responsive-boxes-animate").querySelector("a");

     // Zmienne about us

     var aboutH1 = document.getElementById("text-column").querySelectorAll("h1");
     var aboutH2 = document.getElementById("text-column").querySelectorAll("h2");
     var aboutP = document.getElementById("text-column").querySelectorAll("p");
     var aboutBtn = document.getElementById("text-column").getElementsByClassName("button-click");
     var jobOffersBlock = document.getElementById("job-offers-animation");
     var jobOffersH1 = document.getElementById("job-offers").querySelectorAll("h1");
     var jobOffersH2 = document.getElementById("job-offers").querySelectorAll("h2");
     var jobOffersBtn = document.getElementById("job-offers").getElementsByClassName("button-offers");
     var jobOffersHover = document.getElementsByClassName("com-block");


   
     
     
     

     // Tutaj sa wszystkie animacje scrollowania

     setInterval(function () {
         var fullHeight = window.pageYOffset + window.innerHeight;



         // RESPONSYWNE 

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



         // ABOUT





         if (fullHeight >= aboutH1[0].offsetTop) {
             setTimeout(function () {
                 aboutH1[0].style.transform = "translateY(0px)";
                 aboutH1[0].style.opacity = 1;

             }, 500);

             setTimeout(function () {
                 aboutH2[0].style.transform = "translateY(0px)";
                 aboutH2[0].style.opacity = 1;
             }, 600);

             setTimeout(function () {
                 aboutP[0].style.transform = "translateY(0px)";
                 aboutP[0].style.opacity = 1;
                 aboutBtn[0].style.transform = "translateY(0px)";
                 aboutBtn[0].style.opacity = 1;
             }, 700);
         }

         if (fullHeight >= aboutH1[1].offsetTop) {
             setTimeout(function () {
                 aboutH1[1].style.transform = "translateY(0px)";
                 aboutH1[1].style.opacity = 1;
             }, 500);

             setTimeout(function () {
                 aboutH2[1].style.transform = "translateY(0px)";
                 aboutH2[1].style.opacity = 1;
             }, 600);

             setTimeout(function () {
                 aboutP[1].style.transform = "translateY(0px)";
                 aboutP[1].style.opacity = 1;
                 aboutBtn[1].style.transform = "translateY(0px)";
                 aboutBtn[1].style.opacity = 1;
             }, 700);
         }

         if (fullHeight >= aboutH1[2].offsetTop) {
             setTimeout(function () {
                 aboutH1[2].style.transform = "translateY(0px)";
                 aboutH1[2].style.opacity = 1;
             }, 500);

             setTimeout(function () {
                 aboutH2[2].style.transform = "translateY(0px)";
                 aboutH2[2].style.opacity = 1;
             }, 600);

             setTimeout(function () {
                 aboutP[2].style.transform = "translateY(0px)";
                 aboutP[2].style.opacity = 1;
                 aboutBtn[2].style.transform = "translateY(0px)";
                 aboutBtn[2].style.opacity = 1;
             }, 700);
         }



         // JOB-OFFERS


         if (fullHeight >= jobOffersBlock.offsetTop) {
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


     }, 100);




        setTimeout(function(){
               if(jobOffersHover[0].className == "com-block"){
                         jobOffersHover[0].className += " com-block-hover";
                     }
            
                if(jobOffersHover[1].className == "com-block"){
                         jobOffersHover[1].className += " com-block-hover";
                     }
                    
        },2500);
     
     




     setTimeout(function () {
         rightPanel.style.opacity = 1;
         boxes.style.opacity = 1;
     }, 500);


  


     setTimeout(function () {
         heroTextH1.style.transform = "translateY(0px)";
         heroTextH1.style.opacity = 1;

     }, 1600);

     setTimeout(function () {
         heroTextH2.style.transform = "translateY(0px)";
         heroTextH2.style.opacity = 1;

     }, 1800);

     setTimeout(function () {
         hrText.style.transform = "translateY(0px)";
         hrText.style.opacity = 1;
         btn[0].style.transform = "translateY(0px)";
         btn[0].style.opacity = 1;
     }, 1700);









 });
