package com.example.backend_pbo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "majalah")
public class Majalah {

    @Id
    private String id;
    private String judul;
    @Field("stok_Tersedia")
    private int stokTersedia;
    @Field("stok_Kebutuhan")
    private int stokKebutuhan;
    private String kekurangan;  // Ubah menjadi String agar bisa menampilkan teks

    // Constructors
    public Majalah() {}

    public Majalah(String judul, int stokTersedia, int stokKebutuhan) {
        this.judul = judul;
        this.stokTersedia = stokTersedia;
        this.stokKebutuhan = stokKebutuhan;
        this.kekurangan = calculateKekurangan(); // Menghitung kekurangan saat object dibuat
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getJudul() {
        return judul;
    }

    public void setJudul(String judul) {
        this.judul = judul;
    }

    public int getStokTersedia() {
        return stokTersedia;
    }

    public void setStokTersedia(int stokTersedia) {
        this.stokTersedia = stokTersedia;
        updateKekurangan(); // Recalculate kekurangan jika stokTersedia berubah
    }

    public int getStokKebutuhan() {
        return stokKebutuhan;
    }

    public void setStokKebutuhan(int stokKebutuhan) {
        this.stokKebutuhan = stokKebutuhan;
        updateKekurangan(); // Recalculate kekurangan jika stokKebutuhan berubah
    }

    public String getKekurangan() {
        return kekurangan;
    }

    private void updateKekurangan() {
        this.kekurangan = calculateKekurangan();  // Recalculate kekurangan
    }

    private String calculateKekurangan() {
        int kekurangan = stokKebutuhan - stokTersedia;
        // Jika kekurangan <= 0, tampilkan "Tidak ada kekurangan"
        if (kekurangan <= 0) {
            return "Tidak ada kekurangan";
        }
        return String.valueOf(kekurangan); // Menampilkan kekurangan dalam angka jika ada
    }
}
