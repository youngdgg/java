document.addEventListener("DOMContentLoaded", function () {
    var bewegendeDiv = document.getElementById("bewegendeDiv");
    var positie = 0;

    function beweegNaarRechts() {
        positie += 5;

        if (positie <= window.innerWidth - bewegendeDiv.offsetWidth) {
            bewegendeDiv.style.left = positie + "px";
            requestAnimationFrame(beweegNaarRechts);
        }
    }

    beweegNaarRechts();
});