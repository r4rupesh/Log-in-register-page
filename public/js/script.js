(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      // Check if passwords match
      const password1 = form.querySelector('input[name="password1"]');
      const password2 = form.querySelector('input[name="password2"]');
      if (password1.value !== password2.value) {
        event.preventDefault();
        password2.setCustomValidity("Passwords do not match.");
        password2.classList.add('is-invalid');
      } else {
        password2.setCustomValidity(""); // Clear the error
      }

      form.classList.add('was-validated');
    }, false);
  });
})();
