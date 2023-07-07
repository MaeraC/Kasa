function displayEquipments(location) {
    const equipmentsSection             = document.querySelector(".descriptions")
    const equipmentsContainer           = document.createElement("div")
    const equipmentsTitleContainer      = document.createElement("div")
    const equipmentsTitle               = document.createElement("h3")
    const openDescription               = document.createElement("i")
    const closeDescription              = document.createElement("i")
    const equipmentsList                = document.createElement("ul")
    const equipments                    = location.equipments
    let isOpen                          = true 
   
    equipmentsTitle.textContent         = "Equipements"
    equipmentsTitleContainer.className  = equipmentsContainer.className

    equipments.forEach((item) => {
        const li = document.createElement("li")
        li.textContent = item
        li.classList.add("equipments")
        equipmentsList.appendChild(li)
    })

    if (isOpen) {
        equipmentsContainer.className   = "description"
        closeDescription.className      = "fas fa-chevron-down arrow-hidden"
        openDescription.className       = "fas fa-chevron-up arrow-ok"
        equipmentsList.className        = "desc-open"
    }
    else {
        equipmentsContainer.className   = "desc"
        closeDescription.className      = "fas fa-chevron-down arrow-ok"
        openDescription.className       = "fas fa-chevron-up arrow-hidden"
        equipmentsList.className        = "desc-close"
    }

    equipmentsTitleContainer.addEventListener("click", () => {
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
            equipmentsContainer.className   = "description"
            closeDescription.className      = "fas fa-chevron-down arrow-hidden"
            openDescription.className       = "fas fa-chevron-up arrow-ok"
            equipmentsList.className        = "desc-open"
        } 
        else {
            equipmentsContainer.className   = "desc"
            closeDescription.className      = "fas fa-chevron-down arrow-ok"
            openDescription.className       = "fas fa-chevron-up arrow-hidden"
            equipmentsList.className        = "desc-close"
        }
    }
    
    equipmentsTitleContainer.setAttribute("id","titre2")
    equipmentsTitleContainer.classList.add("titre")

    equipmentsSection.appendChild(equipmentsContainer)
    equipmentsContainer.appendChild(equipmentsTitleContainer)
    equipmentsTitleContainer.appendChild(equipmentsTitle)
    equipmentsTitleContainer.appendChild(openDescription)
    equipmentsTitleContainer.appendChild(closeDescription)
    equipmentsContainer.appendChild(equipmentsList)
}