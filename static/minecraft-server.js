// Enkel passordbeskyttelse
const correctPasswordHash = "5144e5cd60edec0ea0d20537f8677a4aaea48427a1f367b0726a9021cbf43639"; // Erstatt med hash av passordet ditt
const passwordOverlay = document.getElementById("passwordOverlay");
const passwordInput = document.getElementById("passwordInput");
const submitPasswordButton = document.getElementById("submitPassword");
const mainContent = document.getElementById("mainContent");
const messageDiv = document.getElementById("message"); // Tilbakemeldingsdiv
const wolButton = document.getElementById("wolButton");

// Sjekk om brukeren allerede har logget inn
if (sessionStorage.getItem("loggedIn") === "true") {
    passwordOverlay.style.display = "none"; // Skjuler overlay
    mainContent.style.display = "block"; // Viser innholdet
} else {
    // Hvis ikke, viser vi overlay for innlogging
    passwordOverlay.style.display = "flex"; 
}

submitPasswordButton.addEventListener("click", function() {
    const passwordHash = CryptoJS.SHA256(passwordInput.value).toString();
    if (passwordHash === correctPasswordHash) {
        sessionStorage.setItem("loggedIn", "true"); // Lagre innloggingsstatus i sessionStorage
        passwordOverlay.style.display = "none"; // Skjuler overlay
        mainContent.style.display = "block"; // Viser innholdet
    } else {
        messageDiv.textContent = "Feil passord!"; // Feilmelding ved feil passord
        messageDiv.style.display = "block"; // Viser feilmelding
    }
});

// WOL-knappen
document.getElementById("wolButton").addEventListener("click", function() {
    // Endre knappens tekst og stil for å indikere at forespørselen er sendt
    wolButton.disabled = true; // Deaktiver knappen midlertidig
    wolButton.textContent = "Sender forespørsel..."; // Endre teksten

    var iframe = document.getElementById("wolIframe");
    iframe.src = "https://www.depicus.com/wake-on-lan/woli?m=C8D3FF4437DB&i=84.211.133.68&s=255.255.255.0&p=9";

    // Simulerer en forsinkelse (f.eks. 0.5 sekunder) for å vise at forespørselen sendes
    setTimeout(function() {
        messageDiv.classList.add("show");
        wolButton.textContent = "Forespørsel sendt"; // Tilbakestill teksten
    }, 500);

    setTimeout(function() {
        messageDiv.classList.remove("show");
        wolButton.disabled = false; // Aktiver knappen igjen
        wolButton.textContent = "Start server"; // Tilbakestill teksten
    }, 60000);
});