package com.todo.pd.todo.card;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lombok.extern.slf4j.Slf4j;

@Repository
public interface CardRepository extends JpaRepository<Card, Long> {

}
