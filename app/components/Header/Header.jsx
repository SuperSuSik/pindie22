"use client";

import { useState } from "react";

import Styles from "./Header.module.css";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { AuthForm } from "../AuthForm/AuthForm";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [popupIsOpened, setPopupIsOpened] = useState(false);

  const openPopup = () => {
    setPopupIsOpened(true);
  };
  const closePopup = () => {
    setPopupIsOpened(false);
  };

  const linkList = [
    {
      link: "/new",
      title: "Новинки"
    },
    {
      link: "/popular",
      title: "Популярные"
    },
    {
      link: "/shooters",
      title: "Шутеры"
    },
    {
      link: "/runners",
      title: "Ранеры"
    },
    {
      link: "/pixel-games",
      title: "Пиксельные"
    },
    {
      link: "/tds",
      title: "TDS"
    },
  ];

  return (
    <header className={Styles["header"]}>
      {pathname === "/" ? (
        <span className={Styles["logo"]}>
          <img
            className={Styles["logo__image"]}
            src="/images/logo.svg"
            alt="Логотип Pindie"
          />
        </span>
      ) : (
        <Link href="/" className={Styles["logo"]}>
          <img
            className={Styles["logo__image"]}
            src="/images/logo.svg"
            alt="Логотип Pindie"
          />
        </Link>
      )}
      <nav className={Styles["menu"]}>
        <ul className={Styles["menu__list"]}>
          {linkList.map((el, index) => (
            <li key={index.toString(36)} className={Styles["menu__item"]}>
              <Link
                href={el.link}
                className={`${Styles["menu__link"]} ${
                  pathname === el.link ? Styles["menu__link_active"] : ""
                }`}
              >
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className={Styles["auth"]}>
          <button className={Styles["auth__button"]} onClick={openPopup}>
            Войти
          </button>
        </div>
      </nav>
      <Overlay isOpened={popupIsOpened} close={closePopup} />
      <Popup isOpened={popupIsOpened} close={closePopup}>
        <AuthForm />
      </Popup>
    </header>
  );
};