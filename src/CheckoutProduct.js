import React from "react";
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id, img, price, rating, title}) {
  const [{basket}, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "Remove_From_Basket",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={img} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove To Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
