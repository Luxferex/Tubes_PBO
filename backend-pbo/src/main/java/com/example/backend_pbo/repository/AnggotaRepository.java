package com.example.backend_pbo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.backend_pbo.model.Anggota;

public interface AnggotaRepository extends MongoRepository<Anggota, String> {
    // Anda dapat menambahkan metode pencarian kustom jika diperlukan
}
