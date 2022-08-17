function Card() {
  return (
    <div className="card">
  <div className="favorite">
  <img src="/img/unliked.svg" alt="unliked"/>
  </div>
  <img className="crossimg" width={133} height={123} src="/img/Sneakers/1.jpg" alt="Sneakers"/>
  <p>Кроссовки Vans Sk8-Hi MTE-2</p>
  <div className="m1">
    <div className="m2">
      <span>Цена:</span>
      <b>12 999 руб.</b>
    </div>
    <button className="button">
      <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
    </button>
  </div>
</div>
  )
}

export default Card;
