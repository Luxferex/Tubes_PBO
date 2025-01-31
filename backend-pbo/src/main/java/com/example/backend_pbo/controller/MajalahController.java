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

import com.example.backend_pbo.model.Majalah;
import com.example.backend_pbo.service.MajalahService;

@RestController
@RequestMapping("/majalah")
@CrossOrigin(origins = "http://localhost:3000")
public class MajalahController {

    @Autowired
    private MajalahService majalahService;

    @GetMapping
    public List<Majalah> getAllMajalah() {
        return majalahService.getAllMajalah();
    }

    @PostMapping
    public Majalah createMajalah(@RequestBody Majalah majalah) {
        return majalahService.saveMajalah(majalah);
    }

    // Menghapus majalah berdasarkan ID
    @DeleteMapping("/{id}")
    public void deleteMajalah(@PathVariable String id) {
        majalahService.deleteMajalah(id);
    }

    // Memperbarui majalah berdasarkan ID
    @PutMapping("/{id}")
    public Majalah updateMajalah(@PathVariable String id, @RequestBody Majalah majalah) {
        return majalahService.updateMajalah(id, majalah);
    }
}
