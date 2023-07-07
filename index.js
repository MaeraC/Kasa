let locations = []

fetch("https://maerac.github.io/KASAA/datas/locations.json")
.then(res => res.json())
.then(datas => {
    locations = datas

    displayCard(locations)
    displayFilters()
})