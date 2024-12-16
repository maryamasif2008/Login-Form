// Get references to the elements
const showFormButton = document.getElementById('showFormButton');
const loginForm = document.getElementById('loginForm');

// Add click event listener to the button to display the form
showFormButton.addEventListener('click', function() {
    // Toggle the visibility of the login form
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
    } else {
        loginForm.style.display = 'none';
    }
});

// Optional: You can add form submission handling (for example, console log form data)
const form = document.getElementById('login');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
});
