document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display success message
    document.getElementById('successMessage').style.display = 'block';

    // Optionally clear the form fields
    this.reset();
});