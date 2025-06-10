document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // prevent form submission

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  let valid = true;

  // Email Validation
  if (!emailValue.includes('@')) {
    document.getElementById('emailError').innerText = 'Invalid email format';
    valid = false;
  } else {
    document.getElementById('emailError').innerText = '';
  }

  // Password Validation
  if (passwordValue.length < 6) {
    document.getElementById('passwordError').innerText = 'Password must be at least 6 characters';
    valid = false;
  } else {
    document.getElementById('passwordError').innerText = '';
  }

  if (valid) {
  alert(`Email: ${emailValue}\nPassword: ${passwordValue}`);
}

});

//Through Event Handling

// function validateLogin(event) {
//   event.preventDefault(); // prevent form submission

//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   let valid = true;

//   // Email Validation
//   if (!email.includes('@')) {
//     document.getElementById('emailError').innerText = 'Invalid email format';
//     valid = false;
//   } else {
//     document.getElementById('emailError').innerText = '';
//   }

//   // Password Validation
//   if (password.length < 6) {
//     document.getElementById('passwordError').innerText = 'Password must be at least 6 characters';
//     valid = false;
//   } else {
//     document.getElementById('passwordError').innerText = '';
//   }
