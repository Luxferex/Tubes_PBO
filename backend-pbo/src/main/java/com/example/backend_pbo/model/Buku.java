package com.example.backend_pbo.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "buku")
public class Buku {

    private String judul;

    private int stok_tersedia;

    private int stok_dibutuhkan;

    private int kekurangan;

    // Constructors
    public Buku() {}

    public Buku(String judul, int stok_tersedia, int stok_dibutuhkan, int kekurangan) {
        this.judul = judul;
        this.stok_tersedia = stok_tersedia;
        this.stok_dibutuhkan = stok_dibutuhkan;
        this.kekurangan = kekurangan;
    }

    // Getters dan Setters
    public String getJudul() {
        return judul;
    }

    public void setJudul(String judul) {
        this.judul = judul;
    }

    public int getstok_tersedia() {
        return stok_tersedia;
    }

    public void setstok_tersedia(int stok_tersedia) {
        this.stok_tersedia = stok_tersedia;
    }

    public int getstok_dibutuhkan() {
        return stok_dibutuhkan;
    }

    public void setstok_dibutuhkan(int stok_dibutuhkan) {
        this.stok_dibutuhkan = stok_dibutuhkan;
    }

    public int getKekurangan() {
        return kekurangan;
    }

    public void setKekurangan(int kekurangan) {
        this.kekurangan = kekurangan;
    }
}
