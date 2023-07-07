function displayCard(locations) {
    const cardListSection = document.querySelector(".card-list")
    
    locations.forEach((location) => {
        const card = document.createElement("a")

        card.setAttribute("href", `https://kasaa-app.netlify.app/pages/locations.html?id=${location.id}`)
        card.setAttribute("data-price", location.price)
        card.setAttribute("data-property", location.property)
        card.setAttribute("data-equipments", location.equipments)

        card.classList.add("card")
        card.innerHTML = `
            <figure>
                <img src=${location.cover} alt=${location.title} />
                <figcaption>${location.title}</figcaption>
            </figure>
            <span class="card-price">${location.price}€</span>
        `

        console.log(card.figure)
        cardListSection.appendChild(card)
    })
}