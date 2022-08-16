package com.todo.pd.todo.card;

import java.util.List;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public void addCard() {

    }

    public void removeCard() {

    }

    public void updateStatus() {

    }

    public void updateDescription() {

    }
}
