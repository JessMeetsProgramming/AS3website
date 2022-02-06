
// when the document has loaded run the script
$(document).ready(function() {

  // get div and button elements by id
  const button1 = document.querySelector("#button1");
  const button2 = document.querySelector("#button2");
  const events = document.getElementById("functions-section");
  const bookings = document.getElementById("booking-section");
  
  // wait for click event on buttons
  button1.addEventListener("click", myFunction1);
  button2.addEventListener("click", myFunction2);

  function myFunction1() {

    //swap from displaying booking form to events
    bookings.style.display = "none";
    events.style.display = "block";
    //change button state to reflect the section displayed
    button1.disabled = true;
    button2.disabled = false;

  }
    
  function myFunction2() {

    //swap from displaying booking form to events
    events.style.display = "none";
    bookings.style.display = "block";
    //change button state to reflect the section displayed
    button2.disabled = true;
    button1.disabled = false;

  }

});
