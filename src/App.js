import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    /* fetch('https://630124b79a1035c7f8fea66e.mockapi.io/Items') /*ссылка на массив на бэке
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        console.log(json); /*пересмотреть урок 4 и разобраться в том, как именно формируются данные, отображаемые в карточке
      });*/
    axios.get('https://630124b79a1035c7f8fea66e.mockapi.io/Items')
      .then((res) => {
        setItems(res.data);
      });
    axios.get('https://630124b79a1035c7f8fea66e.mockapi.io/Cart')
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://630124b79a1035c7f8fea66e.mockapi.io/Cart', obj);
    setCartItems((prev) => [...prev, obj]) /*добавление в корзину ...prev - предыдущее значение + obj - нынедобавленное*/
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://630124b79a1035c7f8fea66e.mockapi.io/Cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const onAddToFavorites = (obj) => {
    axios.post('https://630124b79a1035c7f8fea66e.mockapi.io/Favorite', obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value); /*что за target?*/
  };

  return (
    <div className="wrapper" >
      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} /> : null}
      <Header onClickCart={() => setCartOpened(true)} /> {/*кнопка "+" на карточке. изначаьно всегда Ложное*/}

      {/*<Route path="/test">Это тестовая информация</Route>*/}

      <div className="pageAll1">
        <div className="Line"></div>
        <div className="pageAll2">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && <img onClick={() => setSearchValue('')} className="clear" src="/img/btn-remove.svg" alt="Clear" /> /*если есть searchValue, то отображать "X"*/}
            <input onChange={onChangeSearchInput} value={searchValue  /*контролируемый input. Передаю то, что находится в searchValue*/} placeholder="Поиск..." />
          </div>
        </div>

        <div className="Sneakers">

          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue))/*
          проходится по массиву перед рендерингом и исключает все item'ы у которых в title нет того что написано в searchValue. 
          includes - будет искать точное сочетание, а toLowerCase() - переводит title в нижний регистр*/
            .map((item, index) => (
              <Card
                key={index} /*за уник. ключ не взял имеющийся в масиве тайтл (может повторяться)*/
                title={item.title} /*toLowerCase() - здесь не применяется, т.к фльтрация здесь не проводится*/
                price={item.price}
                imgUrl={item.imgUrl} /*входные данные на карточку */
                onFavorite={(obj) => onAddToFavorites(obj)}
                onPlus={(obj) => onAddToCart(obj)} /*добавление в корзину*/
              />
            ))}
        </div>
      </div>
    </div>

  )
}

export default App;
