package com.example.backend_pbo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "jurnal")
public class Jurnal {

    @Id
    private String id;
    private String judul;
    private int stok_Tersedia;
    private int stok_Kebutuhan;
    private int kekurangan;

    // Constructors
    public Jurnal() {}

    public Jurnal(String judul, int stok_Tersedia, int stok_Kebutuhan) {
        this.judul = judul;
        this.stok_Tersedia = stok_Tersedia;
        this.stok_Kebutuhan = stok_Kebutuhan;
        this.kekurangan = stok_Kebutuhan - stok_Tersedia; // Otomatis menghitung kekurangan
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

    public int getStok_Tersedia() {
        return stok_Tersedia;
    }

    public void setStok_Tersedia(int stok_Tersedia) {
        this.stok_Tersedia = stok_Tersedia;
        updateKekurangan(); // Recalculate kekurangan
    }

    public int getStok_Kebutuhan() {
        return stok_Kebutuhan;
    }

    public void setStok_Kebutuhan(int stok_Kebutuhan) {
        this.stok_Kebutuhan = stok_Kebutuhan;
        updateKekurangan(); // Recalculate kekurangan
    }

    public String getKekurangan() {
        if (kekurangan > 0) {
            return String.valueOf(kekurangan);  // Menampilkan nilai kekurangan
        } else {
            return "Tidak ada kekurangan"; // Menampilkan pesan jika tidak ada kekurangan
        }
    }

    // Method untuk menghitung kekurangan
    private void updateKekurangan() {
        this.kekurangan = stok_Kebutuhan - stok_Tersedia; // Otomatis menghitung kekurangan
    }
}
