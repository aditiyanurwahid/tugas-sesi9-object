// Soal no 1
let kucing = {
  Nama: "Kucing",
  Kaki: 4,
  Spesies: "Mamalia",
  Warna: ["oren", "putih", "item"],
  Makanan: ["Ikan", "Ayam"],
  Suara: "Miaaaaw",
  Keahlian: () => {
    return "Berkelahi";
  },
};

console.log("Nama:", kucing.Nama);
console.log("Kaki:", kucing.Kaki);
console.log("Spesies:", kucing.Spesies);
console.log("Warna:", kucing.Warna[0], ",", kucing.Warna[1], ",", kucing.Warna[2]);
console.log("Makanan:", kucing.Makanan[0], ",", kucing.Makanan[1]);
console.log("Suara:", kucing.Suara);
console.log("Keahlian:", kucing.Keahlian());

// Soal no 2
const data = [
  {
    name: "Alpha",
    class: "Dragon",
    club: ["Bola", " Bulutangkis"],
  },
  {
    name: "Beta",
    class: "Lizard",
    club: ["Membaca", " Bulutangkis"],
  },
];

console.log(data[0].name + " ada di kelas " + data[0].class + " dia mengikuti " + data[0].club);
console.log(data[1].name + " ada di kelas " + data[1].class + " dia mengikuti " + data[1].club);

//Soal no 3
let todos = [
  { id: 1, todo: "belajar coding" },
  { id: 2, todo: "nanti tidur" },
];

function printAll() {
  for (let i = 0; i < todos.length; i++) {
    console.log(todos[i]);
  }
}

printAll();

function printByID(id) {
  return todos[id - 1].todo;
}

console.log("Print by ID:", printByID(1));

// Soal no 4
let buah = [
  {
    nama: "Apple",
    warna: "Red",
    namaLatin: "Malus Sylvestris",
    tipeBiji: "Single Seed",
  },
  {
    nama: "Banana",
    warna: "Yellow",
    namaLatin: "Musa Paradisiaca",
    tipeBiji: "Double Seed",
  },
  {
    nama: "Blueberry",
    warna: "Blue",
    namaLatin: "Vaccinium",
    tipeBiji: "Single Seed",
  },
  {
    nama: "Cherry",
    warna: "Red",
    namaLatin: "Prunus Apetala",
    tipeBiji: "Double Seed",
  },
  {
    nama: "Lemon",
    warna: "Yellow",
    namaLatin: "Citrus Limon",
    tipeBiji: "Single Seed",
  },
  {
    nama: "Mango",
    warna: "Green",
    namaLatin: "Citrus Reticulata",
    tipeBiji: "Double Seed",
  },
  {
    nama: "Orange",
    warna: "Orange",
    namaLatin: "Malus Sylvestris",
    tipeBiji: "Single Seed",
  },
  {
    nama: "Pear",
    warna: "Yellow",
    namaLatin: "Pyrus Caucasica",
    tipeBiji: "Double Seed",
  },
];

console.table(buah);

// console.log(buah[0]);
// console.log(buah[1]);
// console.log(buah[2]);
// console.log(buah[3]);
// console.log(buah[4]);
// console.log(buah[5]);
// console.log(buah[6]);
// console.log(buah[7]);

document.getElementById("apel").innerHTML = buah[0];
document.getElementById("banana").innerHTML = buah[1];
document.getElementById("blueberry").innerHTML = buah[2];
document.getElementById("cherry").innerHTML = buah[3];
document.getElementById("lemon").innerHTML = buah[4];
document.getElementById("mango").innerHTML = buah[5];
document.getElementById("orange").innerHTML = buah[6];
document.getElementById("pear").innerHTML = buah[7];
