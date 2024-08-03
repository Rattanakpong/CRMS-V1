document.addEventListener('DOMContentLoaded', function() {
  const identifySelect = document.getElementById('identify');
  const additionalInfo = document.getElementById('additional-info');
  const differentInfo = document.getElementById('different-info');
  const form = document.querySelector('form');
  const name = document.getElementById('name');
  const phone = document.getElementById('phone');
  const age = document.getElementById('age');
  const country = document.getElementById('country');

  identifySelect.addEventListener('change', function() {
    if (identifySelect.value === 'refugee') {
      additionalInfo.style.display = 'block';
      differentInfo.style.display = 'none';
    } else if (identifySelect.value === 'not-refugee') {
      additionalInfo.style.display = 'none';
      differentInfo.style.display = 'block';
    } else {
      additionalInfo.style.display = 'none';
      differentInfo.style.display = 'none';
    }
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let errors = [];

    // Check if the name field is empty
    if (name.value.trim() === '') {
      errors.push('Name is required');
    }

    // Check if the identify field is selected
    if (identifySelect.value === '') {
      errors.push('Please select your identify');
    }

    // Check if the phone field is empty
    if (phone.value.trim() === '') {
      errors.push('Phone number is required');
    }

    // Check if the age field is empty or not a number
    if (age.value.trim() === '' || isNaN(age.value)) {
      errors.push('Please enter a valid age');
    }

    // Check if the country field is empty
    if (country.value.trim() === '') {
      errors.push('Country is required');
    }

    // If there are errors, display them
    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      form.submit();
    }
  });
});
const textarea = document.getElementById('refugee-status');
  textarea.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });