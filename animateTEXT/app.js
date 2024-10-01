function breackText() {
    var h1 = document.querySelector("h1");
    var h1Text = h1.textContent;
    var splitedtext = h1Text.split("  ");
    var halfValue = Math.floor(splitedtext.length / 2);
    var clutter = " ";  // No extra space

    splitedtext.forEach(function (e, idx) {
        if (idx < halfValue) {
            clutter += `<span class=" a "> ${e} </span>`;  // Correcting <sapn> to <span>
        } else {
            clutter += `<span class=" b "> ${e} </span>`;
        }
    });
    
    h1.innerHTML = clutter;
}

breackText();

// GSAP animations
gsap.from("h1 .a", {
    y: 200,
    
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger:0.25
});

gsap.from("h1 .b", {
    y: 200,
    
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger:0.25
});
