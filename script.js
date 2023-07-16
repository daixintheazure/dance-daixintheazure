window.addEventListener("load", function() {
    const baseView = this.document.getElementById("default");
    const summary = this.document.getElementById("summary");
    const star = this.document.getElementById("A star is born");
    const firstYear = this.document.getElementById("firstYear");
    const secondYear = this.document.getElementById("secondYear");
    const thirdYear = this.document.getElementById("thridYear");
    const panel = this.document.getElementById("panel");


    baseView.addEventListener("click", function() {
        panel.style.transform = "rotateX(95deg) rotateY(45deg)";

    });

    summary.addEventListener("click", function() {
        panel.style.transform = "rotateX(90deg)";

    });

    star.addEventListener("click", function() {
        panel.style.transform = "rotateY(270deg)";

    });

    firstYear.addEventListener("click", function() {
        panel.style.transform = "rotateY(90deg)";

    });

    secondYear.addEventListener("click", function() {
        panel.style.transform = "rotateX(0deg)";

    });

    thirdYear.addEventListener("click", function() {
        panel.style.transform = "rotateX(180deg) rotateZ(180deg)";

    });
});