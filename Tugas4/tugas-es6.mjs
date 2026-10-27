//Menyiapkan keranjang belanja

const transaksiBelanja = [
  { id: 1, barang: "Laptop", harga: 2580500, qty: 1, kategori: "Elektronik" },
  { id: 2, barang: "Kemeja", harga: 152000, qty: 3, kategori: "Pakaian" },
  { id: 3, barang: "Mouse", harga: 25000, qty: 2, kategori: "Elektronik" },
  { id: 4, barang: "Sepatu", harga: 100000, qty: 1, kategori: "Pakaian" },
  { id: 5, barang: "Buku Novel", harga: 85000, qty: 2, kategori: "Buku" },
  { id: 6, barang: "Keyboard", harga: 400000, qty: 1, kategori: "Elektronik" }
];

// Menghitung harga per baris barang 
const hitungSubtotal = (daftarTransaksi) => 
  daftarTransaksi.map((transaksi) => {
    const { harga, qty } = transaksi; // Destructuring : mengambil info harga dan jumlah dari nota
    return {
      ...transaksi,
      subtotal: harga * qty
    
    };
  });

// Memisahkan Barang Elektronik
const saringElektronik = (daftarTransaksi) => 
  daftarTransaksi.filter(({ kategori }) => kategori === "Elektronik");


// Fungsi Reduce untuk menghitung Total akhir secara Keseluruhan
const hitungTotalKeseluruhan = (daftarTransaksiSelesai) => 
  daftarTransaksiSelesai.reduce((total, { subtotal }) => total + subtotal, 0);

// mencetak ke layar terminal
const dataDenganSubtotal = hitungSubtotal(transaksiBelanja);
console.log("=== DATA TRANSAKSI DENGAN SUBTOTAL ===");
console.log(dataDenganSubtotal);

const dataElektronik = saringElektronik(dataDenganSubtotal);
console.log("\n=== TRANSAKSI KATEGORI ELEKTRONIK ===");
console.log(dataElektronik);

const totalBelanja = hitungTotalKeseluruhan(dataDenganSubtotal);
console.log(`\n=== TOTAL KESELURUHAN BELANJA: Rp ${totalBelanja} ===`);
