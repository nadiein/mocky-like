package com.ion.mock.controller;

import java.util.List;

import com.ion.mock.model.MockModel;
import com.ion.mock.repository.MockRepository;
import com.ion.mock.utils.Utils;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/mocks"})
public class MockController {

    private MockRepository repository;

    MockController(MockRepository mockRepository) {
        this.repository = mockRepository;
    }

    @GetMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public List findAll(){
        return repository.findAll();
    }

    @GetMapping(path = {"/{id}"})
    public ResponseEntity<MockModel> findById(@PathVariable long id){
        return repository.findById(id)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public MockModel create(@RequestParam(name = "mockData") String mockData) {
        System.out.println(mockData);
        MockModel mockModel = new MockModel();
        mockModel.setMockData(Utils.getSHA512(mockData, Utils._salt));
        return repository.save(mockModel);
    }

    @PutMapping(value="/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<MockModel> update(@PathVariable("id") long id, @RequestBody MockModel mockModel) {
        return repository.findById(id)
                .map(record -> {
                    record.setMockData(mockModel.getMockData());
                    MockModel updated = repository.save(record);
                    return ResponseEntity.ok().body(updated);
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path ={"/{id}"})
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> delete(@PathVariable("id") long id) {
        return repository.findById(id)
                .map(record -> {
                    repository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}
