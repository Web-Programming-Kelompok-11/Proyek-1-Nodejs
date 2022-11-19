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

//Using GET parameters to display the selected ticket/item along with respective date
var prevN = 0;

function findGetParameter(parameterName) { // Gets the GET variables
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

if(findGetParameter("eventID")) { // Check if parameter matches
   displayTheBox(findGetParameter("eventID"));
}
var prevN = 0;

function displayTheBox(n) { // Display the selected ticket/item
    var products = document.getElementsByClassName("displayBlock");
    products[prevN].className = products[prevN].className.replace(" show", "");
    products[n].className += " show";

    prevN = n;
}


var preN = 0;

if(findGetParameter("sessionID")) { // Check if parameter matches
    displayTheDate(findGetParameter("sessionID"));
 }
 
 function displayTheDate(n) { // Display the selected date
     var products = document.getElementsByClassName("displayDate");
     products[preN].className = products[preN].className.replace(" show", "");
     products[n].className += " show";

     preN = n;
 }

window.onload = (event) => {
 addTicketToForm();
 resetForm();
};

//reset form
function resetForm() {
  form.reset();
}

//Adding the selected ticket/item to the form
const form = document.getElementById("checkoutForm");
function addTicketToForm() {
  var show = document.createElement("input");
  var date = document.createElement("input");
  show.setAttribute("name", "eventID");
  date.setAttribute("name", "sessionID");
  show.setAttribute("type", "hidden");
  date.setAttribute("type", "hidden");
  //TODO?: translate numbers into something understandable
  show.setAttribute("value", findGetParameter("eventID"));
  date.setAttribute("value", findGetParameter("sessionID"));
  form.appendChild(show);
  form.appendChild(date);
}

//payment options
function toggle(n) {
  switch(n) {
    case 'off':
      toggleOff();
      break;
    case 'formCredit':
      toggleCredit();
      break;
    case 'formDebit':
      toggleDebit();
      break;
    case 'formPaypal':
      togglePaypal();
      break;
    default:
      break;
  }
}

//remove payment option
function toggleOff() {
  if (document.getElementById("paymentOption") != null) {
    document.getElementById("paymentOption").remove();
  } else {
    return;
  }
}

//Add credit card option to the form
function toggleCredit(){
  //delete other payment option
  toggleOff();
  //div
  var paymentOption = document.createElement("div");
  paymentOption.setAttribute("id", "paymentOption");

  //header
  var header = document.createElement("h5");
  header.setAttribute("class", "mb-3");
  header.innerHTML = "Credit Card Details";

  //credit card - name
  var row1 = document.createElement("div");
  row1.setAttribute("class", "row");
  var row1col1 = document.createElement("div");
  row1col1.setAttribute("class", "col-md-6 mb-3");
  var row1label = document.createElement("label");
  row1label.innerHTML = "Name on card";
  var row1input = document.createElement("input");
  row1input.setAttribute("type", "text");
  row1input.setAttribute("class", "form-control");
  row1input.setAttribute("id", "cc-name");
  row1input.setAttribute("placeholder", "");
  row1input.setAttribute("required", "");
  row1input.setAttribute("name", "creditCard-name");
  var row1small = document.createElement("small");
  row1small.setAttribute("class", "text-muted");
  row1small.innerHTML = "Full name as displayed on card";
  var row1div = document.createElement("div");
  row1div.setAttribute("class", "invalid-feedback");
  row1div.innerHTML = "Name on card is required";
  row1.appendChild(row1col1);
  row1col1.appendChild(row1label);
  row1col1.appendChild(row1input);
  row1col1.appendChild(row1small);
  row1col1.appendChild(row1div);

  //credit card - number
  var row1col2 = document.createElement("div");
  row1col2.setAttribute("class", "col-md-6 mb-3");
  var row1label2 = document.createElement("label");
  row1label2.innerHTML = "Credit card number";
  var row1input2 = document.createElement("input");
  row1input2.setAttribute("type", "text");
  row1input2.setAttribute("class", "form-control");
  row1input2.setAttribute("id", "cc-number");
  row1input2.setAttribute("placeholder", "");
  row1input2.setAttribute("required", "");
  row1input2.setAttribute("name", "creditCard-number");
  var row1div2 = document.createElement("div");
  row1div2.setAttribute("class", "invalid-feedback");
  row1div2.innerHTML = "Credit card number is required";
  row1.appendChild(row1col2);
  row1col2.appendChild(row1label2);
  row1col2.appendChild(row1input2);
  row1col2.appendChild(row1div2);

  //credit card - expiration
  var row2 = document.createElement("div");
  row2.setAttribute("class", "row");
  var row2col1 = document.createElement("div");
  row2col1.setAttribute("class", "col-md-3 mb-3");
  var row2label = document.createElement("label");
  row2label.innerHTML = "Expiration";
  var row2input = document.createElement("input");
  row2input.setAttribute("type", "datepicker");
  row2input.setAttribute("class", "form-control");
  row2input.setAttribute("id", "cc-expiration");
  row2input.setAttribute("placeholder", "");
  row2input.setAttribute("required", "");
  row2input.setAttribute("name", "creditCard-expiration");
  var row2div = document.createElement("div");
  row2div.setAttribute("class", "invalid-feedback");
  row2div.innerHTML = "Expiration date required";
  row2.appendChild(row2col1);
  row2col1.appendChild(row2label);
  row2col1.appendChild(row2input);
  row2col1.appendChild(row2div);

  //credit card - security code
  var row2col2 = document.createElement("div");
  row2col2.setAttribute("class", "col-md-3 mb-3");
  var row2label2 = document.createElement("label");
  row2label2.innerHTML = "Security Code";
  var row2input2 = document.createElement("input");
  row2input2.setAttribute("type", "text");
  row2input2.setAttribute("class", "form-control");
  row2input2.setAttribute("id", "cc-cvv");
  row2input2.setAttribute("placeholder", "");
  row2input2.setAttribute("required", "");
  row2input2.setAttribute("name", "creditCard-securityCode");
  var row2div2 = document.createElement("div");
  row2div2.setAttribute("class", "invalid-feedback");
  row2div2.innerHTML = "Security code required";
  row2.appendChild(row2col2);
  row2col2.appendChild(row2label2);
  row2col2.appendChild(row2input2);
  row2col2.appendChild(row2div2);

  //append it all
  paymentOption.appendChild(header);
  paymentOption.appendChild(row1);
  paymentOption.appendChild(row2);
  form.appendChild(paymentOption);
}

//Add debit card option to the form
function toggleDebit(){
  //delete other payment option
  toggleOff();

  //div
  var paymentOption = document.createElement("div");
  paymentOption.setAttribute("id", "paymentOption");

  //header
  var header = document.createElement("h5");
  header.setAttribute("class", "mb-3");
  header.innerHTML = "Debit Card Details";

  //debit card - name
  var row1 = document.createElement("div");
  row1.setAttribute("class", "row");
  var row1col1 = document.createElement("div");
  row1col1.setAttribute("class", "col-md-6 mb-3");
  var row1label = document.createElement("label");
  row1label.innerHTML = "Name on card";
  var row1input = document.createElement("input");
  row1input.setAttribute("type", "text");
  row1input.setAttribute("class", "form-control");
  row1input.setAttribute("id", "dc-name");
  row1input.setAttribute("placeholder", "");
  row1input.setAttribute("required", "");
  row1input.setAttribute("name", "debitCard-name");
  var row1small = document.createElement("small");
  row1small.setAttribute("class", "text-muted");
  row1small.innerHTML = "Full name as displayed on card";
  var row1div = document.createElement("div");
  row1div.setAttribute("class", "invalid-feedback");
  row1div.innerHTML = "Name on card is required";
  row1.appendChild(row1col1);
  row1col1.appendChild(row1label);
  row1col1.appendChild(row1input);
  row1col1.appendChild(row1small);
  row1col1.appendChild(row1div);
  
  //debit card - number
  var row1col2 = document.createElement("div");
  row1col2.setAttribute("class", "col-md-6 mb-3");
  var row1label2 = document.createElement("label");
  row1label2.innerHTML = "Debit card number";
  var row1input2 = document.createElement("input");
  row1input2.setAttribute("type", "text");
  row1input2.setAttribute("class", "form-control");
  row1input2.setAttribute("id", "dc-number");
  row1input2.setAttribute("placeholder", "");
  row1input2.setAttribute("required", "");
  row1input2.setAttribute("name", "debitCard-number");
  var row1div2 = document.createElement("div");
  row1div2.setAttribute("class", "invalid-feedback");
  row1div2.innerHTML = "Debit card number is required";
  row1.appendChild(row1col2);
  row1col2.appendChild(row1label2);
  row1col2.appendChild(row1input2);
  row1col2.appendChild(row1div2);
  
  //debit card - expiration
  var row2 = document.createElement("div");
  row2.setAttribute("class", "row");
  var row2col1 = document.createElement("div");
  row2col1.setAttribute("class", "col-md-3 mb-3");
  var row2label = document.createElement("label");
  row2label.innerHTML = "Expiration";
  var row2input = document.createElement("input");
  row2input.setAttribute("type", "datepicker");
  row2input.setAttribute("class", "form-control");
  row2input.setAttribute("id", "dc-expiration");
  row2input.setAttribute("placeholder", "");
  row2input.setAttribute("required", "");
  row2input.setAttribute("name", "debitCard-expiration");
  var row2div = document.createElement("div");
  row2div.setAttribute("class", "invalid-feedback");
  row2div.innerHTML = "Expiration date required";
  row2.appendChild(row2col1);
  row2col1.appendChild(row2label);
  row2col1.appendChild(row2input);
  row2col1.appendChild(row2div);

  //debit card - security code
  var row2col2 = document.createElement("div");
  row2col2.setAttribute("class", "col-md-3 mb-3");
  var row2label2 = document.createElement("label");
  row2label2.innerHTML = "Security Code";
  var row2input2 = document.createElement("input");
  row2input2.setAttribute("type", "text");
  row2input2.setAttribute("class", "form-control");
  row2input2.setAttribute("id", "dc-cvv");
  row2input2.setAttribute("placeholder", "");
  row2input2.setAttribute("required", "");
  row2input2.setAttribute("name", "debitCard-securityCode");
  var row2div2 = document.createElement("div");
  row2div2.setAttribute("class", "invalid-feedback");
  row2div2.innerHTML = "Security code required";
  row2.appendChild(row2col2);
  row2col2.appendChild(row2label2);
  row2col2.appendChild(row2input2);
  row2col2.appendChild(row2div2);

  //append it all
  paymentOption.appendChild(header);
  paymentOption.appendChild(row1);
  paymentOption.appendChild(row2);
  form.appendChild(paymentOption);
}

//Add paypal option to the form
function togglePaypal(){
  //delete other payment option
  toggleOff();

  //div
  var paymentOption = document.createElement("div");
  paymentOption.setAttribute("id", "paymentOption");

  //header
  var header = document.createElement("h5");
  header.setAttribute("class", "mb-3");
  header.innerHTML = "Paypal Details";

  //paypal - email
  var row1 = document.createElement("div");
  row1.setAttribute("class", "row");
  var row1col1 = document.createElement("div");
  row1col1.setAttribute("class", "col-md-6 mb-3");
  var row1label = document.createElement("label");
  row1label.innerHTML = "Paypal Email";
  var row1input = document.createElement("input");
  row1input.setAttribute("type", "text");
  row1input.setAttribute("class", "form-control");
  row1input.setAttribute("id", "paypal-email");
  row1input.setAttribute("placeholder", "");
  row1input.setAttribute("required", "");
  row1input.setAttribute("name", "paypal-email");
  var row1small = document.createElement("small");
  row1small.setAttribute("class", "text-muted");
  row1small.innerHTML = "Email address associated with your paypal account";
  var row1div = document.createElement("div");
  row1div.setAttribute("class", "invalid-feedback");
  row1div.innerHTML = "Paypal email is required";
  row1.appendChild(row1col1);
  row1col1.appendChild(row1label);
  row1col1.appendChild(row1input);
  row1col1.appendChild(row1small);
  row1col1.appendChild(row1div);

  //append it all
  paymentOption.appendChild(header);
  paymentOption.appendChild(row1);
  form.appendChild(paymentOption);
}