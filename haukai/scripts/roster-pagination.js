// when the document has loaded run the script
$(document).ready(function() {

    // search page for element with class name table1 and declare constant
    const table1 = document.querySelector(".table1");
    // display table 1 (current week) on page load
    table1.classList.toggle("active");
    // search page for other relevant elements - table 2 and buttons
    const table2 = document.querySelector(".table2");
    const next = document.querySelector(".next");
    const previous = document.querySelector(".previous");
    // disable button on page load
    previous.disabled = true;

    // wait for click on next or previous buttons
    next.addEventListener("click", nextFunction);
    previous.addEventListener("click", previousFunction);

    // function to view roster for next week 
    function nextFunction() {
        // make table2 active to display
        table2.classList.toggle("active");
        // remove active class from table1 so that it is hidden
        table1.classList.remove("active");
        // prevent click when active
        next.disabled = true;
        previous.disabled = false;
    }

    // function to view roster of the current week
    function previousFunction() {
        // reverse of the above function
        table1.classList.toggle("active");
        table2.classList.remove("active");
        previous.disabled = true;
        next.disabled = false;
    }

});