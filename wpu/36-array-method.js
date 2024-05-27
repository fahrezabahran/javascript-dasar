let arr = ['Fahreza','Bahran','Rahadian','Jalikal'];
arr.splice(1,0,'Otong');
console.log(arr.join());

arr = ['Fahreza','Bahran','Rahadian','Jalikal'];
arr.splice(1,3,'Otong'); // masukan di index ke 1, hapus 3 data start index 1
console.log(arr.join());

const arr2 = ['Fahreza','Bahran','Rahadian','Jalikal'];
const arr3 = arr2.slice(1);
console.log(arr3.join());

const arr4 = arr2.slice(1,3);
console.log(arr4.join());
/*
    array.splice = menyisipkan array (bisa lebih dari 1) dengan index tertentu, dan juga dapat menghapus index setelah nya
    array.splice(indexYangDituju, ArrayYangInginDihapus, Array baru)

    array.slice = return array baru
    array.slice(startIndex, endIndex + 1)
*/