package com.example.mocky;

import com.example.mocky.Mocky;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MockyRepository
        extends JpaRepository<Mocky, Long> { }
