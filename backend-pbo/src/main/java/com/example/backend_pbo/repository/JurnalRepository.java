package com.example.backend_pbo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.backend_pbo.model.Jurnal;

public interface JurnalRepository extends MongoRepository<Jurnal, String> {}
