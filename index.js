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