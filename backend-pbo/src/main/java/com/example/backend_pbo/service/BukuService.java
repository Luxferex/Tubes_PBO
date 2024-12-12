package com.example.backend_pbo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend_pbo.model.Buku;
import com.example.backend_pbo.repository.BukuRepository;

@Service
public class BukuService {

    @Autowired
    private BukuRepository bukuRepository;

    // Mendapatkan semua buku
    public List<Buku> getAllBuku() {
        return bukuRepository.findAll();
    }

    // Menyimpan buku baru
    public Buku saveBuku(Buku buku) {
        return bukuRepository.save(buku);
    }

    // Menghapus buku berdasarkan ID
    public void deleteBuku(String id) {
        if (bukuRepository.existsById(id)) {
            bukuRepository.deleteById(id);
        } else {
            throw new RuntimeException("Buku dengan ID " + id + " tidak ditemukan.");
        }
    }

    // Memperbarui buku berdasarkan ID
    public Buku updateBuku(String id, Buku bukuDetails) {
        Optional<Buku> bukuOptional = bukuRepository.findById(id);
        if (bukuOptional.isPresent()) {
            Buku buku = bukuOptional.get();
            buku.setJudul(bukuDetails.getJudul());
            buku.setStok_Tersedia(bukuDetails.getStok_Tersedia());
            buku.setStok_Dibutuhkan(bukuDetails.getStok_Dibutuhkan());
            return bukuRepository.save(buku);
        } else {
            throw new RuntimeException("Buku dengan ID " + id + " tidak ditemukan.");
        }
    }
}
