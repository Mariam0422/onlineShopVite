import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import divan from "./img/divan.jpg";
import karkas from "./img/karkaskrovati.jpg";
import kshkaf from "./img/knijnyshkaf.jpg";
import kreslo from "./img/kreslo.jpeg";
import ofKreslo from "./img/ofiicekreslo.jpg";
import ostrov from "./img/ostrov.jpg";
import patio from "./img/patio.jpg";
import polka from "./img/polkaobuvi.jpeg";
import puf from "./img/puf.jpg";
import shkaf from "./img/shkaf.jpg";
import tumbochka from "./img/tumbochka.jpg";
import stol from "./img/stol.jpg";
import stolik from "./img/stolik.jpg";
import tvTumba from "./img/tv-tumba.jpg";
import "./App.css";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Современный диван",
          img: divan,
          desc: "Стильный и удобный диван с премиальной тканевой обивкой.",
          category: "livingRoom",
          price: 499.99,
        },
        {
          id: 2,
          title: "Дубовый обеденный стол",
          img: stol,
          desc: "Стол из массива дуба с деревенской отделкой, рассчитан на 6 персон.",
          category: "livingRoom",
          price: 799.0,
        },
        {
          id: 3,
          title: "Офисное кресло",
          img: ofKreslo,
          desc: "Регулируемое офисное кресло с поддержкой поясницы для максимального комфорта.",
          category: "office",
          price: 149.99,
        },
        {
          id: 4,
          title: "Каркас кровати",
          img: karkas,
          desc: "Элегантная кровать Queen-size с современным дизайном и прочной конструкцией.",
          category: "bedroom",
          price: 349.5,
        },
        {
          id: 5,
          title: "Книжный шкаф",
          img: kshkaf,
          desc: "Пятиуровневый книжный шкаф с минималистичным дизайном, идеально подходит для любой комнаты.",
          category: "livingRoom",
          price: 129.99,
        },
        {
          id: 6,
          title: "Кресло-реклайнер",
          img: kreslo,
          desc: "Роскошное кресло-реклайнер с мягкой кожаной обивкой и несколькими положениями наклона.",
          category: "livingRoom",
          price: 599.0,
        },
        {
          id: 7,
          title: "Кухонный остров",
          img: ostrov,
          desc: "Многофункциональный кухонный остров с местом для хранения и деревянной столешницей.",
          category: "kitchen",
          price: 249.99,
        },
        {
          id: 8,
          title: "Набор для патио",
          img: patio,
          desc: "Прочный комплект для патио, включающий стол, 4 стула и подушки.",
          category: "street",
          price: 899.99,
        },
        {
          id: 9,
          title: "Шкаф",
          img: shkaf,
          desc: "Просторный шкаф с раздвижными дверями и встроенным зеркалом.",
          category: "bedroom",
          price: 449.99,
        },
        {
          id: 10,
          title: "Журнальный столик",
          img: stolik,
          desc: "Столик с стеклянной столешницей и современной хромированной рамой.",
          category: "livingRoom",
          price: 199.99,
        },
        {
          id: 11,
          title: "Пуф",
          img: puf,
          desc: "Компактный пуф с мягкой тканевой обивкой, идеально подходит для отдыха ног.",
          category: "livingRoom",
          price: 89.99,
        },
        {
          id: 12,
          title: "Тумбочка",
          img: tumbochka,
          desc: "Стильная тумбочка с ящиками для хранения, выполнена в скандинавском стиле.",
          category: "bedroom",
          price: 119.99,
        },
        {
          id: 13,
          title: "Полка для обуви",
          img: polka,
          desc: "Компактная полка для обуви, идеальна для прихожей.",
          category: "hallway",
          price: 69.99,
        },
        {
          id: 14,
          title: "ТВ-тумба",
          img: tvTumba,
          desc: "Тумба под ТВ с местом для хранения и современным дизайном.",
          category: "livingRoom",
          price: 299.99,
        },
      ],
      showFullItem: false,
      fullItem: {}
    };
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  

  }
  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  onShowItem(item){
    this.setState({fullItem: item});
    this.setState({showFullItem: !this.state.showFullItem});    
  }
  chooseCategory(category) {
    if(category === "all"){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({currentItems: this.state.items.filter(el => el.category === category) })
  }
  addToOrder(item) {
    const isAlreadyInOrder = this.state.orders.some((el) => el.id === item.id);
    if (!isAlreadyInOrder) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory}/>
        <Items items={this.state.currentItems} onAdd={this.addToOrder} onShowItem={this.onShowItem}/>
         {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem}/>}
        <Footer />
      </div>
    );
  }
}

export default App;
