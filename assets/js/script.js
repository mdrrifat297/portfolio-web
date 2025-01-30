// Get the dialog and buttons
const openDialogButton = document.getElementById("openDialogButton");
const customDialog = document.getElementById("customDialog");
const closeDialogButton = document.getElementById("closeDialogButton");

// Open the dialog box when the button is clicked
openDialogButton.onclick = function() {
    customDialog.style.display = "block";
}

// Close the dialog box when the close button is clicked
closeDialogButton.onclick = function() {
    customDialog.style.display = "none";
}

// Close the dialog box if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == customDialog) {
        customDialog.style.display = "none";
    }
}