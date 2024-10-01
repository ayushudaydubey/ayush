let btn = document.querySelector("button")
function RedBlue(){
    let h2 = document.querySelector("h2");
let h2Text = h2.textContent;
let splitedtext = h2Text.split(" ");


h2.innerHTML = ""; 

splitedtext.forEach(function(e, idx) {
    let span = document.createElement("span"); // Create a span element for each word
    span.textContent = e + " "; // Add the word to the span, including a space

    // Apply color based on the index
    if (idx <= 3) {
        span.style.color = "red";
        span.style.fontSize = "15px";  // Set color to red for words with index 0-3
    } else {
        span.style.color = "blue";
        span.style.fontSize = "10px"; // Set color to blue for words with index >= 4
    }

    // Append the span to the h2 element
    h2.appendChild(span);
});

}

  btn.addEventListener("click", RedBlue)
    