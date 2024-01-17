document.addEventListener("DOMContentLoaded", function() {
    console.log('Script loaded!');
  
    // Function to change background color
    function changeBackgroundColor() {
      const colors = ["#f9f9f9", "#e6f7ff", "#ffe6e6", "#e6f2ff", "#f0e68c"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = randomColor;
    }
  
    // Add event listener to the button
    const colorChangeButton = document.getElementById('colorChangeButton');
    if (colorChangeButton) {
      colorChangeButton.addEventListener('click', changeBackgroundColor);
    }
  });
  