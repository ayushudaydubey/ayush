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

/*var obj ={name : "ayush",
    age :22
}
var copyobj ={...obj}
delete obj.age;

function abcd ( a){
  a();
}

abcd(function (){
    console.log("hello")
})*/

/*async function abcd() {
    let raw = await fetch(`https://randomuser.me/api/`)
    let ans = await raw.json();
    console.log (ans);
    
}*/

var ans = new Promise((resolve, reject) => {
    
    return resolve("welcome home")
})
var p2 = ans.then(function(data ){
    console.log(data) 
    return new Promise((resolve, reject) => {
        return resolve("take shower")
    })
})
var p3 = p2.then(function(data ){
    console.log(data)
    return new Promise((resolve, reject) => {
        console.log("take meal")
    })
})
console.log(p3)