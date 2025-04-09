import React from "react";
import ReactDom from "react-dom/client"
import './index.css'

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "images/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "images/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "images/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "images/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "images/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "images/prosciutto.jpg",
        soldOut: false,
    },
];


function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

function Header() {
    return (
        <div>
            <header>
                <h1 className="header">React pizza resturant</h1>
            </header>
        </div>
    )
}

function Menu() {
    const pizza = pizzaData
    const numPizzas = pizza.length
    return (
        <main className="menu">
            <h2>Our menu</h2>
            {numPizzas > 0  &&
                <div className="pizzas">
                    {
                        pizza.map(pizza =>
                            <Pizza pizzaObj={pizza} key={pizza.name} />)
                    }
                </div>}
        </main>
    )
}

function Pizza(prop) {
    return (
        <div className="pizza">
            <img src={prop.pizzaObj.photoName} alt={prop.pizzaObj.name}></img>
            <div className="">
                <h3>{prop.pizzaObj.name}</h3>
                <p>{prop.pizzaObj.ingredients}</p>
                <span>Pice : {prop.pizzaObj.price}$</span>
            </div>
        </div>
    )
}

function Footer() {
    const hour = new Date().getHours()
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour
    return (
        <footer className="footer">
            {isOpen && (
                <div className="order">
                    <p>We`re open until {closeHour}:00. come to visit us or order online !</p>
                    <button className="btn">Order</button>
                </div>
            )}
        </footer>
    )
}


const root = ReactDom.createRoot(document.getElementById
    ('root'))

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>)