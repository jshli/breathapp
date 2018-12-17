let breaths = 1;
let currentBreaths = 1;
let isRunning = false;

var circle = document.querySelector('.circle');
const heading = document.querySelector('.heading');


// breath increment buttons 
document.getElementById('counter').innerHTML = breaths;

const increaseBreathes = () => {
    breaths ++;
    document.getElementById('counter').innerHTML = breaths;
}

const decreaseBreathes = () => {
    breaths --;
    document.getElementById('counter').innerHTML = breaths;
}

//hide decrement button if breaths just one
const hideDecrementer = () => {
    if (breaths <=1 ){
        document.getElementById('decrease').style.visibility = "hidden";
    } else if (breaths > 1){
        document.getElementById('decrease').style.visibility = "visible";
    }
}

document.getElementById('decrease').addEventListener('click', decreaseBreathes);
document.getElementById('increase').addEventListener('click', increaseBreathes);
document.getElementById('decrease').addEventListener('click', hideDecrementer);
document.getElementById('increase').addEventListener('click', hideDecrementer);


//circle morphing 
var morphing = anime({
    targets: '#morph',
    d: [
        { value: 'M84,167 C110.124484,167 124.090472,151.988027 139.304928,133.120825 C150.786696,118.882469 167,103.71515 167,84 C167,59.3539532 161.94294,33.0809396 144.885239,17.8794808 C130.217009,4.80746772 105.193587,1 84,1 C61.5631535,1 43.3324357,12.9351801 28.394046,27.4007765 C12.8125354,42.4891393 1,60.5972123 1,84 C1,109.816453 -0.631659159,131.776098 17.8539475,146.998988 C32.1913414,158.805827 63.9768187,167 84,167 Z'},
        { value: 'M84,167 C110.124484,167 139.200881,162.871394 154.415337,144.004192 C165.897105,129.765836 167,103.71515 167,84 C167,59.3539532 149.888941,45.332979 132.831239,30.1315201 C118.163009,17.0595071 105.193587,1 84,1 C61.5631535,1 35.7739309,7.65852952 20.8355411,22.1241259 C5.25403049,37.2124887 1,60.5972123 1,84 C1,109.816453 13.4753495,128.781302 31.9609562,144.004192 C46.2983501,155.811031 63.9768187,167 84,167 Z'},
        { value: 'M84,167 C110.124484,167 122.92204,158.791782 138.136495,139.92458 C149.618264,125.686223 167,103.71515 167,84 C167,59.3539532 165.387341,23.1037712 145.890839,11.0933297 C129.506377,1 105.193587,1 84,1 C61.5631535,1 39.7281181,12.2200377 24.7897284,26.6856341 C9.20821775,41.7739969 1,60.5972123 1,84 C1,109.816453 2.34993447,139.250986 20.8355411,154.473876 C35.172935,166.280715 63.9768187,167 84,167 Z'},
        { value: 'M84,167 C110.124484,167 135.840812,158.096443 151.055268,139.229241 C162.537036,124.990885 154.294312,103.71515 154.294312,84 C154.294312,59.3539532 155.986355,39.3081795 138.928653,24.1067206 C124.260423,11.0347075 105.193587,1 84,1 C61.5631535,1 47.4978651,20.3990661 32.5594753,34.8646625 C16.9779647,49.9530253 1,60.5972123 1,84 C1,109.816453 14.0738687,129.285202 32.5594753,144.508092 C46.8968692,156.314931 63.9768187,167 84,167 Z'},
        { value: 'M84,167 C110.124484,167 123.714197,155.055438 138.928653,136.188236 C150.410421,121.949879 160.081465,103.71515 160.081465,84 C160.081465,59.3539532 155.986355,39.3081795 138.928653,24.1067206 C124.260423,11.0347075 105.193587,1 84,1 C61.5631535,1 42.7515201,15.44588 27.8131304,29.9114763 C12.2316197,44.9998391 1,60.5972123 1,84 C1,109.816453 14.0738687,129.285202 32.5594753,144.508092 C46.8968692,156.314931 63.9768187,167 84,167 Z'}
      ],
    easing: 'linear',
    duration: 10000,
    loop: true,
    autoplay: true,
    direction: 'alternate'
  });


//breath animation section 

const startAnimation = anime({
    duration: 5000,
    autoplay: false,
    begin: function(anim){
        heading.textContent = "Just focus gently on the circle";
        document.querySelector('.selector-wrap').style.opacity = '0';
        document.querySelector('.button-label').style.opacity = '0';
        document.querySelector('.subheading').style.opacity = '0';
    },
    complete: function(anim) {
        breathAnimation.play()
    }
})

const breathAnimation = anime.timeline({
    autoplay: false,
    begin: function(anim){
        console.log(currentBreaths);
        isRunning = true;    

    },
    complete: function(anim) {
        if (currentBreaths < breaths) {
            currentBreaths ++;
            breathAnimation.restart()
        } else {
            currentBreaths = 1;
            breathAnimation.reset();
            heading.textContent = "Well done";
            heading.style.opacity = "1.0"
            startButton.style.opacity = "1.0"
            isRunning = false;
            heading.textContent = "Well Done";
            document.querySelector('.selector-wrap').style.opacity = '1.0';
            document.querySelector('.button-label').style.opacity = '1.0';
            document.querySelector('.subheading').style.opacity = '1.0';
        }
    }
});

breathAnimation
.add({
    targets: circle,
    opacity: 1,
    scale: 3,
    duration: 4000,
    easing: 'linear',
    begin: function() {
        heading.textContent = "Now, breathe in";
        heading.style.opacity = "1.0"
      }
},

)
.add({
    targets: circle,
    opacity: 1,
    scale: 3,
    duration: 7000,
    easing: 'linear',
    begin: function() {
        heading.textContent = "Hold";
      }
})
.add({
    targets: circle,
    opacity: 0.6,
    scale: 1,
    duration: 8000,
    easing: 'linear',
    begin: function() {
        heading.textContent = "Ok, breath out";
      }
})
.add({
    targets: circle,
    opacity: 0.6,
    scale: 1,
    duration: 1000,
    easing: 'linear',
    begin: function() {
        heading.style.opacity = "0"
      }
})


const startButton = document.getElementById('start-btn')

startButton.addEventListener('click', function() { 
    startButton.style.opacity="0";
    startAnimation.play();
});


