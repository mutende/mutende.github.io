//responsive navbar
$(window).scroll( function (){
    if($(document).scrollTop() > 50){
       $('nav').addClass('change-menu');
    }else{
        $('nav').removeClass('change-menu');
    }
});


// smooth scrolling
function smoothScrolling(classname, tagname){
    $(classname+' '+tagname).on('click', function(e) {
        if(this.hash !== ''){    
        e.preventDefault();
        const hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
    }); 

}

smoothScrolling('.navbar', 'a');
smoothScrolling('.toTop', 'a');
smoothScrolling('.landing-text', 'a');


//animate letters
function animateWords(targetSelector, animationstyle, animationStyle2){
    // Wrap every letter in a span
var textWrapper = document.querySelector(targetSelector);
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: targetSelector+' .letter',
    scale: [4,1],
    opacity: [0,1],
    easing: animationstyle,
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: targetSelector,
    opacity: 0,
    duration: 1000,
    easing: animationStyle2,
    delay: 1000
  })
}
animateWords('.animTitle',"easeOutExpo","easeOutExpo");