package com.example.backend_pbo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "buku")
public class Buku {

    @Id
    private String id;
    private String judul;
    private int stok_Tersedia;
    private int stok_Dibutuhkan;
    private int kekurangan;

    // Constructors
    public Buku() {}

    public Buku(String judul, int stok_Tersedia, int stok_Dibutuhkan) {
        this.judul = judul;
        this.stok_Tersedia = stok_Tersedia;
        this.stok_Dibutuhkan = stok_Dibutuhkan;
        updateKekurangan(); // Hitung kekurangan saat konstruksi
    }

    // Getters dan Setters
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

    public int getStok_Tersedia() {
        return stok_Tersedia;
    }

    public void setStok_Tersedia(int stok_Tersedia) {
        this.stok_Tersedia = stok_Tersedia;
        updateKekurangan(); // Hitung ulang kekurangan
    }

    public int getStok_Dibutuhkan() {
        return stok_Dibutuhkan;
    }

    public void setStok_Dibutuhkan(int stok_Dibutuhkan) {
        this.stok_Dibutuhkan = stok_Dibutuhkan;
        updateKekurangan(); // Hitung ulang kekurangan
    }

    public String getKekurangan() {
        // Mengembalikan string jika kekurangan <= 0
        if (kekurangan <= 0) {
            return "Tidak ada kekurangan";
        }
        return String.valueOf(kekurangan);
    }

    // Method untuk menghitung kekurangan
    private void updateKekurangan() {
        this.kekurangan = stok_Dibutuhkan - stok_Tersedia;
    }
}
