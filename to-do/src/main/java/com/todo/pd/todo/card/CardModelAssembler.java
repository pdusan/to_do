package com.todo.pd.todo.card;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import com.todo.pd.todo.enums.Status;

@Component
public class CardModelAssembler implements RepresentationModelAssembler<Card, EntityModel<Card>> {

    @Override
    public EntityModel<Card> toModel(Card card) {
        EntityModel<Card> cardModel = EntityModel.of(card,
                linkTo(methodOn(CardController.class).getCard(card.getId())).withSelfRel(),
                linkTo(methodOn(CardController.class).getAll()).withRel("cards"));

        if (card.getStatus() == Status.NOT_DONE) {
            cardModel.add(linkTo(methodOn(CardController.class).completeCard(card.getId())).withRel("complete"));
        }

        return cardModel;
    }
}
