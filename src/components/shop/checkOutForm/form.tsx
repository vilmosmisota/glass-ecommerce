import { useState, useEffect } from "react";
import { IpropsContents } from "../../../interfaces/interfaces";
import ButtonStripe from "../../buttonStripe/buttonStripe";
import GetCountries from "./getCountries";
import europe from "../../../utils/countries";
import Image from "next/image";

export default function Form({ contents }: IpropsContents) {
  const {
    countriesLists,
    price,
    defaultShippingFee,

    euShippingFee,

    ukShippingFee,
    bookImg,
  } = contents[0].fields;

  const [bookPrice, setBookPrice] = useState<number>(price);
  const [quantity, setQuantity] = useState<number>(1);
  const [countryCode, setCountryCode] = useState<string>("GB");
  const [shippingFee, setShippingFee] = useState<number>(ukShippingFee);
  const [shippingRateCode, setShippingRateCode] = useState<string>(
    "shr_1JswGlL9MHXMTXOEPHogSAGu"
  );
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    if (countryCode === "GB") {
      setShippingFee(ukShippingFee);
      setShippingRateCode("shr_1JswGlL9MHXMTXOEPHogSAGu");
    } else if (europe.includes(countryCode)) {
      setShippingFee(euShippingFee);
      setShippingRateCode("shr_1JswKZL9MHXMTXOE9QfCvC5Q");
    } else {
      setShippingFee(defaultShippingFee);
      setShippingRateCode("shr_1JswMQL9MHXMTXOESH44OOi4");
    }
  }, [countryCode, ukShippingFee, euShippingFee, defaultShippingFee]);

  useEffect(() => {
    setBookPrice(price * quantity);
  }, [quantity, price]);

  useEffect(() => {
    setTotal(bookPrice + shippingFee);
  }, [bookPrice, shippingFee]);

  console.log(`this is shipping: ${shippingRateCode}`);

  return (
    <>
      <form className="shop-form">
        <div className="shop-book-img">
          <Image
            src={`https:${bookImg.fields.file.url}`}
            height={bookImg.fields.file.details.image.height}
            width={bookImg.fields.file.details.image.width}
            alt="book cover"
            className="header-img"
            layout="responsive"
          />
        </div>
        <section>
          <div>
            <p>Price:</p>
          </div>
          <div>
            <p>£{bookPrice}</p>
          </div>
        </section>
        <label>
          Quantity:
          <select
            name="quantity"
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>

        <section>
          <label>
            Select Country:
            <select
              onChange={(e) => setCountryCode(e.target.value)}
              className="select-countries"
              required
            >
              <GetCountries countriesLists={countriesLists} />
            </select>
          </label>
        </section>
        <section>
          <div>
            <p>Shipping Fee:</p>
          </div>
          <div>
            <p>£{shippingFee}</p>
          </div>
        </section>
        <section className="total-container">
          <div>
            <p>Total</p>
          </div>
          <div>
            <p>£{total}</p>
          </div>
        </section>
      </form>
      <div className="stripe-btn-wrapper">
        <ButtonStripe
          countryCode={countryCode}
          quantity={quantity}
          total={price}
          shippingRateCode={shippingRateCode}
        />
      </div>
    </>
  );
}
