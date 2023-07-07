let locations = []

fetch("https://maerac.github.io/KASAA/datas/locations.json")
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
