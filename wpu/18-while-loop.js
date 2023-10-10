// contoh while ke satu
var nilai_awal = 1;
while (nilai_awal <= 10) {
    console.log("Iterasi ke-" + nilai_awal);
    nilai_awal++;
}

// contoh while ke dua
nilai_awal = 1;
var kondisi = true;
while (kondisi) {
    console.log("Iterasi Lagi ke-" + nilai_awal);
    nilai_awal++;
    if (nilai_awal === 10) { kondisi = false; }
}

// contoh latihan
nilai_awal = 1;
while (nilai_awal <= 10) {
    console.log("Angkot No. " + nilai_awal + " beroprasi dengan baik.");
    nilai_awal++;
}

/*
    STRUKTUR WHILE

    nilai awal

    while(kondisi terminasi) {
        aksi

        increment / decrement
    }
*/