// When document has loaded
$(document).ready(function() {
  // Generate random color on button click
    $(".generate-btn").click(function() {
        // Run for loop to generate color randomly
        var randomColor = "#";
        var letters = "0123456789abcdef";
        for (let i = 0; i < 6; i++) {
            randomColor += letters[Math.floor(Math.random() * 16)] // 0 a 3 4 e f
        }

        // Add hex color code to input field
        $("#inputField").val(randomColor);
        // Change the text color of input field
        $("#inputField").css("color", randomColor);
        // Change the border-color of input field
        $("#inputField").css("border-color", randomColor);
        // Change the .color-preview and .copy-btn button background color
        $(".color-preview, .copy-btn").css("background-color", randomColor);
        // Change the text of .code span to randomColor
        $(".alert-msg .code").text(randomColor);

        // Create two functions to add and remove the animation class on alert-msg
        function add() {
            $(".alert-msg").addClass("slide-effect");
        }

        function remove() {
            $(".alert-msg").removeClass("slide-effect");
        }

        // Copy Color code on button click
        $(".copy-btn").click(function() {
            // Call the functions add and reomove animation class on alert-msg
            add();
            // select input field
            $("#inputField").select();
            // copy text
            document.execCommand("copy");

            setTimeout(remove, 5000);
        })
    })

});
