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
        <>
            <header className="header">
                <h1 >React pizza resturant</h1>
            </header>
        </>
    )
}

function Menu() {
    const pizza = pizzaData
    const numPizzas = pizza.length
    return (
        <main className="menu">
            <h2>Our menu</h2>
            {numPizzas > 0 ?
                <>
                    <p>This is a italian resturant who gives a delicious pizzas to their customer</p>

                    <div className="pizzas">
                        {
                            pizza.map(pizza =>
                                <Pizza pizzaObj={pizza} key={pizza.name} />)
                        }

                    </div>
                </>
                : <h1 style={{ color: "#edc84b" }}>sorry there is not any pizza to order checkout later</h1>}
        </main>
    )
}

function Pizza({ pizzaObj }) {
    // if (pizzaObj.soldOut) return null
    return (
        <li className={`pizza ${pizzaObj.soldOut ? `sold-out`: ``}`} >
            <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
            <div className="">
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price +"$"}</span>
            </div>
        </li>
    )
}

function Footer() {
    const hour = new Date().getHours()
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour
    return (
        <footer className="footer">
            {isOpen ? (
                <Order isOpen={isOpen} openHour={openHour} closeHour={closeHour} />
            ) : <p>We`re close now come back at {openHour}:00 to {closeHour}:00 :D</p>}
        </footer>
    )
}

function Order({ closeHour }) {
    return (
        <div className="order">
            <p>We`re open until {closeHour}:00. come to visit us or order online !</p>
            <button className="btn">Order</button>
        </div>
    )
}


const root = ReactDom.createRoot(document.getElementById
    ('root'))

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>)