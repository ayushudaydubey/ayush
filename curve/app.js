var path =`M 10 100 Q 500 100 990 100`

var finalPath =`M 10 100 Q 500 100 990 100`

var string= document.querySelector(".string")

string.addEventListener("mousemove",function(dets){
    path = `M 10 100 ${dets.x} ${dets.y} 990 100`

    gsap.to("svg path",{
        attr:{d:path},
        durration:0.2,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        durration:0.3,
        ease:"elastic.out(1,0.2)"

    })
})