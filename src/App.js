import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
  return(
    <div className = "wrapper" >
      <Drawer />
      <Header />


<div className="pageAll1">
<div className="Line"></div>
 <div className="pageAll2">
 <h1>Все кроссовки</h1>
 <div className="search-block">
<img src="/img/search.svg" alt="Search"/>
<input placeholder="Поиск..."/>
 </div>
 </div>


<div className="Sneakers">
       <Card />
<div className="card">
  <img className="crossimg" width={133} height={123} src="/img/Sneakers/2.jpg" alt="Sneakers"/>
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
<div className="card">
  <img className="crossimg" width={133} height={123} src="/img/Sneakers/3.jpg" alt="Sneakers"/>
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
<div className="card">
  <img className="crossimg" width={133} height={123} src="/img/Sneakers/6.jpg" alt="Sneakers"/>
  <p>Мужские кроссовки Nike Blazer Mid Suede</p>
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
</div>
</div>
</div>

  );
}

export default App;
