function Header(props) {
  console.log(props);
  return (
    <header>
      <div className="headerLeft">
        <img width={40} height={40} src="/img/logo.png" alt="Logo" />
        <div>
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="headerRight">
        <li onClick={props.onClickCart}>
          <img width={18} height={18} src="/img/cart.svg" alt="Корзина" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/heart.svg" alt="Закладки" />
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="Пользователь" />
        </li>
      </ul>
    </header>
  )
}

export default Header;
