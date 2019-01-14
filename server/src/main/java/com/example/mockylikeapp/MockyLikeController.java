package com.example.mockylikeapp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
class MockyLikeController {
    private MockyRepository repository;

    public MockyLikeController(MockyRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/mocky")
    @CrossOrigin(origins = "http://localhost:4200")
    public Collection<Mocky> Mockies() {
        return repository.findAll().stream()
                .filter(this::isMocky)
                .collect(Collectors.toList());
    }

    private boolean isMocky(Mocky mocky) {
        return !mocky.getName().equals("Mocky");
    }
}