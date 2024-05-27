// 35 Manipulasi Array

// 1 Menambah Isi Array
// Membuat Array kosong lalu memberikan nilai nya
const arr = [];
arr[0] = "Fahreza";
arr[1] = "Bahran";
arr[2] = "Rahadian";
arr[3] = "Jalikal";
console.log(arr);

// Membuat Array kosong lalu memberikan nilai nya (apabila ada yang terlewat maka akan di isi undefind)
const arr2 = [];
arr2[0] = "Fahreza";
arr2[1] = "Bahran";
arr2[2] = "Rahadian";
arr2[5] = "Jalikal";
console.log(arr2);

// 2 Menghapus Isi Array (Array tetap ada, hanya value yang dijadikan undefind)
const arr3 = ["Fahreza", "Bahran", "Rahadian", "Jalikal"];
console.log(arr3);
arr3[2] = undefined;
console.log(arr3);

// 3 Menampilkan Isi Array

const arr4 = ["Fahreza", "Bahran", "Rahadian", "Jalikal"];

for (let i = 0; i < arr.length; i++) {
    console.log("Mahasiswa ke - " + i + " : " + arr4[i]);
}

const arr5 = ["Fahreza", "Bahran", "Rahadian", "Jalikal"];

console.log(arr5.join());
console.log(arr5.join(' - '));

arr5.push('Fedly','Anwari');
console.log(arr5.join());

arr5.pop();
console.log(arr5.join());

arr5.unshift('Otong','Surotong');
console.log(arr5.join());

arr5.shift();
console.log(arr5.join());

/* 
    array.length = pajang array
    array.join() = return string array default separator comma
    array.push() = menambah array dari belakang, bisa tambahkan lebih dari satu
    array.pop() = menghapus array dari belakang secara satu persatu
    array.unshift() = menambah array dari depan, bisa tambahkan lebih dari satu
    array.shift = menghapus array dari depan
*/