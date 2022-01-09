// ===  Opdracht 1 ===
// Maak een object met daarin jouw voornaam (string), achternaam (string), leeftijd (getal) en geboortedatum (date object). De datum hoeft niet geformat te worden.
// Log dit in de terminal.
const itsMeRimmer = {
  name: "Rimmer",
  lastName: "Wijngaarden",
  age: "21",
  dateOfBirth: "24-3-2000",
};
console.log(itsMeRimmer)

// ===  Opdracht 2 ===
// Zorg ervoor dat de volgende string in de terminal wordt gelogd:
// "Hoi! Ik ben <voornaam>, ik ben <leeftijd> jaar oud."
const meItIs = ("Hoi! Ik ben Rimmer, ik ben 21 jaar oud.")
console.log(meItIs)



// === Opdracht 3: bekijk het volgende object ===

const product = {
  productName: "Smeg Waterkoker",
  series: "Smeg jaren 50 retro lijn",
  material: ["roestvrijstaal", "kunststof"],
  color: "creme",
  wireless: false,
  "b-h-d": "17 x 24,6 x 22,3 cm",
};
console.log(product.series);
product.color = "roze";
console.log(product.color);
console.log(product.material[1]);
console.log(product["b-h-d"]);


// 3a. Log de naam van de serie in de terminal.

// 3b. Overschrijf de oude waarde van de property color ("creme") naar "roze". Log het object in de terminal om te checken of het gelukt is.

// 3c. Log de tweede materiaalsoort ("kunststof") in de terminal

// 1d. Log de afmetingen (b-h-d) in de terminal


// === Opdracht 4 ===
// Declareer een variabele met daarin een string die het product beschrijft. Gebruik hiervoor de properties productName en material uit het object.
// ---- Verwachte uitkomst:
// "De Smeg Waterkoker is gemaakt van roestvrijstaal en kunststof"
const discription = {
  "De ${product.productName} is gemaakt van ${product.material[0]} en ${product.material[1]}."
}



