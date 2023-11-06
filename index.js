function adjustSelectWidth() {
    const selectBox = document.getElementById("selectbox");
    const selectedOption = selectBox.options[selectBox.selectedIndex];
    const textContent = selectedOption.textContent;

    // Create a hidden temporary element to measure the text width
    const tempElement = document.createElement("div");
    tempElement.style.visibility = "hidden";
    tempElement.style.position = "absolute";
    tempElement.style.fontSize = "16px"; // Adjust the font size if needed
    tempElement.textContent = textContent;
    document.body.appendChild(tempElement);

    // Get the measured width and add some padding
    const measuredWidth = tempElement.offsetWidth + 10; // Adjust padding as needed

    // Set the select box width to the measured width
    selectBox.style.width = measuredWidth + "px";

    // Clean up the temporary element
    document.body.removeChild(tempElement);
}

// Call the function to adjust the select box width when the page loads or when the selection changes
adjustSelectWidth();

// Listen for changes in the select box to adjust the width dynamically
document.getElementById("selectbox").addEventListener("change", adjustSelectWidth);



function hideItemAbove1247px() {
    var item = document.querySelector('.sizeitem');
    if (window.innerWidth > 1247) {
        item.style.display = 'none';
    } else {
        item.style.display = 'block';
    }
}

// Call the function when the page loads and on window resize
window.addEventListener('load', hideItemAbove1247px);
window.addEventListener('resize', hideItemAbove1247px);




// item box slider is here

let currentIndex = 0;
const sliderItems = document.querySelector('.slider-items');
const slider = document.querySelector('.slider-box');
const btn1 = document.querySelector('.prev-button')
const btn2 = document.querySelector('.next-button')

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        slideToCurrentIndex();
    }
    if(currentIndex < 2){
        document.querySelector('.next-button').disabled = false;
    }
}

function nextSlide() {
    if (currentIndex < sliderItems.children.length-1) {
        currentIndex++;
        slideToCurrentIndex();
    }
    if(currentIndex >= 2){
        document.querySelector('.next-button').disabled = true;
    }
    
}

function slideToCurrentIndex() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`; // Adjust the width of each image as needed
}

// Initial slide
slideToCurrentIndex();




sliderItems.addEventListener('mouseover', () => {
    document.querySelector('.prev-button').style.opacity = '0.5';
    document.querySelector('.next-button').style.opacity = '0.5'; // Add this line
  });
  
  sliderItems.addEventListener('mouseout', () => {
    document.querySelector('.prev-button').style.opacity = '0';
    document.querySelector('.next-button').style.opacity = '0'; // Add this line
  });
  btn1.addEventListener('mouseover', ()=>{
    document.querySelector('.prev-button').style.opacity = '1';
    document.querySelector('.next-button').style.opacity = '0.5'


  })
  btn1.addEventListener('mouseout', ()=>{
    document.querySelector('.prev-button').style.opacity = '0.5';
    document.querySelector('.next-button').style.opacity = '0'


  })
  btn2.addEventListener('mouseover', ()=>{
    document.querySelector('.next-button').style.opacity = '1';
    document.querySelector('.prev-button').style.opacity = '0.5'

  })
  btn2.addEventListener('mouseout', ()=>{
    document.querySelector('.next-button').style.opacity = '0.5';
    document.querySelector('.prev-button').style.opacity = '0'


  })