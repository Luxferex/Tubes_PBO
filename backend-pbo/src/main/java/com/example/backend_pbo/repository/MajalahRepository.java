package com.example.backend_pbo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.backend_pbo.model.Majalah;

public interface MajalahRepository extends MongoRepository<Majalah, String> {}
