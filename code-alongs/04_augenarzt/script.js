console.log('hi script.js')
const auge = document.querySelector("#eye");
const pupille = document.querySelector("#pupil");

// Make the eye bloody when clicked
auge.addEventListener("click", function (event) {
    auge.classList.toggle("bloody");

});

// Closing the eye every 2 seconds

setInterval(function () {
    auge.classList.toggle("closed")
}, 2000 );

//Moving Pupil with mouse
window.addEventListener("mousemove", function(event) {
    console.log(event.clientX);
    let mouse_x = event.clientX;

    if(mouse_x < window.innerWidth / 3) {
        pupille.classList.add("look_left");


    }
    else if(mouse_x < (window.innerWidth / 3 ) * 2) {
        pupille.classList.remove("look_left");
        pupille.classList.remove("look_right");
    }

    else {
        pupille.classList.add("look_right");
    }
    } );
