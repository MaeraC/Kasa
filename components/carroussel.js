function displayCarroussel(location) {
    const carrousselSection             = document.querySelector(".carroussel")
    const carrousselContainer           = document.createElement("div")
    const nextImage                     = document.createElement("i")
    const previousImage                 = document.createElement("i")
    const pictures                      = location.pictures

    let slideIndex                      = 1
   
    carrousselContainer.classList.add("carroussel-container")
    nextImage.classList.add("fas", "fa-chevron-right")
    previousImage.classList.add("fas", "fa-chevron-left")

    pictures.forEach((picture) => {
        const slideImage                = document.createElement("div")
        const image                     = document.createElement("img")

        image.setAttribute("src", picture)
        image.setAttribute("alt", "Logement de " + location.title)

        slideImage.classList.add("slide-image") // slideshow slide

        carrousselContainer.appendChild(slideImage)
        slideImage.appendChild(image)
        carrousselContainer.appendChild(nextImage)
        carrousselContainer.appendChild(previousImage)
    })

    showSlides(slideIndex)

    function plusSlides(n) {
       showSlides(slideIndex += n)
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide-image")

        if (n > slides.length) {
            slideIndex = 1
        }

        if (n < 1) {
            slideIndex = slides.length
        }

        for (i=0; i < slides.length; i++) {
            slides[i].style.display = "none"
        }

        if (slides[slideIndex -1]) {
            slides[slideIndex -1].style.display = "block"
        }
    }
 
    nextImage.addEventListener("click", () => {
        plusSlides(-1)
    })

    previousImage.addEventListener("click", () => {
        plusSlides(1)
    })

    carrousselSection.appendChild(carrousselContainer)
}