let value;

if ((value = null)) {
  console.log(value);
} else {
  console.log("test");
}

console.log("xyz" - 10);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   console.log("hello " + i);
//   i++;
// }

var nilai = [1, 2, 3, 4, 5];
console.log(nilai);

function comp(a, b) {
  return a === b;
}

console.log(typeof comp(1, "1"));

function kalimat(str) {
  let jmlkalimat = str.split(" ");
  return jmlkalimat;
}

function jumlaharray(kal) {
  let result = kalimat(kal);
  let jmlarray = result.length;
  return jmlarray;
}

console.log(jumlaharray("saya suka belajar javascript"));
console.log(kalimat("saya suka belajar javascript"));

function hitungHuruf(str) {
  let huruf = str.length;
  return huruf;
}

function confirmHuruf(str) {
  let pass = hitungHuruf(str);
  if (pass >= 5 && pass <= 10) {
    return "password valid";
  } else {
    return "masukkan password 5-10 karakter";
  }
}

console.log(confirmHuruf("123"));
console.log(confirmHuruf("1234567890"));

let x = function (k) {
  console.log(k);
};

console.log(x);

function comp(a, b) {
  return a === b;
}
console.log(typeof comp(1, "1"));

function hello() {
  console.log("Hello");
}
hello();
var print = function () {
  console.log("print");
};
print();

var obj = {
  name: "james",
  "is able": true,
  1: 100,
};
console.log(typeof obj["1"]);

var profile = {
  nama: "james",
  umur: 30,
  hobby: ["basket", "music"],

  sebutHobby: function () {
    console.log(`Hobby ${this.nama} adalah`);
    for (let i = 0; i < this.hobby.length; i++) {
      console.log(i + 1 + ". " + this.hobby[i]);
    }
  },
};

profile.sebutHobby();

var student = [
  ["A", "John", 3.5],
  ["A", "Jane", 3.9],
  ["B", "Jim", 3.2],
  ["B", "Jack", 3.8],
  ["A", "Jill", 3.6],
  ["B", "Joe", 3.4],
  ["A", "Jerry", 3.7],
  ["B", "Jess", 3.1],
  ["A", "Judy", 3.9],
  ["B", "Janet", 3.5],
  ["A", "Jordan", 3.8],
  ["B", "Jake", 3.3],
  ["A", "Jasmine", 3.6],
  ["B", "Jasper", 3.4],
  ["A", "Joyce", 3.7],
  ["B", "Jared", 3.2],
  ["A", "Jenna", 3.9],
  ["B", "Jules", 3.1],
  ["A", "Judy", 3.8],
];

function getStudentByClass(className) {
  let result = [];
  let classA = {
    class: "A",
    student: [],
    gpa: [],
  };
  let classB = {
    class: "B",
    student: [],
    gpa: [],
  };
  for (let i = 0; i < className.length; i++) {
    if (student[i][0] === "A") {
      classA.student.push(className[i][1]);
      classA.gpa.push(className[i][2]);
    } else {
      classB.student.push(className[i][1]);
      classB.gpa.push(className[i][2]);
    }
  }
  result.push(classA);
  result.push(classB);
  return result;
}

console.log(typeof student[0].class);
console.log(getStudentByClass(student));

let product = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Mouse", price: 100 },
];

console.log(product[0].name);
