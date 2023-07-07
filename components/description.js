function displayDescription(location) {
    const descriptionSection            = document.querySelector(".descriptions")
    const descriptionContainer          = document.createElement("div")
    const descriptionTitleContainer     = document.createElement("div")
    const descriptionTitle              = document.createElement("h3")
    const openDescription               = document.createElement("i")
    const closeDescription              = document.createElement("i")
    const textDescription               = document.createElement("p")

    let isOpen                          = true 

    textDescription.textContent         = location.description
    descriptionTitle.textContent        = "description"

    if (isOpen) {
        descriptionContainer.className  = "description"
        closeDescription.className      = "fas fa-chevron-down arrow-hidden"
        openDescription.className       = "fas fa-chevron-up arrow-ok"
        textDescription.className       = "desc-open"
    }
    else {
        descriptionContainer.className  = "desc"
        closeDescription.className      = "fas fa-chevron-down arrow-ok"
        openDescription.className       = "fas fa-chevron-up arrow-hidden"
        textDescription.className       = "desc-close"
    }

    descriptionTitleContainer.className = descriptionContainer.className

    descriptionTitleContainer.setAttribute("id","titre2")
    descriptionTitleContainer.classList.add("titre")
    openDescription.classList.add("fas", "fa-chevron-down")
    closeDescription.classList.add("fas", "fa-chevron-up")

    descriptionTitleContainer.addEventListener("click", () => {
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
            descriptionContainer.className  = "description"
            closeDescription.className      = "fas fa-chevron-down arrow-hidden"
            openDescription.className       = "fas fa-chevron-up arrow-ok"
            textDescription.className       = "desc-open"
        } 
        else {
            descriptionContainer.className  = "desc"
            closeDescription.className      = "fas fa-chevron-down arrow-ok"
            openDescription.className       = "fas fa-chevron-up arrow-hidden"
            textDescription.className       = "desc-close"
        }
    }

    descriptionSection.appendChild(descriptionContainer)
    descriptionContainer.appendChild(descriptionTitleContainer)
    descriptionTitleContainer.appendChild(descriptionTitle)
    descriptionTitleContainer.appendChild(openDescription)
    descriptionTitleContainer.appendChild(closeDescription)
    descriptionContainer.appendChild(textDescription)

}