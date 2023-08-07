// script.js
/*
const passwordInput = document.getElementById('passwordInput');
const checkButton = document.getElementById('checkButton');
const strengthFeedback = document.getElementById('strengthFeedback');

checkButton.addEventListener('click', checkPasswordStrength);

function checkPasswordStrength() {
  const password = passwordInput.value;
  const strengthLevel = getPasswordStrengthLevel(password);
  const feedback = getPasswordStrengthFeedback(strengthLevel);

  strengthFeedback.textContent = feedback;
}

function getPasswordStrengthLevel(password) {
  if (password.length < 8) {
    return 'veryweak';
  }

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[^a-zA-Z\d]/.test(password);

  if (hasUppercase && hasLowercase && hasDigit && hasSpecialChar) {
    return 'strong';
  } else if (hasUppercase || hasLowercase || hasDigit || hasSpecialChar) {
    return 'medium';
  } else {
    return 'weak';
  }
}

function getPasswordStrengthFeedback(strengthLevel) {
  switch (strengthLevel) {
    case 'veryweak':
      return 'Very Weak password. Please consider a longer password.';
    case 'weak':
      return 'Weak password. Try adding a mix of characters.';
    case 'medium':
      return 'Medium password. Add more complexity for better security.';
    case 'strong':
      return 'Strong password! You have good security practices.';
    default:
      return 'Password strength assessment failed.';
  }
}
*/


// script.js
const passwordInput = document.getElementById('passwordInput');
const checkButton = document.getElementById('checkButton');
const strengthFeedback = document.getElementById('strengthFeedback');
const strengthGif = document.getElementById('strengthGif');

checkButton.addEventListener('click', checkPasswordStrength);

function checkPasswordStrength() {
  const password = passwordInput.value;
  const strengthLevel = getPasswordStrengthLevel(password);
  const feedback = getPasswordStrengthFeedback(strengthLevel);

  strengthFeedback.textContent = feedback;
}

function getPasswordStrengthLevel(password) {
  if (password.length < 8) {
    return 'veryweak';
  }

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[^a-zA-Z\d]/.test(password);

  if (hasUppercase && hasLowercase && hasDigit && hasSpecialChar) {
    return 'strong';
  } else if (hasUppercase || hasLowercase || hasDigit || hasSpecialChar) {
    return 'medium';
  } else {
    return 'weak';
  }
}

function getPasswordStrengthFeedback(strengthLevel) {
  let feedback = '';
  let emoji = '';
  let gifSrc = '';

  switch (strengthLevel) {
    case 'veryweak':
      feedback = 'Very Weak password. Please consider a longer password.';
      emoji = '😊';
      gifSrc = 'veryweak.gif'; // Replace with actual GIF URL for very weak password
      break;
    case 'weak':
      feedback = 'Weak password. Try adding a mix of characters.';
      emoji = '😐';
      gifSrc = 'weak.gif'; // Replace with actual GIF URL for weak password
      break;
    case 'medium':
      feedback = 'Medium password. Add more complexity for better security.';
      emoji = '😊';
      gifSrc = 'medium.gif'; // Replace with actual GIF URL for medium password
      break;
    case 'strong':
      feedback = 'Strong password! You have good security practices.';
      emoji = '👍';
      gifSrc = 'strong.gif'; // Replace with actual GIF URL for strong password
      break;
    default:
      feedback = 'Password strength assessment failed.';
  }

  strengthGif.src = gifSrc;
  strengthGif.alt = `Password strength: ${strengthLevel}`;

  return `${feedback} ${emoji}`;
}
