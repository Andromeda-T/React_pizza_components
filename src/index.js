import React from "react";
import ReactDom from "react-dom/client"
import './index.css'

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
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
    return (
        <main className="menu">
            <h2>Our menu</h2>
            <Pizza
                name="Pizza spinaci"
                ingredients="Bread with italian olive oil and rosemary"
                photoName="images/spinaci.jpg"
                price={10} />
            <Pizza
                name="Pizza Funghi"
                ingredients="Bread with italian olive oil and rosemary"
                photoName="images/funghi.jpg"
                price= {12} />
        </main>
    )
}
function Pizza(prop) {
    return (
        <div className="pizza">
            <img src={prop.photoName} alt={prop.name}></img>
            <div className="">
                <h3>{prop.name}</h3>
                <p>{prop.ingredients}</p>
                <span>Pice : {prop.price}$</span>
            </div>
        </div>
    )
}

function Footer() {
    return (
        <footer className="footer">
            {new Date().toLocaleTimeString()} we we`re currently closed
        </footer>
    )
}


const root = ReactDom.createRoot(document.getElementById
    ('root'))

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>)