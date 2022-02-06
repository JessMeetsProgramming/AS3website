//run script when document has loaded
document.onreadystatechange = function () {
    if (document.readyState == "complete") {

        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        //wait for click on menu icon
        hamburger.addEventListener("click", mobileMenu);

        // function to make the mobile menu display 
        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        }
    }
}
