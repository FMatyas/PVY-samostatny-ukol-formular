function toggleForm() {
    const selectedValue = document.getElementById("form-select").value;
    document.getElementById("obsah-form").style.display = selectedValue === "obsah" ? "block" : "none";
    document.getElementById("obvod-form").style.display = selectedValue === "obvod" ? "block" : "none";
    
}

const obvodStranaA = document.getElementById('strana-a');
const obvodStranaB = document.getElementById('strana-b');
const outputObvod = document.getElementById('vysledekObvod');
const btnObvod = document.getElementById('btnObvod');

btnObvod.addEventListener('click', function () {
    event.preventDefault();
    const a = parseFloat(obvodStranaA.value) || 0;
    const b = parseFloat(obvodStranaB.value) || 0;
    const vystup = (a + b) * 2;
    outputObvod.innerHTML = vystup ? `${vystup} cm` : "Chyba: Zadejte platné hodnoty.";
});

const obsahStrana = document.getElementById('strana');
const obsahVyska = document.getElementById('vyska');
const outputObsah = document.getElementById('vysledekObsah');
const btnObsah = document.getElementById('btnObsah');


btnObsah.addEventListener('click', function () {
    event.preventDefault();
    const strana = parseFloat(obsahStrana.value) || 0;
    const vyska = parseFloat(obsahVyska.value) || 0;
    const vystup = strana * vyska;
    outputObsah.innerHTML = vystup ? `${vystup} cm²` : "Chyba: Zadejte platné hodnoty.";
})
