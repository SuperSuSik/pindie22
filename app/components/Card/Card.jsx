import Styles from "./Card.module.css"
export const Card = (props) => {
    return(
        <article className={Styles['card']}>
            <img src={props.image} className={Styles['card_image']} />
            <div className={Styles['card_content-block']} >
                <h3 className={Styles['card_title']}>{props.title}</h3>
                <p className={Styles['card_description']}>{props.description}</p>
                <div className={Styles['card_info-container']}>
                    <p className={Styles['card_author']}>
                        Автор:{' '}
                        <span className={Styles['card_accent']}>{props.developer}</span>
                    </p>
                    <p className={Styles['card_votes']}>
                        Голосов на сайте:
                        <span className={Styles['card_accent']}>{props.users.length}</span>
                    </p>
                </div>
            </div>
        </article>
    )
}