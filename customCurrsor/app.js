var main =document.querySelector(".main")
var currsor = document.querySelector(".currsor")
var imageDiv = document.querySelector(".image")

main.addEventListener("mousemove",function(dets){
    
  gsap.to (currsor,{
   x:dets.x,
   y:dets.y,
   duration:0.9,
   ease:"back.out"

  })
})
imageDiv.addEventListener("mouseenter",function(){
    currsor.innerHTML ="view more"
    gsap.to(currsor,{
        scale:3
    })
})
imageDiv.addEventListener("mouseleave",function(){
    currsor.innerHTML =""
    gsap.to(currsor,{
        scale:1
    })
})