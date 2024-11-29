package com.example.backend_pbo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend_pbo.model.Buku;
import com.example.backend_pbo.service.BukuService;

@RestController
@RequestMapping("/buku")
@CrossOrigin(origins = "http://localhost:3000") // React berjalan di port 3000
public class BukuController {

    @Autowired
    private BukuService bukuService;

    // Endpoint untuk mengambil semua buku
    @GetMapping
    public List<Buku> getAllBuku() {
        return bukuService.getAllBuku();
    }

    // Endpoint untuk menambahkan buku
    @PostMapping
    public Buku createBuku(@RequestBody Buku buku) {
        return bukuService.saveBuku(buku);
    }
}

