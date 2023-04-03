document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
   if (localStorage.getItem("kirjautunut") === "kylla") {
        document.getElementById("tervetulo_teksti").textContent += localStorage.getItem("nimi");
}
}

function kirjaudu() {
localStorage.setItem("nimi", document.getElementById("nimi").value);
localStorage.setItem("kirjaudu_ulos", document.getElementById("kirjaudu_ulos").value);
localStorage.setItem("kirjautunut", "kylla");
}
