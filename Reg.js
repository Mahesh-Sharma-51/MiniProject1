document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let agreeTerms = document.getElementById('agreeTerms').checked;
    let errorMessage = document.getElementById('errorMessage');

    if (!email || !password || !confirmPassword) {
        showError('All fields must be filled.');
        return;
    }
    
    if (!email.match(/^\S+@\S+\.\S+$/)) {
        showError('Please enter a valid email address.');
        return;
    }

    if (password !== confirmPassword) {
        showError('Passwords do not match.');
        return;
    }

    if (!agreeTerms) {
        showError('You must agree to the terms.');
        return;
    }

    // If all validations pass, submit the form.
    showError('');
    alert('Registration successful!');
});

function showError(message) {
    let errorMessage = document.getElementById('errorMessage');
    errorMessage.innerText = message;
    errorMessage.style.display = message ? 'block' : 'none';
}

// Toggle password visibility
const togglePassword = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
});

// Toggle Confirm password visibility
const toggleConfirmPassword = document.getElementById('toggle-confirm-password');
const confirmPasswordInput = document.getElementById('confirmPassword');

toggleConfirmPassword.addEventListener('click', function () {
    const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPasswordInput.setAttribute('type', type);
});
