// When document has loaded
$(document).ready(function() {

    let baseUrl = 'http://localhost:3001'

    const data = {
        id: 1,
        text: 'This is a joke'
    }

    // Get all the jokes with AJAX
    $.ajax({
        url: baseUrl + '/jokes',
        method: 'POST',
        data: JSON.stringify(data),
        success: function(data) {
            var randomIndex = Math.floor(Math.random() * data.length); // 15, 14, 5
            $("#wrapper").text(data[randomIndex].text);
        },
        error: function(error) {
            console.log(error);
        }
    })

});
