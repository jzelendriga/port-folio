

// Typing Text Code

var sliderCounter = 1;
var sliderContent = [
    "Developer",
    "Designer",
];
var sliderValue = document.querySelector("#sliderValue");

function slide() {
    if (sliderCounter >= sliderContent.length) {
        sliderCounter = 0;
    }

    sliderValue.innerHTML = "";

    sliderValue.classList.remove("holder-animation");
    void sliderValue.offsetWidth;
    sliderValue.classList.add("holder-animation");

    for (i = 0; i < sliderContent[sliderCounter].length; i++) {
        let letterDiv = document.createElement("div");
        letterDiv.innerHTML = sliderContent[sliderCounter][i];

        if (letterDiv.innerHTML == " ") {
            letterDiv.innerHTML = "&nbsp;";
        }
        letterDiv.classList.add("start");
        letterDiv.classList.add("animation");
        letterDiv.style.animationDelay = i / 10 + "s";
        sliderValue.appendChild(letterDiv);
    }

    sliderCounter++;
}

slide();
setInterval(slide, 2000);



// toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true
  });
  
  /* -- HOME -- */
  sr.reveal(".featured-text", {});
  sr.reveal(".home-img", { delay: 100 });
 
  

  /* -- HEADINGS -- */
  sr.reveal(".heading", {});
  
 
  const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true
  });
  srRight.reveal(".services-list", { delay: 100 });
  srRight.reveal(".portfolio-content", { delay: 100 });
  srRight.reveal(".contact", { delay: 100 });