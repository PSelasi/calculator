// Get the input display element
const display = document.getElementById('display');
  
const buttons = document.querySelectorAll('.button button');

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.value;
  
      if (value === 'clear') {
        // Clear the display
        display.value = '';
      } else if (value === 'delete') {
        // Remove the last character
        display.value = display.value.slice(0, -1);
      } else if (value === '=') {
        // Evaluate the expression
        try {
          display.value = eval(display.value); // Use eval cautiously
        } catch (error) {
          display.value = 'Error';
        }
      } else {
        // Append the button value to the display
        display.value += value;
      }
    });
  });