package com.example.mockylikeapp;

import lombok.*;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Entity;

@Entity
@Data
@NoArgsConstructor
public class Mocky {

    @Id
    @GeneratedValue
    private Long id;

    private @NonNull String name;
}