// Create divs within the container div
const container = document.getElementById("container");

for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-div");
    container.appendChild(newDiv);
}

// color each "pixel" of the etch-a-sketch with lasting effect
const pixelToColor = document.querySelectorAll(".grid-div");
pixelToColor.forEach(pixel => {
    pixel.addEventListener("mouseover", function() {
        pixel.style.backgroundColor = "#272727";
    })
    pixel.addEventListener("mouseout", function() {
        pixel.style.backgroundColor = "#272727";
    })
})