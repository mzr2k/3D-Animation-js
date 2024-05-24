// Movement animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");


//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
  //Animate In
  container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
  });
  //Animate Out
  container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
  });

  //shoe 
  document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('source-image');
    const circle = document.getElementById('gradient-circle');

    img.onload = function() {
        const colorThief = new ColorThief();
        const dominantColor = colorThief.getColor(img);
        const palette = colorThief.getPalette(img, 2);

        // Use the dominant color and the second color from the palette
        const color1 = `rgba(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}, 0.75)`;
        const color2 = `rgba(${palette[1][0]}, ${palette[1][1]}, ${palette[1][2]}, 0.75)`;

        // Update the circle's background gradient with the extracted colors
        circle.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    };

    if (img.complete) {
        img.onload();  // Trigger the onload event if the image is already loaded
    }
});