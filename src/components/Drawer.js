function Drawer() {
  return (
    <div style={{display: 'none'}} className="overlay">
    <div className="drawer">
      <h2>Корзина <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/></h2>
      <div className="Items">
      <div className="cartItem">
  <img width={80} height={70} src="/img/sneakers/1.jpg" alt="Sneakers"/>
  <div className="crossTitle">
    <p>Мужские кроссовки Nike Blazer Mid Suede</p>
    <b>12 999 руб.</b>
  </div>
  <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
</div>
<div className="cartItem">
  <img width={80} height={70} src="/img/sneakers/3.jpg" alt="Sneakers"/>
  <div className="crossTitle">
    <p>Мужские кроссовки Nike Blazer Mid Suede</p>
    <b>12 999 руб.</b>
  </div>
  <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
</div>
<div className="cartItem">
  <img width={80} height={70} src="/img/sneakers/6.jpg" alt="Sneakers"/>
  <div className="crossTitle">
    <p>Мужские кроссовки Nike Blazer Mid Suede</p>
    <b>12 999 руб.</b>
  </div>
  <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
</div>
      </div>
    <div className="cartTotalBlock">
      <ul>
        <li className="finalText">
          <span>Итого</span>
          <div></div>
          <b>21 498 руб.</b>
        </li>
        <li className="finalText">
        <span>Налог 5%</span>
          <div></div>
          <b>1074 руб.</b>
        </li>
      </ul>
      <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="Arrow"/></button>
      </div>
    </div>
    </div>
  )
}

export default Drawer;
