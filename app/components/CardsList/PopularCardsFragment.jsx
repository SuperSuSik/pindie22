import Styles from "./CardsList.module.css";

export const PopularCardsFragment = () => {
  return (
    <>
      <li className={Styles["cards-list__item"]}>
        <a href="/game-id.html" className={Styles["card-list__link"]}>
          <article className={Styles["card"]}>
            <img
              src="https://code.s3.yandex.net/teens/pindie-games/cristal-keeper/cover.png"
              alt=""
              className={Styles["card__image"]}
            />
            <div className={Styles["card__content-block"]}>
              <h3 className={Styles["card__title"]}>Crystal Kepper</h3>
              <p className={Styles["card__description"]}>
                Управляйте боевым дроном и в течении 5 минут любой ценой
                защищайте кристалл от враждебных космо-слизней.
              </p>
              <div className={Styles["card__info-container"]}>
                <p className={Styles["card__author"]}>
                  Автор:{" "}
                  <span className={Styles["card__accent"]}>Lonely Baobab</span>
                </p>
                <p className={Styles["card__votes"]}>
                  Голосов на сайте:
                  <span className={Styles["card__accent"]}>20</span>
                </p>
              </div>
            </div>
          </article>
        </a>
      </li>
      <li className={Styles["cards-list__item"]}>
        <a href="/game-id.html" className={Styles["card-list__link"]}>
          <article className={Styles["card"]}>
            <img
              src="https://code.s3.yandex.net/teens/pindie-games/dangeons-n-caves-prologue/cover.png"
              alt=""
              className={Styles["card__image"]}
            />
            <div className={Styles["card__content-block"]}>
              <h3 className={Styles["card__title"]}>
                Dangeons'n'Caves. Prologue
              </h3>
              <p className={Styles["card__description"]}>
                Безымянный герой исследует пещеры и подземелья, чтобы найти
                больше информации о себе.
              </p>
              <div className={Styles["card__info-container"]}>
                <p className={Styles["card__author"]}>
                  Автор: <span className={Styles["card__accent"]}>F-Style</span>
                </p>
                <p className={Styles["card__votes"]}>
                  Голосов на сайте:
                  <span className={Styles["card__accent"]}>10</span>
                </p>
              </div>
            </div>
          </article>
        </a>
      </li>
      <li className={Styles["cards-list__item"]}>
        <a href="/game-id.html" className={Styles["card-list__link"]}>
          <article className={Styles["card"]}>
            <img
              src="https://code.s3.yandex.net/teens/pindie-games/defence-of-crystal/cover.png"
              alt=""
              className={Styles["card__image"]}
            />
            <div className={Styles["card__content-block"]}>
              <h3 className={Styles["card__title"]}>Defence of Crystal</h3>
              <p className={Styles["card__description"]}>
                Вы играете за волшебника, последнюю надежду Земли, которую
                поглотил мрак... Вы должны любой ценой защищать магический
                кристалл, ведь это единственное, что сможет вернуть всё на круги
                своя, но полчища монстров так и норовят его уничтожить. Ваша
                задача уничтожить все кладбища.
              </p>
              <div className={Styles["card__info-container"]}>
                <p className={Styles["card__author"]}>
                  Автор: <span className={Styles["card__accent"]}>MastWe</span>
                </p>
                <p className={Styles["card__votes"]}>
                  Голосов на сайте:
                  <span className={Styles["card__accent"]}>20</span>
                </p>
              </div>
            </div>
          </article>
        </a>
      </li>
    </>
  );
};
