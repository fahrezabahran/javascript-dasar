console.log("23-angkot5.js");

var jmlAngkot = 10;
var angkotBeroprasi = 6;
var noAngkot = 1;

for(noAngkot; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot <= angkotBeroprasi){
        console.log("Angkot No. " + noAngkot + " beroprasi dengan baik.");
    } else if (noAngkot === 8 || noAngkot === 10) {
        console.log("Angkot No. " + noAngkot + " sedang lembur.");
    } else {
        console.log("Angkot No. " + noAngkot + " sedang tidak beroprasi.");
    }

    // else if (noAngkot <= jmlAngkot) {
    //     console.log("Angkot No. " + noAngkot + " sedang tidak beroprasi.");
    // }
}