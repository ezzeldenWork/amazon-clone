import React from "react";
import {useStateValue} from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtitle from "./Subtitle"
function Checkout() {
  const [{basket}] = useStateValue();
  return (
    <>
      <div className="checkout">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
        />
        {basket?.length == 0 ? (
          <h2>Go Back And buy Something Man 🎁</h2>
        ) : (
          <div>
            <h2 className="checkOut Title ">Great</h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                img={item.img}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div className="totole">
          {/* <Subtitle/> */}
          Subtitle
        </div>
      )}
    </>
  );
}

export default Checkout;
