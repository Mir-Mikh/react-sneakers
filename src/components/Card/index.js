import React from 'react';
import styles from './Card.module.scss';

function Card({title, imgUrl, price, onFavorite, onPlus}) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({title, imgUrl, price});
    setIsAdded(!isAdded);
  };

  {/*const onClickButton = () => {
  alert(props.title);
};*/}

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/img/unliked.svg" alt="unliked" />
      </div>
      <img className="crossimg" width={133} height={123} src={imgUrl} alt="Sneakers" />
      <p>{title}</p>
      <div className="m1">
        <div className="m2">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        {/*<button className="button" onClick={props.onPlus}>*/}
        <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
        {/*</div></button>*/}
      </div>
    </div>
  )
}

export default Card;
