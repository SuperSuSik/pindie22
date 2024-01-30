import Styles from "./CardsList.module.css";
export const NewCardsFragment = () => {
  return (
    <>
      <li className={Styles["cards-list__item"]}>
        <a href="/game-id.html" className={Styles["card-list__link"]}>
          <article className={Styles["card"]}>
            <img
              src="https://code.s3.yandex.net/teens/pindie-games/go-away/cover.jpg"
              alt=""
              className={Styles["card__image"]}
            />
            <div className={Styles["card__content-block"]}>
              <h3 className={Styles["card__title"]}>Go Away</h3>
              <p className={Styles["card__description"]}>
                Цель игры: добраться до конца уровня, не столкнувшись с
                встречными автомобилями.Дополнительные возможности: в игре можно
                проезжать по увеличивающей скорость стрелке, которые улучшают
                характеристики машинки в скорости. "Прыжок" позволяет машинке
                перепрыгивать препятствие.
              </p>
              <div className={Styles["card__info-container"]}>
                <p className={Styles["card__author"]}>
                  Автор: <span className={Styles["card__accent"]}>Mahisto</span>
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
              src="https://code.s3.yandex.net/teens/pindie-games/gunner/cover.png"
              alt=""
              className={Styles["card__image"]}
            />
            <div className={Styles["card__content-block"]}>
              <h3 className={Styles["card__title"]}>G.U.N.N.E.R.</h3>
              <p className={Styles["card__description"]}>
                {" "}
                Ваша задача — отбиваться от бесконечных волн врагов, которых
                будет становится все больше и больше, как долго вы сможете
                продержаться?
              </p>
              <div className={Styles["card__info-container"]}>
                <p className={Styles["card__author"]}>
                  Автор: <span className={Styles["card__accent"]}>IDKWIAm</span>
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
              src="https://code.s3.yandex.net/teens/pindie-games/space-terror/cover.png"
              alt=""
              className={Styles["card__image"]}
            />
            <div className={Styles["card__content-block"]}>
              <h3 className={Styles["card__title"]}>Space Terror</h3>
              <p className={Styles["card__description"]}>
                Летите сквозь космос и уничтожайте все на своем пути! Пролетите
                как можно дальше!
              </p>
              <div className={Styles["card__info-container"]}>
                <p className={Styles["card__author"]}>
                  Автор: <span className={Styles["card__accent"]}>IDKWIAm</span>
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
              src="https://code.s3.yandex.net/teens/pindie-games/square-slayer/cover.png"
              alt=""
              className={Styles["card__image"]}
            />
            <div className={Styles["card__content-block"]}>
              <h3 className={Styles["card__title"]}>Square Slayer</h3>
              <p className={Styles["card__description"]}>
                circle shoot square heal levelup crash game.
              </p>
              <div className={Styles["card__info-container"]}>
                <p className={Styles["card__author"]}>
                  Автор: <span className={Styles["card__accent"]}>niclan</span>
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
    </>
  );
};
