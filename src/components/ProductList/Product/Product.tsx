import React, { ReactElement } from 'react';

import ProductT from '@src/type/product';
import Button from '@components/Button';
import { useDispatchApp } from '@src/context/appContext';
import Style from './Product.module.scss';

const Product = (product: ProductT): ReactElement => {
  const { id, brand, description, price, discountRate, oldPrice, image } = product;
  const dispatch = useDispatchApp();

  const handleOnClick = () => {
    dispatch({ type: 'ADD_SHOPPING_CART', params: { product } });
  };

  return (
    <div data-testid="product" className={Style.product}>
      <img className={Style.product_image} src={`svg/${image}`} alt={`product-${id}`} />
      <div className={Style.product_info_content}>
        <div className={Style.product_info}>
          <strong className={Style.product_brand}>{brand}</strong>
          <span className={Style.product_description}>{description}</span>
        </div>
        <div className={Style.product_info_price}>
          <div>
            <span className={Style.product_price}>{`$${price}`}</span>
            {discountRate && <span className={Style.product_discount}>{`${discountRate}%`}</span>}
          </div>
          {oldPrice && <span className={Style.product_old_price}>{`$${oldPrice}`}</span>}
        </div>
      </div>
      <Button data-testid="button" text="Agregar" onClick={handleOnClick} />
    </div>
  );
};

export default Product;
