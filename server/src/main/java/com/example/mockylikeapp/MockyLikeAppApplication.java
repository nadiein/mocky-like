package com.example.mockylikeapp;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import java.util.stream.Stream;

@SpringBootApplication
public class MockyLikeAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(MockyLikeAppApplication.class, args);
	}

	@Bean
	ApplicationRunner init(MockyRepository repository) {
		return args -> {
			Stream.of("{Data: [{id: 0}, {id: 2}, {id: 3}]}").forEach(name -> {
				Mocky mocky = new Mocky();
				mocky.setName(name);
				repository.save(mocky);
			});
			repository.findAll().forEach(System.out::println);
		};
	}
}

