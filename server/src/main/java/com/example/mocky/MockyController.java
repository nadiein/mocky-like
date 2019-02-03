package com.example.mocky;

import com.example.mocky.Mocky;
import com.example.mocky.MockyRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.LongStream;

//@RequestMapping("/api/get/{hashId}")
//public void getJson(@PathVariable("hashId") String hashId, HttpServletRequest request) {
//        //
//}

@RestController
@RequestMapping({"/mocky"})
public class MockyController {

    private MockyRepository repository;

    MockyController(MockyRepository mockyRepository) {
        this.repository = mockyRepository;
    }

    @GetMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public List findAll(){
        return repository.findAll();
    }

    @GetMapping(path = {"/{id}"})
    public ResponseEntity<Mocky> findById(@PathVariable long id){
        return repository.findById(id)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public Mocky create(@RequestBody Mocky mocky){
        return repository.save(mocky);
    }

    @PutMapping(value="/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Mocky> update(@PathVariable("id") long id,
                                          @RequestBody Mocky contact){
        return repository.findById(id)
                .map(record -> {
                    record.setName(contact.getName());
                    record.setEmail(contact.getEmail());
                    record.setPhone(contact.getPhone());
                    Mocky updated = repository.save(record);
                    return ResponseEntity.ok().body(updated);
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path ={"/{id}"})
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> delete(@PathVariable("id") long id) {
        return repository.findById(id)
                .map(record -> {
                    repository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}
