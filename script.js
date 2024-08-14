// Handle form submission, display results to the user if
// the form fields are filled in correctly
function handleForm(event) {
  event.preventDefault();
  
  clearFeedback();
  
  let form = event.target;
  let formValidated = validateAnswer(form);
  if (formValidated) {
    let button = document.getElementById("Submit");
    button.innerText = "Sent";
    
    // Call calculateTipAndTotal first
calculateTipAndTotal(); 
    
    // Update the display
    let totalWithTip = document.getElementById("totalWithTip");
    totalWithTip.innerText = "Total with tip: $" + totalAmount.toFixed(2);
    let perPerson = document.getElementById("perPerson");
    perPerson.innerText = "Each person pays: $" + amountPerPerson.toFixed(2); 
  }
}
// Check that username provided by the user is "good","poor"or "excellent"
// Provide feedback for the user if the username is none of those words
// return true or false to indicate if the username is validated
function validateAnswer(form) {
  let serviceRating = form.serviceRating.value;
  let feedback = document.getElementById("feedback");

  if (serviceRating === "poor" || serviceRating === "good" || serviceRating === "excellent") {
    feedback.innerText = "Thank you for your rating!";
    feedback.style.color = "green"; 
    return true;
  } else {
    feedback.innerText = "Invalid response. Please enter a valid service rating (poor, good, or excellent).";
    feedback.style.color = "red"; 
    return false;
  }
}
// Clear feedback from web page
function clearFeedback() {
  let feedback = document.getElementById("serviceRatingFeedback");
  feedback.innerText = ""; 
}

// Calculate TipAnd Total and return the result
function calculateTipAndTotal() {
  let billAmount = parseFloat(document.getElementById("billTotal").value);
  let serviceRating = document.getElementById("serviceRating").value;
  let numPaying = parseInt(document.getElementById("numPaying").value);
  

  let tipPercentage = 0;
  if (serviceRating === "excellent") {
    tipPercentage = 0.20;
  } else if (serviceRating === "good") {
    tipPercentage = 0.10;
  } else {
    tipPercentage = 0; // Add a default tip percentage for other cases
  }

  totalAmount = billAmount + (billAmount * tipPercentage);
  amountPerPerson = totalAmount / numPaying;
  return {totalAmount, amountPerPerson} ;
}

// Move Tipulator box to the right-left and button is clicked.
document.getElementById("rightButton").addEventListener("click", moveRight);
document.getElementById("leftButton").addEventListener("click", moveLeft);
document.getElementById("closeButton").addEventListener("click", closePage);

function moveRight() {
  let box = document.getElementById("tipulator-wrapper");
  box.style.transform = "translateX(500px)";
}

function moveLeft() {
  let box = document.getElementById("tipulator-wrapper");
  box.style.transform = "translateX(0)";
}
// Show message on closing the form
function closePage() {
  document.write("<h1>Thank you for using the tipulator</h1>");
}