package com.example.backend_pbo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend_pbo.model.Majalah;
import com.example.backend_pbo.repository.MajalahRepository;

@Service
public class MajalahService {

    @Autowired
    private MajalahRepository majalahRepository;

    public List<Majalah> getAllMajalah() {
        return majalahRepository.findAll();
    }

    public Majalah saveMajalah(Majalah majalah) {
        return majalahRepository.save(majalah);
    }
}
