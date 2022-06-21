import styles from "./card-component.module.css";
import {useRef, useState} from "react";

export const CardComponent = ({ingredient, description, pieces, presents, addedWords, weight, inStock}) => {
    const [checked, toggleChecked] = useState(false);
    const [isMouseLeave, setIsMouseLeave] = useState(false);
    const cardRef = useRef(null)

    function checkCard() {
        if (inStock && !checked) {
            toggleChecked(true);
            setIsMouseLeave(false);
            cardRef.current.addEventListener('mouseleave', () => {
                setIsMouseLeave(true);
            }, {once: true})
        } else {
            toggleChecked(false);
            setIsMouseLeave(false);
        }
    }

    return (
        <div ref={cardRef} className={styles.card + ' ' + (inStock ? '' : styles.card__disabled ) + ' ' + (checked ? styles.card__checked : '')}>
            <div className={styles.card__wrapper} onClick={() => checkCard()}>
                <div className={styles.card__header}>
                    {!isMouseLeave && <p className={styles.card__topline}>Сказочное заморское яство</p>}
                    {isMouseLeave && <p className={styles.card__topline + ' ' + styles.card__topline__red}>Котэ не одобряет?</p>}
                    <h2 className={styles.card__title}>Нямушка</h2>
                    <p className={styles.card__ingredient}>c {ingredient}</p>
                </div>
                <div className={styles.card__description}>
                    <p>{pieces}</p>
                    <p>{presents}</p>
                    { addedWords && <p>{addedWords}</p>}
                    <div className={styles.card__weight}>
                        <p>{weight} <span>кг</span></p>
                    </div>
                </div>
            </div>
            {
                !inStock &&
                <div className={styles.card__links + ' ' + styles.card__links__no}>
                    <p>Печалька, с {ingredient} закончился.</p>
                </div>
            }
            {
                checked ?
                    (<div className={styles.card__links}>
                        <p>{description}</p>
                    </div>)
                    :
                    inStock ?
                        (<div className={styles.card__links}>
                            <p>Чего сидишь? Порадуй котэ, <button className={styles.card__link} onClick={() => checkCard()}>купи.</button></p>
                        </div>)
                        : false
            }

        </div>
    )
}