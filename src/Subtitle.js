import React from 'react'
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import "./Subtotal.css"

function Subtitle() {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} item) : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift" >
              <input type="checkbox" /> thir order
            </small>
          </>
        )}
        value={getBasketTotal(basket)}
        decimalScale={2} displayType={"text"} thousandSeparator={true} prefix={"$"} />
      <button >Proceed To Checkout</button>
    </div>
  )
}

export default Subtitle
