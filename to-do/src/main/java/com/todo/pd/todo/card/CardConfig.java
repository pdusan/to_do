package com.todo.pd.todo.card;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CardConfig {

    @Bean
    CommandLineRunner commandLineRunner(CardRepository repository) {
        return args -> {
            Card firstCard = new Card("First Card test.");
            Card secondCard = new Card("Second card test, a bt different.");
            repository.saveAll(List.of(firstCard, secondCard));
        };
    }
}
