document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
    let kirjautunut = 'kylla';
    if(kirjautunut === 'kylla') {
        document.getElementByld("tervetulo_teksti").textContent += localStorage.getItem("nimi");
}
}

function kirjaudu(){
localStorage.setItem("nimi", document.getElementByld("nimi").value);
}