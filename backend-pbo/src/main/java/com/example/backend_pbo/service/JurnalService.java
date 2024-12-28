package com.example.backend_pbo.service;

import java.util.List;
import java.util.Optional;

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

     // Menghapus jurnal berdasarkan ID
    public void deleteJurnal(String id) {
        if (jurnalRepository.existsById(id)) {
            jurnalRepository.deleteById(id);
        } else {
            throw new RuntimeException("Jurnal dengan ID " + id + " tidak ditemukan.");
        }
    }

    // Memperbarui jurnal berdasarkan ID
    public Jurnal updateJurnal(String id, Jurnal jurnalDetails) {
        Optional<Jurnal> jurnalOptional = jurnalRepository.findById(id);
        if (jurnalOptional.isPresent()) {
            Jurnal jurnal = jurnalOptional.get();
            jurnal.setJudul(jurnalDetails.getJudul());
            jurnal.setStok_Tersedia(jurnalDetails.getStok_Tersedia());
            jurnal.setStok_Dibutuhkan(jurnalDetails.getStok_Dibutuhkan());
            return jurnalRepository.save(jurnal);
        } else {
            throw new RuntimeException("jurnal dengan ID " + id + " tidak ditemukan.");
        }
    }
}
