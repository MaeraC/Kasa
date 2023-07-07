const footer = document.querySelector(".footer")
const logo = document.createElement("img")
const copyrights = document.createElement("p")

logo.setAttribute("src", "https://kasaa-app.netlify.app/assets/logo-footer.png")

copyrights.textContent = "© 2020 Kasa. Tous droits réservés."

footer.appendChild(logo)
footer.appendChild(copyrights)