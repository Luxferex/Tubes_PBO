package com.example.backend_pbo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "anggota")
public class Anggota {

    @Id
    private String id;
    private String nama;
    private String jurusan;
    private String nim;
    @Field("no_telp")
    private String noTelp;

    // Constructors
    public Anggota() {}

    public Anggota(String nama, String jurusan, String nim, String noTelp) {
        this.nama = nama;
        this.jurusan = jurusan;
        this.nim = nim;
        this.noTelp = noTelp;
    }

    // Getters dan Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNama() {
        return nama;
    }

    public void setNama(String nama) {
        this.nama = nama;
    }

    public String getJurusan() {
        return jurusan;
    }

    public void setJurusan(String jurusan) {
        this.jurusan = jurusan;
    }

    public String getNim() {
        return nim;
    }

    public void setNim(String nim) {
        this.nim = nim;
    }

    public String getnoTelp() {
        return noTelp;
    }

    public void setnoTelp(String noTelp) {
        this.noTelp = noTelp;
    }
}
