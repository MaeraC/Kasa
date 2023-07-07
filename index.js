let locations = []

fetch("https://kasaa-app.netlify.app/datas/locations.json")
.then(res => res.json())
.then(datas => {
    locations = datas

    displayCard(locations)
    displayFilters()
})