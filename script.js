var active = 3;

var points = document.querySelectorAll(".point");

gsap.to(points[active - 1], {
    opacity: .5,
    duration: 0.5
})

points.forEach(function(val, index){
    val.addEventListener("click", function(){
        gsap.to("#circle", {
            rotate: (3-(index+1))*10,
            ease: Expo.easeInOut,
            duration: 1.5
        })
        greyout();
        gsap.to(this, {
            opacity: .5
        })
    })

})

function greyout(){
    gsap.to(points,{
        opacity: .08
    })
}


gsap.to("#circle", {
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 2,

})