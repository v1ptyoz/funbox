import {CardComponent} from "../card-component/card-component";
import {getPostfix} from "../../helpers/helpers";

const CardContainer = ({ingredient, description, pieces, presents, weight, inStock}) => {
    const piecesWord = `${pieces} ${getPostfix(pieces, 'pieces')}`
    const presentsWord = presents > 1 ? `${presents} ${getPostfix(presents, 'presents')} в подарок` : 'мышь в подарок';
    const addedWords = presents >= 5 ? 'заказчик доволен' : false;
    const weightDelimeter = weight >= 1 ? weight : `${0},${weight * 10}`

    return (
        <CardComponent
            ingredient={ingredient}
            description={description}
            pieces={`${piecesWord}`}
            presents={`${presentsWord}`}
            addedWords={addedWords}
            weight={weightDelimeter}
            inStock={inStock}
        />
    );
};

export default CardContainer;