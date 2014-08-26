/* Code used by JavaScript animation sample */
var jsAnimationElement = document.getElementById('jsanimation');
var jsAnimationBtn = document.getElementById('jsBtn');
/**
* Listener of the "Click here to move the element below with JS" button
*/
jsAnimationBtn.addEventListener('click', function moveBtnClickListener() {
    //This variable holds the position left of the div
    var positionLeft = 0;

    /**
    * function that moves jsAnimationElement 10px more to right until the positionLeft is 100
    */
    function moveToRight() {
        positionLeft += 10;

        /* Set position left of the jsanimation div */
        jsAnimationElement.style.left = positionLeft + 'px';

        if (positionLeft < 100) {
            /* This recursive function calls itself until the object is 100px from the left, every 100 milliseconds */
            setTimeout(moveToRight, 100);
        }
    }

    moveToRight();
}, false);

/* Code used by jQuery Animation sample */
/**
* Listener of the "Click here to move the element below with jQuery" button
*/
$("#jQBtn").click(function () {
    /** Use the jQuery animate function to send the element to more 100px to right in 1s */
    $("#jQanimation").animate({
        left: "+=100"
    }, 1000);
});

/* Code used by CSS transition animation sample */
var cssTransitionElement = document.getElementById('csstransition');
var cssTransitionBtn = document.getElementById('cssBtn');
/**
* Listener of the "Click here to move the element below with CSS3" button
*/
cssTransitionBtn.addEventListener('click', function moveCssBtnClickListener() {
    /* Add class "move-to-right" to the block on button click */
    cssTransitionElement.classList.add('move-to-right');
});

/* Code used by CSS Animation sample */
var cssAnimationElement = document.getElementById('cssanimation');
var cssAnimationBtn = document.getElementById('cssAnimationBtn');
/**
* Listener of the "Click here to move the element below with CSS3" button
*/
cssAnimationBtn.addEventListener('click', function moveCssAnimationBtnClickListener() {
    /* Add class "move-to-right" to the block on button click */
    cssAnimationElement.classList.add('move-to-right-animation');
});





