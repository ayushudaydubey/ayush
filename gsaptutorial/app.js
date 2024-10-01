var tl = gsap.timeline()

tl.from("h2",{
    y:-20,
 
  opacity:0,
    duration:1,
    delay:0.4
})
tl.from("h4",{
    y:-100,
 
  opacity:0,
    duration:1,

    stagger:0.2
})
tl.from("h1",{
    y:50,
 
  opacity:0,
    duration:2,
   color:"yellow",
    stagger:0.3
})
tl.from("h1 span",{
    y:50,

  opacity:0,
    duration:2,
   color:"green",
    stagger:0.3,
  
})