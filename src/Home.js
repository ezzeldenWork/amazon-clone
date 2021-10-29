import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home_imge"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      />
      <div className="home__row">
        <Product
          id="215"
          title="some title some title some title some title"
          price="45646"
          rating={5}
          img="https://m.media-amazon.com/images/I/81MEInXvwUL._AC_UL320_.jpg"
        />
        <Product
          id="3432"
          title="some title some title some title some title"
          price="45646"
          rating={4}
          img="https://m.media-amazon.com/images/I/71IdKRlm8+L._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="456"
          title="some title some title some title some title"
          price="45646"
          rating={5}
          img="https://m.media-amazon.com/images/I/71SQSraI7rL._AC_UL320_.jpg"
        />
        <Product
          id="654"
          title="some title some title some title some title"
          price="45646"
          rating={4}
          img="https://m.media-amazon.com/images/I/61duFjP3U5S._AC_UL320_.jpg"

        />
        <Product
          id="52421212315"
          title="some title some title some title some title"
          price="45646"
          rating={2}
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="2157"
          title="some title some title some title some title"
          price="98"
          rating={1}
          img="https://m.media-amazon.com/images/I/61a9RYXjqzL._AC_UL320_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
