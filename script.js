// Navigate to the Details Section
document.getElementById('nextButton').addEventListener('click', function() {
    document.getElementById('registrationForm').style.display = 'none';
    var detailsForm = document.getElementById('detailsForm');
    detailsForm.style.display = 'block';
    detailsForm.classList.add('slideIn');
});

// Validate and Navigate to the Food Section
document.getElementById('nextButton2').addEventListener('click', function() {
    var location = document.getElementById('location').value.trim();
    var roomNumber = document.getElementById('roomNumber').value.trim();

    if (location === '' || roomNumber === '') {
        alert('Please fill in both the Location and Room Number fields.');
        return;
    }

    document.getElementById('detailsForm').style.display = 'none';
    var foodForm = document.getElementById('foodForm');
    foodForm.style.display = 'block';
    foodForm.classList.add('slideIn');
});

// Navigate back to the Registration Form
document.getElementById('previousButton1').addEventListener('click', function() {
    document.getElementById('detailsForm').style.display = 'none';
    var registrationForm = document.getElementById('registrationForm');
    registrationForm.style.display = 'block';
});

// Navigate back to the Details Section
document.getElementById('previousButton2').addEventListener('click', function() {
    document.getElementById('foodForm').style.display = 'none';
    var detailsForm = document.getElementById('detailsForm');
    detailsForm.style.display = 'block';
});

// Handle Form Submission
document.getElementById('submitButton').addEventListener('click', function() {
    // Hide the food form
    document.getElementById('foodForm').style.display = 'none';

    // Show the thank you message
    var thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.style.display = 'block';
    thankYouMessage.classList.add('slideIn');

    // Collect all form data
    const formData = {
        name: document.getElementById('name').value,
        college: document.getElementById('college').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        emailCheckbox: document.getElementById('emailCheckbox').checked ? 'Yes' : 'No',
        idCardCheckbox: document.getElementById('idCardCheckbox').checked ? 'Yes' : 'No',
        kitCheckbox: document.getElementById('kitCheckbox').checked ? 'Yes' : 'No',
        location: document.getElementById('location').value,
        roomNumber: document.getElementById('roomNumber').value,
        breakfast30: document.getElementById('breakfast30').checked ? 'Yes' : 'No',
        tea30: document.getElementById('tea30').checked ? 'Yes' : 'No',
        lunch30: document.getElementById('lunch30').checked ? 'Yes' : 'No',
        snacks30: document.getElementById('snacks30').checked ? 'Yes' : 'No',
        galaDinner30: document.getElementById('galaDinner30').checked ? 'Yes' : 'No',
        breakfast1: document.getElementById('breakfast1').checked ? 'Yes' : 'No',
        tea1: document.getElementById('tea1').checked ? 'Yes' : 'No',
        lunch1: document.getElementById('lunch1').checked ? 'Yes' : 'No',
    };

    // URL of your Google Apps Script web app
    const scriptURL = 'https://script.google.com/macros/s/AKfycby4IskQAVRLiwdlFPys6WaSpMCZi0QGWG-FI94waiYzA2HplZiHCSxXip21G5hw0Rwm1Q/exec';

    // Send form data to Google Sheets
    fetch(scriptURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.text())
    .then(data => {
        console.log('Success:', data);
        alert('Form submitted successfully');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Form submission failed');
    });
});