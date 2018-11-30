 // animacja menu

        var btnOpen = document.getElementById("hamburger");
        var sectionMenu = document.getElementById("navbar-section");
        var btnClose = document.getElementById("menu");
        var menuOptions = document.getElementById("options").querySelectorAll("div");
        var body = document.body;
      

        btnOpen.addEventListener("click", function() {

            body.style.overflowY = "hidden";
            btnOpen.style.opacity = 0;

            if (btnClose.querySelector("div").style.opacity == 0) {
                setTimeout(function() {
                  
                      btnClose.querySelectorAll("div")[0].style.transform = "rotate(45deg)"; btnClose.querySelectorAll("div")[0].style.opacity = 1;
                     btnClose.querySelectorAll("div")[1].style.transform = "rotate(-45deg)"; btnClose.querySelectorAll("div")[1].style.opacity = 1;
                
                }, 500);
            }


            sectionMenu.style.display = "flex";


            setTimeout(function() {
                sectionMenu.style.width = "100%";
            }, 80);

            setTimeout(function() {
                sectionMenu.style.opacity = 1;
            }, 50);

            for (var i = 0; i < 4; i++) {

                if (i == 0) {
                    setTimeout(function() {
                        menuOptions[0].style.opacity = 1;
                        menuOptions[0].style.transform = "translateY(0px)";
                    }, 1150);
                } else if (i == 1) {

                    setTimeout(function() {
                        menuOptions[1].style.opacity = 1;
                        menuOptions[1].style.transform = "translateY(0px)";
                    }, 1100);
                } else if (i == 2) {
                    setTimeout(function() {
                        menuOptions[2].style.opacity = 1;
                        menuOptions[2].style.transform = "translateY(0px)";
                    }, 1050);
                } else if (i == 3) {
                    setTimeout(function() {
                        menuOptions[3].style.opacity = 1;
                        menuOptions[3].style.transform = "translateY(0px)";
                    }, 1000);

                }

            }







        });

        btnClose.addEventListener("click", function() {


            setTimeout(function() {
                
                
                for(var i = 0; i <2; i++){
                      btnClose.querySelectorAll("div")[i].style.transform = "rotate(0deg)"; btnClose.querySelectorAll("div")[i].style.opacity = 0;
                }
                
                
                btnClose.style.transform = "rotate(0deg)";
              
            }, 100);

            for (var i = 0; i < 4; i++) {

                if (i == 0) {
                    setTimeout(function() {
                        menuOptions[0].style.opacity = 0;
                        menuOptions[0].style.transform = "translateY(100px)";
                    }, 800);
                } else if (i == 1) {

                    setTimeout(function() {
                        menuOptions[1].style.opacity = 0;
                        menuOptions[1].style.transform = "translateY(100px)";
                    }, 850);
                } else if (i == 2) {
                    setTimeout(function() {
                        menuOptions[2].style.opacity = 0;
                        menuOptions[2].style.transform = "translateY(100px)";
                    }, 900);
                } else if (i == 3) {
                    setTimeout(function() {
                        menuOptions[3].style.opacity = 0;
                        menuOptions[3].style.transform = "translateY(100px)";
                    }, 950);

                }


            }


            setTimeout(function() {
                sectionMenu.style.display = "none";
                 body.style.overflowY = "visible";
                 
            btnOpen.style.opacity = 1;

            }, 1700);


            setTimeout(function() {
                sectionMenu.style.width = "0%";

            }, 1400);

            setTimeout(function() {
                sectionMenu.style.opacity = 0;
                btnOpen.style.opacity = 1;
            }, 1500);
        });








        // animacje tekstu i elementow na stronie

        document.addEventListener("DOMContentLoaded", function() {
            var rightPanel = document.getElementById("right-panel");
            var textBorder = document.getElementById("text-box-border");
            var boxes = document.getElementById("boxes-animate");
            var heroTextH1 = document.getElementById("hero-text").querySelector("h1");
            var heroTextH2 = document.getElementById("hero-text").querySelector("h2");
            var hrText = document.getElementById("hr-text");
            var btn = document.getElementById("button-show-more");
            var respoBoxesH2 = document.getElementById("responsive-boxes-animate").querySelectorAll("h2");
            var respoBoxesP = document.getElementById("responsive-boxes-animate").querySelectorAll("p");
            var hrBox = document.getElementsByClassName("hr-box");
            var aBox = document.getElementById("responsive-boxes-animate").querySelector("a");
            setTimeout(function() {
                rightPanel.style.opacity = 1;
                boxes.style.opacity = 1;

            }, 500);


            // bede tutaj pozniej okreslal zachowanie respoBoxow w stosunku do przewijania ekranu
            // tutaj poczatek przykladu

            setTimeout(function() {
                for (var i = 0; i < 3; i++) {
                    respoBoxesH2[i].style.transform = "translateY(0px)";
                    respoBoxesH2[i].style.opacity = 1;
                }
            }, 1200);


            setTimeout(function() {
                for (var i = 0; i < 3; i++) {
                    for (var i = 0; i < 3; i++) {
                        hrBox[i].style.transform = "translateY(0px)";
                        hrBox[i].style.opacity = 1;
                    }
                }
            }, 1400);



            setTimeout(function() {

                for (var i = 0; i < 3; i++) {
                    respoBoxesP[i].style.transform = "translateY(0px)";
                    respoBoxesP[i].style.opacity = 1;
                }

            }, 1700);
            // tutaj koniec przykladu 

            setTimeout(function() {
                textBorder.style.opacity = 1;
            }, 1200);
            setTimeout(function() {
                heroTextH1.style.transform = "translateY(0px)";
                heroTextH1.style.opacity = 1;

            }, 1600);

            setTimeout(function() {
                heroTextH2.style.transform = "translateY(0px)";
                heroTextH2.style.opacity = 1;
                aBox.style.transform = "translateY(0px)";
                aBox.style.opacity = 1;
            }, 1800);

            setTimeout(function() {
                hrText.style.transform = "translateY(0px)";
                hrText.style.opacity = 1;
                btn.style.transform = "translateY(0px)";
                btn.style.opacity = 1;
            }, 1700);



        });
