const modalWindow = {
    $alert: document.getElementById("alert"),
    $congrat: document.getElementById("congrat"),
    $inp: document.getElementById("inp"),

    open() {
        this.$alert.style.display = "block";
    },
    close() {
        if (this.$inp.value == "" || this.$inp.value == null) {
            this.$congrat.innerHTML = `Muito Obrigado por sua visita!!!🎉`;
        } else {
            this.$congrat.innerHTML = `Muito Obrigado por sua visita, ${this.$inp.value}🎉🎉🎉`;
        }
        this.$alert.style.display = "none";
    },
};
setTimeout(() => {
    modalWindow.open();
}, 3000);

document.getElementById("btn").addEventListener("click", () => {
    modalWindow.close();
});