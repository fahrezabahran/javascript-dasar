// Rekursif adalah fungsi yang memanggil dirinya sendiri
// Rekursi ini bisa saja pemanggilan nya tidak berhenti atau seperti looping yang tidak ada akhir


// function CetakAngka(n){
//     document.write(n.toString());
//     return 
// }

// Fungsi dengan for
function cetakAngka2(n) {
    for (var i = 0; i < n; i++) {
        console.log(n - i)
    }
}

// Fungsi dengan rekursif
function cetakAngka(n) {
    if (n == 0) {
        return;
    }
    console.log(n);
    cetakAngka(n - 1);
}

function faktorial(n) {
    if (n == 0) return 1;
    return n * faktorial(n - 1); // (5 * (4 * (3 * (2 * 1))))
}

// cetakAngka(10);
// cetakAngka2(10);
console.log(faktorial(5));