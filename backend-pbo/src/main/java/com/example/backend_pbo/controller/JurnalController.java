package com.example.backend_pbo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend_pbo.model.Jurnal;
import com.example.backend_pbo.service.JurnalService;

@RestController
@RequestMapping("/jurnal")
@CrossOrigin(origins = "http://localhost:3000")
public class JurnalController {

    @Autowired
    private JurnalService jurnalService;

    @GetMapping
    public List<Jurnal> getAllJurnal() {
        return jurnalService.getAllJurnal();
    }

    @PostMapping
    public Jurnal createJurnal(@RequestBody Jurnal jurnal) {
        return jurnalService.saveJurnal(jurnal);
    }
}