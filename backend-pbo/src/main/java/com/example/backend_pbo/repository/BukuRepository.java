package com.example.backend_pbo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.backend_pbo.model.Buku;

public interface BukuRepository extends MongoRepository<Buku, String> {
    // Anda dapat menambahkan metode pencarian kustom jika diperlukan
}
