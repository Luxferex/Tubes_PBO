package com.example.backend_pbo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend_pbo.model.Jurnal;
import com.example.backend_pbo.repository.JurnalRepository;

@Service
public class JurnalService {

    @Autowired
    private JurnalRepository jurnalRepository;

    public List<Jurnal> getAllJurnal() {
        return jurnalRepository.findAll();
    }

    public Jurnal saveJurnal(Jurnal jurnal) {
        return jurnalRepository.save(jurnal);
    }
}
