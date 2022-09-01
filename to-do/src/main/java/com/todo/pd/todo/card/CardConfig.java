package com.todo.pd.todo.card;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.todo.pd.todo.auth.User;
import com.todo.pd.todo.auth.UserRepository;

@Configuration
public class CardConfig {

    @Bean
    CommandLineRunner cardRunner(CardRepository repository) {
        return args -> {
            Card firstCard = new Card("First Card test.");
            Card secondCard = new Card("Second card test, a bt different.");
            repository.saveAll(List.of(firstCard, secondCard));
        };
    }

    @Bean
    CommandLineRunner userRunner(UserRepository repo) {
        return args -> {
            User u = new User("first", "password", "USER", false);
            repo.save(u);
        };

    }
}
