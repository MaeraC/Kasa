const aboutSection = document.querySelector(".about")

const aboutArray = [
    {
        "title": "Fiabilité",
        "text": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
        "title": "Respect",
        "text": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        "title": "Service",
        "text": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
        "title": "Sécurité",
        "text": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
]

let isOpen                          = true 

aboutArray.forEach((bloc) => {
    const aboutBloc = document.createElement("div") // equipemnt container

    aboutBloc.innerHTML = `
        <div class="titre">
            <h3>${bloc.title}</h3>
            <i class="fas fa-chevron-down"></i>
            <i class="fas fa-chevron-up"></i>
        </div>
        <p class="text">${bloc.text}</p> 
    `

    const titleAbout = aboutBloc.querySelector(".titre")
    const textAbout = aboutBloc.querySelector(".text")
    const closeDescription = aboutBloc.querySelector(".fa-chevron-down")
    const openDescription = aboutBloc.querySelector(".fa-chevron-up")

    if (isOpen) {
        aboutBloc.className   = "description1"
        closeDescription.className      = "fas fa-chevron-down arrow-hidden"
        openDescription.className       = "fas fa-chevron-up arrow-ok"
        textAbout.className        = "desc-open1"
    }
    else {
        aboutBloc.className   = "desc1"
        closeDescription.className      = "fas fa-chevron-down arrow-ok"
        openDescription.className       = "fas fa-chevron-up arrow-hidden"
        textAbout.className        = "desc-close1"
    } 

    titleAbout.addEventListener("click", () => {
        if (isOpen) {
            setIsOpen(false)
        }
        else {
            setIsOpen(true)
        }
    })

    function setIsOpen(value) {
        isOpen = value

        if (isOpen) {
            aboutBloc.className   = "description1"
            closeDescription.className      = "fas fa-chevron-down arrow-hidden"
            openDescription.className       = "fas fa-chevron-up arrow-ok"
            textAbout.className        = "desc-open1"
        } 
        else {
            aboutBloc.className   = "desc1"
            closeDescription.className      = "fas fa-chevron-down arrow-ok"
            openDescription.className       = "fas fa-chevron-up arrow-hidden"
            textAbout.className        = "desc-close1"
        }
    }

    titleAbout.setAttribute("id","titre2")
    titleAbout.classList.add("titre")

    aboutSection.appendChild(aboutBloc)
    
})
