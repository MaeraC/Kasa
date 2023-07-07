function displayFilters() {
    const filtersSection = document.querySelector(".filters")

    filtersSection.innerHTML = `
        <div class="properties">
            <span>Types de propriété</span>
            <select name="properties" class="properties">
                <option value="">Choisir</option>
                <option value="Maison">Maison</option>
                <option value="Appartement">Appartement</option>
                <option value="Studio">Studio</option>
                <option value="Loft">Loft</option>
                <option value="Bungalow">Bungalow</option>
            </select>
        </div>
        <div class="price-per-night">
            <span>Prix/Nuit</span>
            <select name="price-per-night" class="price-per-night">
                <option value="">Choisir</option>
                <option value="20 50">20€ - 50€</option>
                <option value="50 100">50€ - 100€</option>
                <option value="100 200">100€ - 200€</option>
            </select>
        </div>
        <div class="Equipment">
            <span>Equipements</span>
            <select name="equipments" class="Equipment">
                <option value="">Choisir</option>
                <option value="wi-fi">Wi-fi</option>
                <option value="Climatisation">Climatisation</option>
                <option value="Parking">Parking</option>
                <option value="Douche italienne">Douche italienne</option>
                <option value="Cuisine équipée">Cuisine équipée</option>
            </select>
        </div>
    ` 

    const selects = filtersSection.querySelectorAll("select")
    const locations = document.querySelectorAll(".card")
    const cardList = document.querySelector(".card-list")
    
    selects.forEach((select) => {
        // au clic du select
        select.addEventListener("change", () => {
            // récupère la valeur de l'option choisie
            const selectValue = select.value
            const [min, max] = selectValue.split(' ').map(Number)
            const filteredLocations = []
            
            locations.forEach((location) => {
                const priceLoc = location.dataset.price
                const propertiesLoc = location.dataset.property
                const equipmentsLoc = location.dataset.equipments

                // si la valeur de l'option correspond au prix de la loc
                if (priceLoc >= min && priceLoc <= max) {
                    filteredLocations.push(location)
                }

                // si la valeur de l'option correspond au type de propriété de la loc
                if (propertiesLoc === selectValue) {
                    filteredLocations.push(location)
                }

                // si la valeur de l'option correspond à l'équipement de la loc 
                if (equipmentsLoc.includes(selectValue)) {
                    filteredLocations.push(location)
                } 
            })  

            // alors affiche la loc
            cardList.innerHTML = ""

            filteredLocations.forEach((loc) => {
                cardList.appendChild(loc)
            })
        })
    })



   
}