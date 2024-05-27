let arr = ['Fahreza', 'Bahran', 'Rahadian', 'Jalikal'];

// arr.forEach((e, i) => {
//     console.log('Mahasiswa ke - ' + (i + 1) + " : " + e);
// });

//function biasa
function cetak(e, i) {
    console.log('Biasa Mahasiswa ke - ' + (i + 1) + " : " + e);
}

// function expression
const cetakExpression = function (e, i) {
    console.log('Expression Mahasiswa ke - ' + (i + 1) + " : " + e);
}

// arrow function
const cetakArrow = (e, i) => {
    console.log('Arrow Mahasiswa ke - ' + (i + 1) + " : " + e);
}

// arr.forEach(cetak);
// arr.forEach(cetakExpression);
// arr.forEach(cetakArrow);
arr.forEach((a, b) => {
    console.log('Callback Mahasiswa ke - ' + (b + 1) + " : " + a);
});

arr = [1, 2, 3, 4, 5, 9, 8, 7, 6];


const arr2 = arr.map((e) => {
    return e * 2;
});

console.log(arr2.join());

arr2.sort((a, b) => a - b);

console.log(arr2.join());

/*
    forEach tidak memiliki return
    map mereturn array
    sort mengurutkan memiliki callback function index
*/