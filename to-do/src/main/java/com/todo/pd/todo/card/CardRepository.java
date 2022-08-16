package com.todo.pd.todo.card;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardRepository extends JpaRepository<Card, Long> {

    Optional<Card> editStatus(Long id);

    Optional<Card> editDescription(Long id);
}
