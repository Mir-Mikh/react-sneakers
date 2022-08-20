import styles from'./Card.module.scss';

function Card(props) {
const onClickButton = () => {
  alert(props.title);
};

  return (
    <div className={styles.card}>
  <div className={styles.favorite}>
  <img src="/img/unliked.svg" alt="unliked"/>
  </div>
  <img className="crossimg" width={133} height={123} src={props.imgUrl} alt="Sneakers"/>
  <p>{props.title}</p>
  <div className="m1">
    <div className="m2">
      <span>Цена:</span>
      <b>{props.price} руб.</b>
    </div>
    <button className="button" onClick={onClickButton}>
      <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
    </button>
  </div>
</div>
  )
}

export default Card;
