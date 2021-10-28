import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";

function Product({id, title, price, rating, img}) {
  const [{basket}, dispatch] = useStateValue();

  const addTodBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        img : img,
        price: price,
        rating :rating
      }
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={img} />
      <button onClick={addTodBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
