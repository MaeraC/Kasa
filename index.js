let locations = []

fetch("https://kasaa-app.netlify.app/datas/locations.json")
//fetch("http://127.0.0.1:5500/datas/locations.json")
.then(res => res.json())
.then(datas => {
    locations = datas

    displayCard(locations)
    displayFilters()
})