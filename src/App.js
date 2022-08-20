import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

const arr =[
  { title: 'Кроссовки Nike Blazer Mid Suede', price: 12999, imgUrl: '/img/sneakers/1.jpg'},
  { title: 'Кроссовки Nike Air Max 270', price: 15600, imgUrl: '/img/sneakers/2.jpg'},
  { title: 'Кроссовки Nike Blazer Mid Suede', price: 8499, imgUrl: '/img/sneakers/3.jpg'},
  { title: 'Кроссовки Puma x Aka Boku Future Rider', price: 8999, imgUrl: '/img/sneakers/6.jpg'},
];

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

  {arr.map((obj) => (
    <Card
    title={obj.title}
    price={obj.price}
    imgUrl={obj.imgUrl} />
  ))}
</div>
</div>
</div>

  );
}

export default App;
