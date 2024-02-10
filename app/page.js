import { getGamesByCategory } from "./data/data-utils";

import Image from "next/image";
import styles from "./page.module.css";
import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { CardList, CardsList } from "./components/CardsList/CardList";
import { NewCardsFragment } from "./components/CardsList/NewCardsFragment";
import { PopularCardsFragment } from "./components/CardsList/PopularCardsFragment";

export default function Home() {
  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");
  return (
<main> 
  <Banner/> 
  <CardList id="popular" title="Популярные" data={popularGames}> 
    <PopularCardsFragment /> 
  </CardList>
  <CardList id="new" title="Новинки" data={newGames}> 
    <NewCardsFragment /> 
  </CardList> 
  <Promo/> 
</main> 
);
}
