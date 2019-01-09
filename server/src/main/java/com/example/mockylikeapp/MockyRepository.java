package com.example.mockylikeapp;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
interface MockyRepository extends JpaRepository<Mocky, Long> {
}