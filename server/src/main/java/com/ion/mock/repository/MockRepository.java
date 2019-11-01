package com.ion.mock.repository;

import com.ion.mock.model.MockModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin(origins = "http://localhost:3000")
public interface MockRepository extends JpaRepository<MockModel, Long> { }
