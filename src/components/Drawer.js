function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>Корзина <img onClick={onClose} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" /></h2>

        {
          items.length > 0 ? <div> <div className="Items">
            {items.map((obj) => (
              <div className="cartItem">
                <img width={80} height={70} src={obj.imgUrl} alt="Sneakers" />
                <div className="crossTitle">
                  <p>{obj.title}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
              </div>
            ))}
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
              <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="Arrow" /></button>
            </div></div> : <div class="cartEmpty">
            <img width="120px" height="120px" src="/img/empty-cart.jpg" alt="Empty" />
            <h2>Корзина пустая</h2>
            <p class="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onClose} class="greenButton">
              <img src="/img/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
        }

        {/*<div className="cartItem">
            <img width={80} height={70} src="/img/sneakers/3.jpg" alt="Sneakers" />
            <div className="crossTitle">
              <p>Мужские кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem">
            <img width={80} height={70} src="/img/sneakers/6.jpg" alt="Sneakers" />
            <div className="crossTitle">
              <p>Мужские кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
  </div>----------------------------------------- вышеуказанныф массив представлен теперь в виде: 
   <div className="Items">
          {items.map((obj) => (
            <div className="cartItem">
            <img width={80} height={70} src={obj.imgUrl} alt="Sneakers" />
              <div className="crossTitle">
                <p>{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>
          ))}*/}
      </div>
    </div>
  )
}

export default Drawer;
