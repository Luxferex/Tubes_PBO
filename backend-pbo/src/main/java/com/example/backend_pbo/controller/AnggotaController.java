package com.example.backend_pbo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend_pbo.model.Anggota;
import com.example.backend_pbo.service.AnggotaService;

@RestController
@RequestMapping("/anggota")
@CrossOrigin(origins = "http://localhost:3000")
public class AnggotaController {

    @Autowired
    private AnggotaService anggotaService;

    // Mendapatkan semua anggota
    @GetMapping
    public List<Anggota> getAllAnggota() {
        return anggotaService.getAllAnggota();
    }

    // Menambahkan anggota baru
    @PostMapping
    public Anggota createAnggota(@RequestBody Anggota anggota) {
        return anggotaService.saveAnggota(anggota);
    }

    // Menghapus anggota berdasarkan ID
    @DeleteMapping("/{id}")
    public void deleteAnggota(@PathVariable String id) {
        anggotaService.deleteAnggota(id);
    }

    // Memperbarui anggota berdasarkan ID
    @PutMapping("/{id}")
    public Anggota updateAnggota(@PathVariable String id, @RequestBody Anggota anggota) {
        return anggotaService.updateAnggota(id, anggota);
    }
}
