package com.ion.mock;

import java.util.stream.LongStream;

import com.ion.mock.model.MockModel;
import com.ion.mock.repository.MockRepository;
import com.ion.mock.utils.Utils;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MockApplication {

    public static void main(String[] args) {
        SpringApplication.run(MockApplication.class, args);
    }

    @Bean
    CommandLineRunner init(MockRepository repository) {
        return args -> {
            repository.deleteAll();
            LongStream.range(1, 11)
                    .mapToObj(i -> {
                        MockModel mockModel = new MockModel();
                        mockModel.setMockData(Utils.getSHA512(Long.toString(i), Utils._salt));
                        return mockModel;
                    })
                    .map(v -> repository.save(v))
                    .forEach(System.out::println);
        };
    }

}
