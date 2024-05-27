const arr = [1, 3, 2, 5, 4, 9, 8, 7, 6, 11];

let arr2 = arr.filter((e) => e > 5);
console.log(arr2.join());

arr2 = arr.filter((e) => e == 20);
console.log(arr2);

const getValue = arr.find((e) => e > 1);
console.log(getValue);
/*
    filter return nya array, kalau tidak ketemu tetap return array (array kosong [])
    find return value bukan array
*/