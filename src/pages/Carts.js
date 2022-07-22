import React from "react";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import CartItem from "../components/CartItem";

const dummyProducts = [
  {
    id: 0,
    title: "Produk A",
    price: 20000,
    description: "Lorem ipsum",
    image: "https://cdn-icons-png.flaticon.com/512/4522/4522553.png",
    quantity: 10,
  },

  {
    id: 1,
    title: "Produk B",
    price: 20000,
    description: "Lorem ipsum",
    image: "https://cdn-icons-png.flaticon.com/512/4522/4522553.png",
    quantity: 9,
  },

  {
    id: 2,
    title: "Produk C",
    price: 20000,
    description: "Lorem ipsum",
    image: "https://cdn-icons-png.flaticon.com/512/4522/4522553.png",
    quantity: 8,
  },
  {
    id: 3,
    title: "Produk D",
    price: 20000,
    description: "Lorem ipsum",
    image: "https://cdn-icons-png.flaticon.com/512/4522/4522553.png",
    quantity: 7,
  },

  {
    id: 4,
    title: "Produk E",
    price: 20000,
    description: "Lorem ipsum",
    image: "https://cdn-icons-png.flaticon.com/512/4522/4522553.png",
    quantity: 10,
  },

  {
    id: 5,
    title: "Produk F",
    price: 20000,
    description: "Lorem ipsum",
    image: "https://cdn-icons-png.flaticon.com/512/4522/4522553.png",
    quantity: 10,
  },

  {
    id: 6,
    title: "Produk G",
    price: 20000,
    description: "Lorem ipsum",
    image: "https://cdn-icons-png.flaticon.com/512/4522/4522553.png",
    quantity: 10,
  },

  {
    id: 7,
    title: "Produk H",
    price: 20000,
    description: "Lorem ipsum",
    image: "https://cdn-icons-png.flaticon.com/512/4522/4522553.png",
    quantity: 10,
  },
];

function Carts({ isLogedIn }) {
    
    if (!isLogedIn) {
        return (
            <Navigate to='/auth/login' replace/>
        );
    }

    return (
    <Container>
      {dummyProducts.map((product) => (
        <CartItem key={product.id} item={product} />
      ))}
    </Container>
  );
}

export default Carts;
