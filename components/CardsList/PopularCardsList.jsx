import { PopularCardsFragment } from './PopularCardsFragment';
import Styles from './CardsList.module.css';

export const PopularCardsList = () => {
  return (
    <section className={Styles['list-section']}>
      <h2 className={Styles['list-section__title']} id="popular">
        Популярное
      </h2>
      <ul className={Styles['cards-list']}>
        <PopularCardsFragment />
      </ul>
    </section>
  );
};
