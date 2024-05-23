const binatang = ['Kucing', 'Kambing','Sapi','Beruang','Komodo'];

console.log(binatang[1]); // key value

console.log(typeof(binatang)); // Object

console.log(binatang.sort()); // Method

const myFunc = function(){
    alert('Halo!');
}

const menu = [
    'teks',
    2,
    false,
    myFunc,
    [4,5,6]
]

const getFunc = menu[3];

getFunc();

console.log(menu);

/*
    1. Array memiliki key value. key : binatang[0], value : 'Kucing'
    2. Array di javascript adalah Object
    3. Karna Object maka memiliki beberapa method
    4. Array di javascript tipe datanya bisa beda beda
*/