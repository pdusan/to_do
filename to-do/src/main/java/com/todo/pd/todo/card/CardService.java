package com.todo.pd.todo.card;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.pd.todo.enums.Status;
import com.todo.pd.todo.exceptions.CardAlreadyExistsException;
import com.todo.pd.todo.exceptions.CardNotFoundException;
import com.todo.pd.todo.exceptions.DatabaseAccessException;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CardService {

    private final CardRepository repository;

    @Autowired
    public CardService(CardRepository repository) {
        this.repository = repository;
    }

    public List<Card> getAll() {
        log.info("Retreiving all cards");
        try {
            return repository.findAll();
        } catch (Exception e) {
            throw new DatabaseAccessException("Error while accessing database", e);
        }
    }

    public void addCard(String description) {
        log.info("Adding new card to database");
        try {
            repository.save(new Card(description));
        } catch (Exception e) {
            if (repository.findAll().stream().filter(p -> p.getDescription().equals(description)).findAny().isPresent())
                throw new CardAlreadyExistsException("Card with this description already exists.", e);
            else
                throw new DatabaseAccessException("Error while accessing database", e);
        }
    }

    public List<Card> removeCard(Long id) {
        log.info("Deleting card with id: {}", id);
        try {
            repository.deleteById(id);
            return repository.findAll();
        } catch (Exception e) {
            if (!repository.existsById(id))
                throw new CardNotFoundException("Card with provided id not found.", e);
            else
                throw new DatabaseAccessException("Error while accessing database", e);
        }
    }

    public List<Card> updateStatus(Long id) {
        log.info("Updating status of card {}", id);
        try {
            Card card = repository.findById(id).get();
            card.setStatus(Status.DONE);
            repository.save(card);
            return repository.findAll();
        } catch (Exception e) {
            if (!repository.existsById(id))
                throw new CardNotFoundException("Card with provided id not found.", e);
            else
                throw new DatabaseAccessException("Error while accessing database", e);
        }
    }

    public List<Card> updateDescription(String description, Long id) {
        log.info("Updating description of card {}", id);
        try {
            Card card = repository.findById(id).get();
            card.setDescription(description);
            repository.save(card);
            return repository.findAll();
        } catch (Exception e) {
            if (!repository.existsById(id))
                throw new CardNotFoundException("Card with provided id not found.", e);
            else
                throw new DatabaseAccessException("Error while accessing database", e);
        }
    }
}
