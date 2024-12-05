// Funkce pro přepínání mezi formuláři//
function toggleForm() {
    const selectedValue = document.getElementById("form-select").value;
    document.getElementById("obsah-form").style.display = selectedValue === "obsah" ? "block" : "none";
    document.getElementById("obvod-form").style.display = selectedValue === "obvod" ? "block" : "none";
}

// Výpočet obsahu//
const obsahZakladna = document.getElementById('zakladna');
const obsahDruheStrany = document.getElementById('druhaStrana');
const btnObsah = document.getElementById('btnObsah');
const outputObsah = document.getElementById('vysledekObsah');

btnObsah.addEventListener('click', function (event) {
    event.preventDefault();
    const zakladna = parseFloat(obsahZakladna.value) || 0;
    const druhaStrana = parseFloat(obsahDruheStrany.value) || 0;
    const vystupObsahu = (zakladna * druhaStrana) / 2;
    outputObsah.innerHTML = vystupObsahu ? `${vystupObsahu} cm²` : "Chyba: Zadejte platné hodnoty.";
});

// Výpočet obvodu//
const obvodA = document.getElementById('strana-a');
const obvodB = document.getElementById('strana-b');
const obvodC = document.getElementById('strana-c');
const btnObvod = document.getElementById('btnObvod');
const outputObvod = document.getElementById('vysledekObvod');

btnObvod.addEventListener('click', function (event) {
    event.preventDefault();
    const a = parseFloat(obvodA.value) || 0;
    const b = parseFloat(obvodB.value) || 0;
    const c = parseFloat(obvodC.value) || 0;
    
    // Kontrola, zda jsou správné hodnoty pro obvod (přepona c bude vypočítána, pokud není zadána)//
    if (!c) {
        c = Math.sqrt(a * a + b * b);  
        // Výpočet přepony podle Pythagorovy věty//
    }

    const vystupObvodu = a + b + c;
    outputObvod.innerHTML = vystupObvodu ? `${vystupObvodu} cm` : "Chyba: Zadejte platné hodnoty.";
});
