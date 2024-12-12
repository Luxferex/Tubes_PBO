package com.example.backend_pbo.service;

import java.util.List;
import java.util.Optional;

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

    // Menghapus majalah berdasarkan ID
    public void deleteMajalah(String id) {
        if (majalahRepository.existsById(id)) {
            majalahRepository.deleteById(id);
        } else {
            throw new RuntimeException("Majalah dengan ID " + id + " tidak ditemukan.");
        }
    }

    // Memperbarui majalah berdasarkan ID
    public Majalah updateMajalah(String id, Majalah majalahDetails) {
        Optional<Majalah> majalahOptional = majalahRepository.findById(id);
        if (majalahOptional.isPresent()) {
            Majalah majalah = majalahOptional.get();
            majalah.setJudul(majalahDetails.getJudul());
            majalah.setStokTersedia(majalahDetails.getStokTersedia());
            majalah.setStokKebutuhan(majalahDetails.getStokKebutuhan());
            return majalahRepository.save(majalah);
        } else {
            throw new RuntimeException("Majalah dengan ID " + id + " tidak ditemukan.");
        }
    }
}
