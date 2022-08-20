import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://630124b79a1035c7f8fea66e.mockapi.io/Items') /*ссылка на массив на бэке*/
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        console.log(json); /*пересмотреть урок 4 и разобраться в том, как именно формируются данные, отображаемые в карточке*/
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]); /*добавление в корзину*/
  };

  return (
    <div className="wrapper" >
      {cartOpened ? <Drawer items ={cartItems} onClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />; {/*кнопка "+" на карточке*/} 

      <div className="pageAll1">
        <div className="Line"></div>
        <div className="pageAll2">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="Sneakers">

          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl} /*входные данные на карточку */
              onFavorite={() => console.log('Добавили в закладки')}
          onPlus={(obj) => onAddToCart(obj)} /*добавление в корзину*/
            />
          ))}
        </div>
      </div>
    </div>

  )
}

export default App;
