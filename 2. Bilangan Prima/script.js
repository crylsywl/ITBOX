//Bilangan Prima
function bilanganPrtima (num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(bilanganPrtima(23));

//MinMax
function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return [min, max];
}

console.log(minMax([9, 2, 3, 4, 5]));

//Menghitung Huruf Vokal
function hitungVokal(str) {
    let count = 0;
    const hurufVokal = ['a', 'i', 'u', 'e', 'o'];
    for (let i = 0; i < str.length; i++) {
        if (hurufVokal.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}

console.log(hitungVokal("Hello World"));

//Mencari Rata-rata terbesar
function rataTerbesar(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(rataTerbesar([1, 2, 3, 4, 5]));

function test(){
    return false;
}

console.log(String(test()));

var total = "abc" - 5;
console.log(total); // NaN

var arr = [1, 2, 3, 4, 5];
console.log(arr.slice(4));

var items = ["a","b","c"]

console.log(items[0]+items[1]+items[2]);

var choice;
choice = 1;
switch(choice){
case "food" :
console.log(choice);
break;
case "drinks" :
console.log("beverages");
break;
}

console.log(choice); // h

console.log(false === false); // number

var nilai;
nilai = 10.1
if(nilai > 10){
console.log(nilai)
}else if (nilai < 10){
console.log("10 kurang")
}else {
console.log(10)
}