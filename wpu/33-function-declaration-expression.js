

//Function Declaration
function tampilPesan(person){
    alert(`Halo ${person}, ini dari function declaration`);
}

//Function Expression
const tampilPesan2 = function (person) {
    alert(`Halo ${person}, ini dari function expression`);
}

tampilPesan2('Fahreza Bahran');

// Secara umum sama saja, tapi function expression ini digunakan dipemrograman javascript yang lebih lanjut dan lebih modern. Contoh : JQuery menggunakan function expression