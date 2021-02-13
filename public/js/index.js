function congratByName() {
    const $congrat = document.getElementById("congrat");
    const getName = prompt("Digite seu nome");

    if (getName == "" || getName == null) {
        return ($congrat.innerHTML = `Muito Obrigado por sua visita!!!🎉`);
    } else {
        return ($congrat.innerHTML = `Muito Obrigado por sua visita, ${getName}🎉🎉🎉`);

    }
}
congratByName();