// Function to create a new div
function createNewDiv() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-div");
    container.appendChild(newDiv);
}

// Function to color pixels
function colorPixels() {
    const pixelToColor = document.querySelectorAll(".grid-div");
    pixelToColor.forEach(pixel => {
        pixel.addEventListener("mouseover", function() {
            pixel.style.backgroundColor = "#272727";
        })
        pixel.addEventListener("mouseout", function() {
            pixel.style.backgroundColor = "#272727";
        })
    })
}


// Create divs within the container div
const container = document.getElementById("container");

for (let i = 0; i < 256; i++) {
    createNewDiv();
}

// color each "pixel" of the etch-a-sketch with lasting effect
colorPixels();

//button changes the number of pixels 
document.getElementById("button").addEventListener("click",
    function() {
        let pixelWidth = prompt("How many pixels wide should the etch-a-sketch be? Enter an answer between 1 and 100!");
        // Removes current etch-a-sketch grid
        const gridToRemove = document.querySelectorAll(".grid-div");
        gridToRemove.forEach(pixel => {
            pixel.remove();
        })
        // Create new etch-a-sketch grid in its place
        let pixelWidthInt = parseInt(pixelWidth, 10);
        pixelsToCreate = pixelWidthInt * pixelWidthInt;
        for (let i = 0; i < pixelsToCreate; i++) {
            createNewDiv();
        }
        // add pixel coloring to grid
        colorPixels();
        // Modify flex basis of new grid
        const changeFlex = document.querySelectorAll(".grid-div");
        changeFlex.forEach(pixel => {
            pixel.style.setProperty("flex-basis", `calc(100% / ${pixelWidthInt})`);        })
    })