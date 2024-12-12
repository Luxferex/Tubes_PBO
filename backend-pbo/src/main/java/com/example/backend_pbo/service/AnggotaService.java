package com.example.backend_pbo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend_pbo.model.Anggota;
import com.example.backend_pbo.repository.AnggotaRepository;

@Service
public class AnggotaService {

    @Autowired
    private AnggotaRepository anggotaRepository;

    // Mendapatkan semua anggota
    public List<Anggota> getAllAnggota() {
        return anggotaRepository.findAll();
    }

    // Menyimpan anggota baru
    public Anggota saveAnggota(Anggota anggota) {
        return anggotaRepository.save(anggota);
    }

    // Menghapus anggota berdasarkan ID
    public void deleteAnggota(String id) {
        if (anggotaRepository.existsById(id)) {
            anggotaRepository.deleteById(id);
        } else {
            throw new RuntimeException("Anggota dengan ID " + id + " tidak ditemukan.");
        }
    }

    // Memperbarui anggota berdasarkan ID
    public Anggota updateAnggota(String id, Anggota anggotaDetails) {
        Optional<Anggota> anggotaOptional = anggotaRepository.findById(id);
        if (anggotaOptional.isPresent()) {
            Anggota anggota = anggotaOptional.get();
            anggota.setNama(anggotaDetails.getNama());
            anggota.setJurusan(anggotaDetails.getJurusan());
            anggota.setNim(anggotaDetails.getNim());
            anggota.setnoTelp(anggotaDetails.getnoTelp());
            return anggotaRepository.save(anggota);
        } else {
            throw new RuntimeException("Anggota dengan ID " + id + " tidak ditemukan.");
        }
    }
}
