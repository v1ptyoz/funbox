import CardContainer from "../card-container/card-container";
import styles from "./card-list.module.css";

const CardList = ({cards}) => {
    return (
        <ul className={styles.card__list}>
            {cards.map(card => {
                return (
                    <li key={card.id}>
                        <CardContainer
                            ingredient={card.ingredient}
                            description={card.description}
                            pieces={card.pieces}
                            presents={card.presents}
                            weight={card.weight}
                            inStock={card.inStock}
                        >
                        </CardContainer>
                    </li>
                )
            })
            }
        </ul>
    );
};

export default CardList;