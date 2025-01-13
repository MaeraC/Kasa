let locations = []
//fetch("https://kasaa-app.netlify.app/datas/locations.json")

fetch("http://127.0.0.1:5500/datas/locations.json")
.then(res => res.json())
.then(datas => {
    locations = datas

    locations.forEach((location) => {
        // Renvoie chaque card vers la page dynamique locations
        let verifyUrl = new URLSearchParams(window.location.search)
        verifyUrl.has(location.id)
        let param = verifyUrl.get("id")
    
        if (location.id == param) {
            displayCarroussel(location)
            displayPresentation(location)
            displayDescription(location)
            displayEquipments(location)
        }
    })
})

