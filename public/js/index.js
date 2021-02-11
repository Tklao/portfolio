function congratByName() {
    const $congrat = document.getElementById("congrat");
    const getName = prompt("Digite seu nome")
    return $congrat.innerHTML = `Muito Obrigado por sua visita, ${getName}🎉🎉🎉`
}
congratByName()