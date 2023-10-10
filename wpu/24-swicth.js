// let angka = prompt("Masukkan angka : ");

// switch (angka) {
//     case "1":
//         alert("Anda memasukkan angka 1");
//         break;
//     case "2":
//         alert("Anda memasukkan angka 2");
//         break;
//     case "3":
//         alert("Anda memasukkan angka 3");
//         break;
//     default:
//         alert("Anda memasukkan angka yang salah");
//         break;
// }

// let item = prompt("Masukkan nama makanan / minuman : \n(Contoh: nasi, daging, susu, hamburger, softdrink)");
// switch (item) {
//     case "nasi":
//     case "daging":
//     case "susu":
//         alert("Makanan / minuman SEHAT !!!");
//         break;
//     case "hamburger":
//     case "softdrink":
//         alert("Makanan / minuman TIDAK SEHAT !!!");
//         break;
//     default :
//         alert("Anda memasukkan makanan / minuman yang salah");
//         break;

// }

let item = prompt("Masukkan nama makanan / minuman : \n(Contoh: nasi, daging, susu, hamburger, softdrink)");
switch (item) {
    case "nasi":
    case "daging":
    case "susu":
        alert("Makanan / minuman SEHAT !!!");
        break;
    case "hamburger":
    case "softdrink":
        alert("Makanan / minuman TIDAK SEHAT !!!");
        break;
    default :
        alert("Anda memasukkan makanan / minuman yang salah");
        break;

}

/*
    Perbedaan switch case dengan if else terdapat pada 3 case paling atas
    Contoh : if (item == "nasi" || item == "daging" || item == "susu")
             case "nasi": case "daging": case "susu":
*/