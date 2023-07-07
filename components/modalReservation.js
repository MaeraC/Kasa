function modalReservation() {
    const reservationBtn = document.querySelector(".btn-reservation")
    const modalReservation = document.querySelector(".modal-reservation")
    
    modalReservation.innerHTML = `
            <form>
                <div>
                    <input type="text" placeholder="Votre nom" name="name" />
                    <input type="email" placeholder="Votre e-mail" name="email" />
                    <input type="tel" placeholder="Votre n° de téléphone" name="tel" />
                </div>
                <div>
                    <label for="date-start">Date d'entrée</label>
                    <input type="date" name="date-start" id="date-start" />
                    <label for="time-start">Heure d'entrée</label>
                    <input type="time" name="time-start" id="time-start" />
                </div>
                <div>
                    <label for="date-start">Date de sortie</label>
                    <input type="date" name="date-end" id="date-end" />
                    <label for="time-end">Heure de sortie</label>
                    <input type="time" name="time-end" id="time-end" />
                </div>
                <button class="btn-modal" type="submit">Réserver</button>
                <i class="fas fa-times"></i>
            </form>
    `
    const form = document.querySelector("form")

    form.addEventListener("submit", (e) => {
            e.preventDefault()
    
            const formData = new FormData(form)
    
            const name = formData.get("name")
            const email = formData.get("email")
            const tel = formData.get("tel")
            const dateStart = formData.get("date-start")
            const timeStart = formData.get("time-start")
            const dateEnd = formData.get("date-end")
            const timeEnd = formData.get("time-end")
    
            if (name.trim() === "") {
                showError("name", "Veuillez saisir votre nom.")
                return
            }
            if (email.trim() === "") {
                showError("email", "Veuillez saisir votre e-mail.")
                return
            }
            if (tel.trim() === "") {
                showError("tel", "Veuillez saisir votre numéro de téléphone.")
                return
            }
            if (dateStart.trim() === "") {
                showError("date-start", "Veuillez saisir une date d'entrée.")
                return
            }
            if (timeStart.trim() === "") {
                showError("time-start", "Veuillez saisir une heure d'entrée.")
                return
            }
            if (dateEnd.trim() === "") {
                showError("date-end", "Veuillez saisir une date de sortie.")
                return
            }
            if (timeEnd.trim() === "") {
                showError("time-end", "Veuillez saisir une heure de sortie.")
                return
            }

            form.style.display = "none"

            // Affiche modale de confirmation 
            const modalReservation = document.querySelector(".modal-reservation")
            const confirmationModal = createConfirmationModal(name, email, tel, dateStart, timeStart, dateEnd, timeEnd)
            modalReservation.appendChild(confirmationModal)

            function createConfirmationModal(name, email, tel, dateStart, timeStart, dateEnd, timeEnd) {
                const modal = document.createElement("div")
                modal.classList.add("confirmation-modal")
            
                const heading = document.createElement("h2")
                heading.textContent = "Confirmation de réservation"
            
                const details = document.createElement("div")
                details.innerHTML = `
                    <p><span>${name}</span>, votre réservation a bien été prise en compte, vous recevrez un e-mail de confirmation à cette adresse : 
                    <span>${email}</span> et un SMS au <span>${tel}</span>. </p>
                    <p>Nous vous attendons le <span>${dateStart}</span> à <span>${timeStart}</span>, jusqu'au <span>${dateEnd}</span> à <span>${timeEnd}</span>.</p>
                    <p>À bientôt !</p>
                `
            
                const closeButton = document.createElement("i")
                closeButton.classList.add("fas", "fa-times")
            
                modal.appendChild(heading)
                modal.appendChild(details)
                modal.appendChild(closeButton)
            
                closeButton.addEventListener("click", () => {
                    modalReservation.remove()
                })
            
                return modal
            }
    })
    
    function showError(fieldName, errorMessage) {
        const field = document.querySelector(`[name="${fieldName}"]`)
        const errorElement = document.createElement("div")
        errorElement.textContent = errorMessage
        errorElement.classList.add("error-message")
        field.classList.add("error")
        field.parentNode.insertBefore(errorElement, field.nextSibling)
    }
    
    reservationBtn.addEventListener("click", () => {
        modalReservation.style.display = "flex"
    })

    const btnModal = document.querySelector(".modal-reservation form i")
    btnModal.addEventListener("click", () => {
        modalReservation.style.display = "none"
    })
}