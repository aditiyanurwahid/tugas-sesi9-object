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
    images: "img/gambar1.png",
    nama: "Apple",
    warna: "Red",
    namaLatin: "Malus Sylvestris",
    tipeBiji: "Single Seed",
  },
  {
    images: "img/gambar2.png",
    nama: "Banana",
    warna: "Yellow",
    namaLatin: "Musa Paradisiaca",
    tipeBiji: "Double Seed",
  },
  {
    images: "img/gambar3.jpg",
    nama: "Blueberry",
    warna: "Blue",
    namaLatin: "Vaccinium",
    tipeBiji: "Single Seed",
  },
  {
    images: "/img/gambar4.png",
    nama: "Cherry",
    warna: "Red",
    namaLatin: "Prunus Apetala",
    tipeBiji: "Double Seed",
  },
  {
    images: "img/gambar5.jpg",
    nama: "Lemon",
    warna: "Yellow",
    namaLatin: "Citrus Limon",
    tipeBiji: "Single Seed",
  },
  {
    images: "img/gambar6.jpg",
    nama: "Mango",
    warna: "Green",
    namaLatin: "Citrus Reticulata",
    tipeBiji: "Double Seed",
  },
  {
    images: "img/gambar7.png",
    nama: "Orange",
    warna: "Orange",
    namaLatin: "Malus Sylvestris",
    tipeBiji: "Single Seed",
  },
  {
    images: "/img/gambar8.png",
    nama: "Pear",
    warna: "Yellow",
    namaLatin: "Pyrus Caucasica",
    tipeBiji: "Double Seed",
  },
];

console.table(buah);
let daftarBuah = document.getElementById("daftar-buah");
for (let i = 0; i <= buah.length; i++) {
  daftarBuah.innerHTML += `
<section>
  <div class="container">
    <div class="row">
      <div class="col">
          <div class="card">
            <img src=${buah[i].images} class="card-img-top" alt="Loading..." />
                  <div class="card-body">
                    <p class="card-text fs-1 text-dark text-center" alt="Loading...">${buah[i].nama}</p>
                    <p class="card-text fs-6 fw-light" alt="Loading...">Warna: ${buah[i].warna}</p>
                    <p class="card-text fs-6 fw-light" alt="Loading...">Nama Latin: ${buah[i].namaLatin}</p>
                    <p class="card-text fs-6 fw-light" alt="Loading...">Tipe Biji: ${buah[i].tipeBiji}</p>
                    
                  </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</section>`;
}
