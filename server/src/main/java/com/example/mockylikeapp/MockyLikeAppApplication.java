package com.example.mockylikeapp;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import java.util.stream.Stream;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import java.util.Collections;

@SpringBootApplication
public class MockyLikeAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(MockyLikeAppApplication.class, args);
	}

	@Bean
	ApplicationRunner init(MockyRepository repository) {
		return args -> {
			Stream.of("id 1", "id 2", "id 3", "id 4", "id 5").forEach(name -> {
				Mocky mocky = new Mocky();
				mocky.setName(name);
				repository.save(mocky);
			});
			repository.findAll().forEach(System.out::println);
		};
	}

	@Bean
	public FilterRegistrationBean<CorsFilter> simpleCorsFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(true);
		config.setAllowedOrigins(Collections.singletonList("http://localhost:4200"));
		config.setAllowedMethods(Collections.singletonList("*"));
		config.setAllowedHeaders(Collections.singletonList("*"));
		source.registerCorsConfiguration("/**", config);
		FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter(source));
		return bean;
	}
}

