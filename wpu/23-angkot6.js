console.log("23-angkot6.js");

var jmlAngkot = 10;
var angkotBeroprasi = 6;
var noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroprasi && noAngkot !== 5) {
        console.log("Angkot No. " + noAngkot + " beroprasi dengan baik.");
    } else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
        console.log("Angkot No. " + noAngkot + " sedang lembur.");
    } else {
        console.log("Angkot No. " + noAngkot + " sedang tidak beroprasi.");
    }

    // else if (noAngkot <= jmlAngkot) {
    //     console.log("Angkot No. " + noAngkot + " sedang tidak beroprasi.");
    // }
}