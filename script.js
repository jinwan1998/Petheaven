// Add an event listener for when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get all the elements with the class "reserve-btn"
    const btns = document.querySelectorAll('.reserve-btn');

    // Loop through each button
    btns.forEach(function (btn) {
        // Add an event listener for when the button is clicked
        btn.addEventListener('click', function () {
            // Get the car data from the button
            const car = this.dataset.car;
            // Update the value of the element with the ID "total" to be the price
            document.querySelector('#car').value = car;
            // Get the price data from the button
            const price = this.dataset.price;
            // Update the value of the element with the ID "total" to be the price
            document.querySelector('#price').value = price;
        });
    });

    // Add an event listener for when the form with the ID "payment-form" is submitted
    document.querySelector('#info-form').addEventListener('submit', function (event) {
        // Prevent the form from being submitted as normal
        event.preventDefault();
        // Get the value of the element with the ID "days"
        const days = document.querySelector('#days').value;
        // Get the value of the element with the ID "price"
        const price = document.querySelector('#price').value;
       
        // Update the value of the element with the ID "total" to be the total price, which is the number of days multiplied by the price per day
        document.querySelector('#total').value = days * price;
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
            // Update the car to be the data from the button
            //car = this.dataset.car;
            // Update the price to be the data from the button
            price = this.dataset.price;
            // Update the value of the element with the ID "car" to be the car
            //document.querySelector('#car').value = car;
            // Update the value of the element with the ID "price" to be the price
            document.querySelector('#price').value = price;
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

document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const days = document.getElementById("days").value;
    const car = document.getElementById("car").value;
    const price = document.getElementById("price").value;
    const total = document.getElementById("total").value;
    const cardNumber = document.getElementById("card-number").value;
    const expDate = document.getElementById("exp-date").value;
    const cvc = document.getElementById("cvc").value;
  
    if (confirm(`Verify your information and click okay to continue process the payment.\n
        Number of Days: ${days}\n
        Vehicle type: ${car}\n
        Price per day $: ${price}\n
        Total $: ${total}\n\n
        <<<< Credit Card info >>>>
        Credit Card Number: ${cardNumber}\n
        Expiration Date: ${expDate}\n
        CVC: ${cvc}`)) {
      // Submit the form
    }
  });
  






 