document.addEventListener("DOMContentLoaded", function () {
    var bewegendeDiv = document.getElementById("bewegendeDiv");
    var positie = 0;
    var richting = 1;

    function beweeg() {
        positie += 5 * richting;

        if (positie <= 0) {
            richting = 1;
        } else if (positie >= window.innerWidth - bewegendeDiv.offsetWidth) {
            richting = -1;
        }

        bewegendeDiv.style.left = positie + "px";

        requestAnimationFrame(beweeg);
    }

    beweeg();
});