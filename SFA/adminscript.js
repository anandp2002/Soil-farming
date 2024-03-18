document.getElementById("soil-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Retrieve form values
    const soilName = document.getElementById("soil-name").value;
    const soilDescription = document.getElementById("soil-description").value;
    // Perform actions with the form data (e.g., send to Firebase)
    console.log("Soil Name:", soilName);
    console.log("Description:", soilDescription);
    // Clear the form fields
    document.getElementById("soil-name").value = "";
    document.getElementById("soil-description").value = "";
});

document.getElementById("distributor-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Retrieve form values
    const distributorName = document.getElementById("distributor-name").value;
    const distributorAddress = document.getElementById("distributor-address").value;
    // Perform actions with the form data (e.g., send to Firebase)
    console.log("Distributor Name:", distributorName);
    console.log("Address:", distributorAddress);
    // Clear the form fields
    document.getElementById("distributor-name").value = "";
    document.getElementById("distributor-address").value = "";
});
