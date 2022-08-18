package com.todo.pd.todo.card;

import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/cards")
public class CardController {

    private final CardService service;

    private final CardModelAssembler assembler;

    @Autowired
    public CardController(CardService service, CardModelAssembler assembler) {
        this.service = service;
        this.assembler = assembler;
    }

    @GetMapping
    CollectionModel<EntityModel<Card>> getAll() {

        List<EntityModel<Card>> cards = service.getAll().stream()
                .map(assembler::toModel)
                .collect(Collectors.toList());
        return CollectionModel.of(cards, linkTo(methodOn(CardController.class).getAll()).withSelfRel());
    }

    @GetMapping("/{id}")
    EntityModel<Card> getCard(@PathVariable Long id) {
        return assembler.toModel(service.getCard(id));
    }

    @PostMapping
    ResponseEntity<?> addCard(@RequestBody String description) {
        EntityModel<Card> cardResource = assembler.toModel(service.addCard(description));
        return ResponseEntity.created(cardResource.getRequiredLink(IanaLinkRelations.SELF).toUri()).body(cardResource);
    }

    @PutMapping("/{id}/complete")
    ResponseEntity<?> completeCard(@PathVariable Long id) {
        EntityModel<Card> cardResource = assembler.toModel(service.updateStatus(id));
        return ResponseEntity.created(cardResource.getRequiredLink(IanaLinkRelations.SELF).toUri()).body(cardResource);
    }

    @PutMapping("/{id}/{desc}")
    ResponseEntity<?> completeCard(@PathVariable Long id, @PathVariable String desc) {
        EntityModel<Card> cardResource = assembler.toModel(service.updateDescription(desc, id));
        return ResponseEntity.created(cardResource.getRequiredLink(IanaLinkRelations.SELF).toUri()).body(cardResource);
    }

    @DeleteMapping("/{id}")
    ResponseEntity<?> removeCard(@PathVariable Long id) {
        service.removeCard(id);
        return ResponseEntity.noContent().build();
    }

}
