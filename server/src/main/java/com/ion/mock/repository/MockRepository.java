package com.ion.mock.repository;

import com.ion.mock.model.MockModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MockRepository extends JpaRepository<MockModel, Long> { }
