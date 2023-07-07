function displayPresentation(location) {
    const presentationSection           = document.querySelector(".presentation")
    const partProfile                   = document.createElement("div")
    const partInformations              = document.createElement("div")
    const listTags                      = document.createElement("ul")
    const rating                        = document.createElement("div")
    const modalReserved              = document.createElement("div")
    const tags                          = location.tags
    const stars                         = []

    partProfile.innerHTML = `
        <div class="container-pl">
            <h1>${location.title}</h1>
            <p class="part-localisation">${location.location}</p>
        </div>
        <ul>
            <li>
                <button class="btn-reservation">Réserver</button>
            </li>
            <li>
                <p>${location.host.name}</p>
                <img src=${location.host.picture} alt=${location.host.name} />
            </li>
        </ul>
    `

    tags.forEach((tag) => {
        const tagInfo                   = document.createElement("li")
        tagInfo.innerText               = tag
        listTags.appendChild(tagInfo)
    })

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push("<i class='far fa-star' alt=''/>")
        }
        else {
            stars.push("<i class='fas fa-star' alt=''/>")
        }
    }

    rating.innerHTML = stars.join('')
   
    partProfile.classList.add("part-profile")
    partInformations.classList.add("part-informations")
    rating.classList.add("rating")
    modalReserved.classList.add("modal-reservation")
   
    presentationSection.appendChild(partProfile)
    presentationSection.appendChild(partInformations)
    partInformations.appendChild(listTags)
    partInformations.appendChild(rating)
    presentationSection.appendChild(modalReserved)

    modalReservation()
}