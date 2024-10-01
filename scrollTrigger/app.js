gsap.to(".page2 h2",{
   
    transform: "translateX(-150%)",
    scrollTrigger:{
        trigger:".page2 h2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -15 0%",
        scrub:2,
        pin:true

    }
})