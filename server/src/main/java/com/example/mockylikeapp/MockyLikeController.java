package com.example.mockylikeapp;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/mocky")
class MockyLikeController {
    private MockyRepository repository;

    public MockyLikeController(MockyRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/mocky")
    public Collection<Mocky> Mocky() {
        return repository.findAll().stream()
                .filter(this::isMocky)
                .collect(Collectors.toList());
    }

    private boolean isMocky(Mocky mocky) {
        return !mocky.getName().equals("Mocky");
    }
}