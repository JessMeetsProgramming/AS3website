//run script when document has loaded
$(document).ready(function() {

    
    // if screen width is greater than 600px run the script
    if (document.documentElement.clientWidth > 600) {
    
        // declare slideindex variable to count slides
        var slideIndex = 0;
        // run function
        carousel();

        // function to chnage the image every 6 seconds
        function carousel() {
            // counter
            var i;
            // each slide
            var x = document.getElementsByClassName("mySlides");
            // if the number of slides is greater than 0 add 1 to counter (i)
            for (i = 0; i < x.length; i++) {
                // change slide 1 display value to none
                x[i].style.display = "none";
            
            }
            // increase value of slideIndex by 1
            slideIndex++;
            // if slide index is greater than the number of slides
            if (slideIndex > x.length) {
                slideIndex = 1
            }
            // change slide display to block
            x[slideIndex-1].style.display = "block";
            setTimeout(carousel, 6000); // Change image every 6 seconds
            
        }

    }

});   




