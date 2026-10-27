class Mobil {
    String warna , merk ,tipe ;
    int tahunproduksi ;
}
   
class MobilBeraksi{
    public static void main(String[] args) {
        Mobil mobilku = new Mobil();
        mobilku.warna = "Hitam ";
        mobilku.tahunproduksi = 2026;
        mobilku.merk = "PAJERO SPORT";
        mobilku.tipe = "MaTIC";
        
        System.out.println("Merk : " + mobilku.merk);
        System.out.println("Tipe: " + mobilku.tipe);


        System.out.println("Warna : " +  mobilku.warna );
        System.out.println("Tahun Produksi : " + mobilku.tahunproduksi);
    }
   
}
     

