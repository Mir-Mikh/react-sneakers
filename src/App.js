function App() {
  return(
    <div className = "wrapper" >
      <header>
  <div className = "headerLeft">
  <img width={40} height={40} src="/img/logo.png" />
 <div className="headerinfo">
  <h3>React Sneakers</h3>
  <p>Магазин лучшх кроссовок</p>
  </div>
  </div>
  <ul className="headerRight">
    <li>
      <img width={18} height={18} src="/img/cart.svg" />
      <span>1205 руб.</span>
    </li>
    <li>
      <img width={18} height={18} src="/img/user.svg" />
    </li>
  </ul>
</header>
<div className="pageAll">
  <h1>Все кроссовки</h1>

<div className="Sneakers">
<div className="card">
  <img className="crossimg" width={153} height={153} src="/img/Sneakers/1.jpg" alt="Sneakers"/>
  <p>Кроссовки Vans Sk8-Hi MTE-2</p>
  <div className="m1">
    <div className="m2">
      <span>Цена:</span>
      <b>12 999 руб.</b>
    </div>
    <button className="button">
      <img width={11} height={11} src="/img/plus.png" alt="Plus"/>
    </button>
  </div>
</div>
<div className="card">
  <img className="crossimg" width={153} height={153} src="/img/Sneakers/2.jpg" alt="Sneakers"/>
  <p>Кроссовки Vans Sk8-Hi MTE-2</p>
  <div className="m1">
    <div className="m2">
      <span>Цена:</span>
      <b>12 999 руб.</b>
    </div>
    <button className="button">
      <img width={11} height={11} src="/img/plus.png" alt="Plus"/>
    </button>
  </div>
</div>
<div className="card">
  <img className="crossimg" width={153} height={153} src="/img/Sneakers/3.jpg" alt="Sneakers"/>
  <p>Кроссовки Vans Sk8-Hi MTE-2</p>
  <div className="m1">
    <div className="m2">
      <span>Цена:</span>
      <b>12 999 руб.</b>
    </div>
    <button className="button">
      <img width={11} height={11} src="/img/plus.png" alt="Plus"/>
    </button>
  </div>
</div>
<div className="card">
  <img className="crossimg" width={153} height={153} src="/img/Sneakers/6.jpg" alt="Sneakers"/>
  <p>Кроссовки Vans Sk8-Hi MTE-2</p>
  <div className="m1">
    <div className="m2">
      <span>Цена:</span>
      <b>12 999 руб.</b>
    </div>
    <button className="button">
      <img width={11} height={11} src="/img/plus.png" alt="Plus"/>
    </button>
  </div>
</div>
</div>
</div>
</div>

  );
}

export default App;
