document.getElementById("contactBtn").addEventListener("click", function() {
    document.getElementById("contactDialog").style.display = "flex";
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("contactDialog").style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("contactDialog")) {
        document.getElementById("contactDialog").style.display = "none";
    }
});
