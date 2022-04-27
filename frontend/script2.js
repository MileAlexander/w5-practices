const beerCardComponent = function (name, company, type) {
    return`
        <div class="card">
            <h1 class="beerName">${name}</h1>
            <h2 class="beerCompany">${company}</h2>
            <h3 class="beerType">${type}</h3>
        </div>
    `
}

const loadEvent = function () {
    const rootElement = document.getElementById("root");

    for (const beer of beers.cards) {

        rootElement.insertAdjacentHTML("beforeend", beerCardComponent(beer.title, beer.sub, beer.text))

    }
}

window.addEventListener("load", loadEvent)