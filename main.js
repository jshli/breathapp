let breaths = 1;
let currentBreaths = 1;

var circle = document.querySelector('.circle');
var arrow = document.getElementsByClassName('btn-arrow');


// breath increment buttons 
document.getElementById('counter').innerHTML = breaths;

const increaseBreathes = () => {
    breaths ++;
    console.log(breaths);
    document.getElementById('counter').innerHTML = breaths;
    breathAnimation.loop = breaths;
}

const decreaseBreathes = () => {
    breaths --;
    console.log(breaths);
    document.getElementById('counter').innerHTML = breaths;
    breathAnimation.loop = breaths;
}

document.getElementById('decrease').addEventListener('click', decreaseBreathes);
document.getElementById('increase').addEventListener('click', increaseBreathes);



//breath animation section 
const breathAnimation = anime.timeline({
    autoplay: false,
    begin: function(anim){
        console.log(currentBreaths);
    },
    complete: function(anim) {
        currentBreaths ++;
        console.log(currentBreaths);
        if (currentBreaths < breaths && currentBreaths !== breaths) {
            return breathAnimation.restart()
        } else {
            currentBreaths = 1;
        }
    }
});

breathAnimation
.add({
    targets: circle,
    opacity: 1,
    scale: 10,
    duration: 500
})
.add({
    targets: circle,
    opacity: 1,
    scale: 10,
    duration: 1000,
})
.add({
    targets: circle,
    opacity: 0.6,
    scale: 1,
    duration: 1000,
})
.add({
    targets: circle,
    opacity: 0.6,
    scale: 1,
    duration: 500,
})



const startButton = document.getElementById('start-btn')
startButton.onclick = breathAnimation.play;

startButton.addEventListener('click', function() { 
    console.log("click")
    breathAnimation.play(); 
});

var arrowMouseOver = anime({
    targets: '.btn-arrow',
    borderColor: '#384661',
    autoplay: false,
    easing: 'easeOutCubic',
});

var arrowMouseOut = anime({
    targets: '.btn-arrow',
    borderColor: '#FFF',
    autoplay: false,
    easing: 'easeInCubic',
});

startButton.onmouseover = arrowMouseOver.play;
startButton.onmouseout = arrowMouseOut.play;



