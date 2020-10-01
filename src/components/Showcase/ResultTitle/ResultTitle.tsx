import { Container } from 'react-bootstrap';
import { ReactElement } from 'react';

import { useStateApp } from '@src/context/appContext';
import Style from './ResultTitle.module.scss';

const ResultTitle = (): ReactElement => {
  const { products, search, error } = useStateApp();
  const foundResult = !!search && products.length >= 1;
  const notFoundResult = !!search && products.length === 0;
  const resultTitle = () => {
    return (
      <div data-testid="found-result">
        <span>Resultados para </span>
        <strong>{search}</strong>
        <span>:</span>
      </div>
    );
  };

  const titleWithoutResult = () => {
    return (
      <div data-testid="not-found-result">
        <span>No encontramos resultados para </span>
        <strong>{search}</strong>
        <span>:</span>
      </div>
    );
  };

  const titleError = () => {
    return (
      <div data-testid="title-error">
        <span>Ups algo salio mal!!!</span>
      </div>
    );
  };
  const welcomeTitle = () => {
    return (
      <div data-testid="welcome-title">
        <span>Bienvenido!!!</span>
      </div>
    );
  };

  let resultTitleMessage = welcomeTitle();

  if (notFoundResult) resultTitleMessage = titleWithoutResult();
  if (foundResult) resultTitleMessage = resultTitle();
  if (error) resultTitleMessage = titleError();

  return (
    <Container data-testid="result-title" className={Style.resul_title} fluid>
      {resultTitleMessage}
    </Container>
  );
};

export default ResultTitle;
