function toggleForm() {
    const selectedValue = document.getElementById("form-select").value;
    document.getElementById("obvod-form").style.display = selectedValue === "obvod" ? "block" : "none";
    document.getElementById("obsah-form").style.display = selectedValue === "obsah" ? "block" : "none";
}

const obvodStrA = document.getElementById('strana-a');
const obvodStrB = document.getElementById('strana-b');
const obvodStrC = document.getElementById('strana-c');
const btnObvod = document.getElementById('btnObvod');
const outputObvod = document.getElementById('vysledekObvod');

btnObvod.addEventListener('click', function () {
    event.preventDefault();
    const a = parseFloat(obvodStrA.value) || 0;
    const b = parseFloat(obvodStrB.value) || 0;
    const c = parseFloat(obvodStrC.value) || 0;
    const vystup = a + b + c;
    outputObvod.innerHTML = vystup ? `${vystup} cm` : "Chyba: Zadejte platné hodnoty.";
});

const obsahZakladna = document.getElementById('zakladna');
const obsahVyska = document.getElementById('vyska');
const btnObsah = document.getElementById('btnObsah');
const outputObsah = document.getElementById('vysledekObsah');

btnObsah.addEventListener('click', function () {
    event.preventDefault();
    const zakladna = parseFloat(obsahZakladna.value) || 0;
    const vyska = parseFloat(obsahVyska.value) || 0;
    const vystup = (zakladna * vyska) / 2;
    outputObsah.innerHTML = vystup ? `${vystup} cm²` : "Chyba: Zadejte platné hodnoty.";
})