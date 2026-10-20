// Get HTML elements
let pickup = document.getElementById("pickup");
let drop = document.getElementById("destination");
let transport = document.getElementById("transportSelection");
let payment = document.getElementById("paymentMethod");
let confirmation = document.getElementById("confirmation");
let driverDetails = document.getElementById("driverDetails");
let bookride = document.getElementById("bookRideBtn");

// Driver details for each ride
let drivers = {
    Bike: {
        name: "Shankhar",
        vehicle: "Bike",
        number: "MH12 XY 8462",
        rating: "4.8"
    },

    Auto: {
        name: "Mohit",
        vehicle: "Auto",
        number: "MH12 CD 8392",
        rating: "4.5"
    },

    Car: {
        name: "Rahul",
        vehicle: "White Swift",
        number: "MH12 AB 1234",
        rating: "4.7"
    },

    Sharing: {
        name: "Amit",
        vehicle: "Shared Car",
        number: "MH12 EF 4567",
        rating: "4.6"
    }
};

// Book Ride button
bookride.addEventListener("click", function () {

    // Validate locations
    if (pickup.value.trim() === "" || drop.value.trim() === "") {

        confirmation.innerHTML = `
            <h3>Please enter both locations.</h3>
        `;

        driverDetails.innerHTML = "";
        return;
    }

    // Get selected ride and driver
    let selectedRide = transport.value;
    let driver = drivers[selectedRide];

    // Show booking confirmation
    confirmation.innerHTML = `
        <h3>✅ Ride Booked Successfully!</h3>
        <p><strong>Pickup:</strong> ${pickup.value}</p>
        <p><strong>Destination:</strong> ${drop.value}</p>
        <p><strong>Ride:</strong> ${selectedRide}</p>
        <p><strong>Payment:</strong> ${payment.value}</p>
        <p><strong>Ride Code:</strong> RN4821</p>
    `;

    // Show details of selected driver
    driverDetails.innerHTML = `
        <h3>🚕 Your Driver Details</h3>
        <p><strong>Driver:</strong> ${driver.name}</p>
        <p><strong>Vehicle:</strong> ${driver.vehicle}</p>
        <p><strong>Vehicle Number:</strong> ${driver.number}</p>
        <p><strong>Rating:</strong> ⭐ ${driver.rating}</p>
    `;

}

 );