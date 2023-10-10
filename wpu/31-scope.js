var a = 1;
// global scope

function tes(a) {
    // local scope
    console.log(1+5);
}

tes(a);
console.log(a);