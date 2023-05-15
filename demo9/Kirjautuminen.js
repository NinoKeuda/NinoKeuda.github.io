document.addEventListener("DOMContentLoaded", tarkistaKirjautuminen);

function tarkistaKirjautuminen() {
  // Tarkistetaan, onko käyttäjä kirjautunut sisään
  if (localStorage.getItem("kirjautunut") === "kylla") {
    // Jos käyttäjä on kirjautunut sisään, lisätään hänen nimensä tervehdystekstiin
    const tervetuloTeksti = document.getElementById("tervetulo_teksti");
    tervetuloTeksti.textContent += localStorage.getItem("nimi");
  }
}

function kirjaudu() {
  // Tallennetaan käyttäjän syöttämä nimi Local Storageen
  const nimi = document.getElementById("nimi").value;
  localStorage.setItem("nimi", nimi);

  // Tallennetaan "Kirjaudu ulos" -napin elementti Local Storageen
  const kirjauduUlos = document.getElementById("kirjaudu_ulos");
  localStorage.setItem("kirjaudu_ulos", kirjauduUlos);

  // Merkitään käyttäjä kirjautuneeksi sisään
  localStorage.setItem("kirjautunut", "kylla");

  // Piilotetaan kirjautumislomake ja näytetään tervehdysteksti
  document.getElementById("kirjautumislomake").style.display = "none";
  document.getElementById("tervetulo_teksti").style.display = "block";
}

function kirjauduUlos() {
  // Poistetaan kaikki Local Storagen tallennetut tiedot
  localStorage.clear();

  // Näytetään kirjautumislomake ja piilotetaan tervehdysteksti
  document.getElementById("kirjautumislomake").style.display = "block";
  document.getElementById("tervetulo_teksti").style.display = "none";
}
