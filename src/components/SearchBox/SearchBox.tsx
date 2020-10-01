import React, { ReactElement } from 'react';

import { useDispatchApp } from '@src/context/appContext';
import fetchProducts from '@src/actions/fetchProducts';
import resetProducts from '@src/actions/restProducts';

import Style from './SearchBox.module.scss';

type SearcherT = {
  placeholder?: string;
};

const SearchBox = ({ placeholder, ...props }: SearcherT): ReactElement => {
  const dispatch = useDispatchApp();

  const handleOnKeyPress = (event: any) => {
    if (event.charCode === 13) {
      const search = event.target.value;
      search.length > 0 && fetchProducts(search, dispatch);
    }
  };

  const handleOnChange = (event: any) => {
    const search = event.target.value;
    search.length === 0 && resetProducts(dispatch);
  };

  return (
    <input
      data-testid="search-box"
      className={Style.search_box}
      type="text"
      onKeyPress={handleOnKeyPress}
      placeholder={placeholder}
      onChange={handleOnChange}
      {...props}
    />
  );
};

export default SearchBox;
