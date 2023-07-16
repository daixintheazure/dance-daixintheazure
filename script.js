window.addEventListener("load", function () {
    const baseView = this.document.getElementById("default");
    const summary = this.document.getElementById("summary");
    const star = this.document.getElementById("A star is born");
    const firstYear = this.document.getElementById("2021");
    const secondYear = this.document.getElementById("2022");
    const thirdYear = this.document.getElementById("2023");

    baseView.addEventListener("click", funciton() {
        panel.style.transform = "rotateX(95deg) rotateY(45deg)";

    });

    summary.addEventListener("click", funciton() {
        panel.style.transform = "rotateX(90deg)";

    });

    star.addEventListener("click", funciton() {
        panel.style.transform = "rotateY(270deg)";

    });

    firstYear.addEventListener("click", funciton() {
        panel.style.transform = "rotateY(90)deg";

    });

    secondYear.addEventListener("click", funciton() {
        panel.style.transform = "rotateX(0deg)";

    });

    thirdYear.addEventListener("click", funciton() {
        panel.style.transform = "rotateX(180deg) rotateZ(180deg)";

    });
});