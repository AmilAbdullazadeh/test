// When document has loaded
$(document).ready(function() {
    // When radio button is clicked
    $('.radio-btn').click(() => {
        // Toggle the active class
        $('.radio-inner').toggleClass('active');
        // Toggle the dark class
        $("body").toggleClass("dark");
    })
});
