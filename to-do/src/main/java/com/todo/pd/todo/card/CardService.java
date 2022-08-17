package com.todo.pd.todo.card;

import java.util.List;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.pd.todo.enums.Status;

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
        return repository.findAll();
    }

    public void addCard(String description) {
        repository.save(new Card(description));
    }

    public List<Card> removeCard(Long id) {
        repository.deleteById(id);
        return repository.findAll();
    }

    public List<Card> updateStatus(Long id) {
        Card card = repository.findById(id).get();
        card.setStatus(Status.DONE);
        repository.save(card);
        return repository.findAll();
    }

    public List<Card> updateDescription(String description, Long id) {
        Card card = repository.findById(id).get();
        card.setDescription(description);
        repository.save(card);
        return repository.findAll();
    }
}
