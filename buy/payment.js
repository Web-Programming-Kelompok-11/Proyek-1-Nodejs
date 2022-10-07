  // Disables form submissions if there are invalid fields
(function () {
    'use strict'
  
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation')
  
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
    }, false)
  })()
 
 //changing payment method
 function toggle(form) { 
    document.getElementById("formCredit").style.display = "none"; 
    document.getElementById("formDebit").style.display = "none";
    document.getElementById("formPaypal").style.display = "none"; 
    document.getElementById(form).style.display = "block"; 
  }