// Add an event listener for when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get all the elements with the class "reserve-btn"
    const btns = document.querySelectorAll('.reserve-btn');

    // Loop through each button
    btns.forEach(function (btn) {
        // Add an event listener for when the button is clicked
        btn.addEventListener('click', function () {
            // Get the price data from the button
            const price = this.dataset.price;
            // Update the value of the element with the ID "total" to be the price
            document.querySelector('#total').value = price;
        });
    });

    // Add an event listener for when the form with the ID "payment-form" is submitted
    document.querySelector('#payment-form').addEventListener('submit', function (event) {
        // Prevent the form from being submitted as normal
        event.preventDefault();
        // Get the value of the element with the ID "days"
        const days = document.querySelector('#days').value;
        // Get the value of the element with the ID "total"
        const total = document.querySelector('#total').value;
        // Update the value of the element with the ID "total" to be the total price, which is the number of days multiplied by the price per day
        document.querySelector('#total').value = days * total;
    });
});

// Add an event listener for when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize the price to 0
    let price = 0;
    // Get all the elements with the class "reserve-btn"
    const btns = document.querySelectorAll('.reserve-btn');

    // Loop through each button
    btns.forEach(function (btn) {
        // Add an event listener for when the button is clicked
        btn.addEventListener('click', function () {
            // Update the price to be the data from the button
            price = this.dataset.price;
            // Update the value of the element with the ID "total" to be the price
            document.querySelector('#total').value = price;
        });
    });

    // Add an event listener for when the form with the ID "payment-form" is submitted
    document.querySelector('#payment-form').addEventListener('submit', function (event) {
        // Prevent the form from being submitted as normal
        event.preventDefault();
        // Get the value of the element with the ID "days"
        const days = document.querySelector('#days').value;
        // If the price is not 0
        if (price !== 0) {
            // Update the value of the element with the ID "total" to be the total price, which is the number of days multiplied by the price per day
            document.querySelector('#total').value = days * price;
        }
    });
});








