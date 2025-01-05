document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('survey-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const number = document.getElementById('number').value;
        const dropdown = document.getElementById('dropdown').value;
        const radioButtons = document.querySelector('input[name="radio"]:checked');
        const checkboxes = document.querySelectorAll('input[name="checkbox"]:checked');
        const comments = document.getElementById('comments').value;

        let valid = true;

        // Validate name
        if (name.trim() === '') {
            valid = false;
            alert('Name is required.');
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            valid = false;
            alert('Please enter a valid email address.');
        }

        // Validate number
        if (number < 1 || number > 100) {
            valid = false;
            alert('Number must be between 1 and 100.');
        }

        // Validate dropdown
        if (dropdown === '') {
            valid = false;
            alert('Please select an option from the dropdown.');
        }

        // Validate radio buttons
        if (!radioButtons) {
            valid = false;
            alert('Please select a radio button option.');
        }

        // Validate checkboxes
        if (checkboxes.length === 0) {
            valid = false;
            alert('Please select at least one checkbox option.');
        }

        // If all validations pass, submit the form
        if (valid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });
});