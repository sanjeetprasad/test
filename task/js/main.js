// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const button = document.getElementById('myButton');
    
    // Add click event listener
    button.addEventListener('click', function() {
        alert('Hello from JavaScript!');
        console.log('Button was clicked!');
    });
    
    console.log('JavaScript is working!');
});