import React from "react";
import { Row, Col } from "react-bootstrap";
import CardItem from "./CardItem";

const dummyProducts = [
  {
    id: 0,
    title: "Produk A",
    price: 20000,
    description: "Lorem ipsum",
    image: "https://cdn-icons-png.flaticon.com/512/4522/4522553.png",
  },

  {
    id: 1,
    title: "Produk B",
    price: 20000,
    description: "Lorem ipsum",
    image: "https://cdn-icons-png.flaticon.com/512/4522/4522553.png",
  },

  {
    id: 2,
    title: "Produk C",
    price: 20000,
    description: "Lorem ipsum",
    image: "https://cdn-icons-png.flaticon.com/512/4522/4522553.png",
  },
  {
    id: 3,
    title: "Produk D",
    price: 20000,
    description: "Lorem ipsum",
    image: "https://cdn-icons-png.flaticon.com/512/4522/4522553.png",
  },

  {
    id: 4,
    title: "Produk E",
    price: 20000,
    description: "Lorem ipsum",
    image: "https://cdn-icons-png.flaticon.com/512/4522/4522553.png",
  },

  {
    id: 5,
    title: "Produk F",
    price: 20000,
    description: "Lorem ipsum",
    image: "https://cdn-icons-png.flaticon.com/512/4522/4522553.png",
  },

  {
    id: 6,
    title: "Produk G",
    price: 20000,
    description: "Lorem ipsum",
    image: "https://cdn-icons-png.flaticon.com/512/4522/4522553.png",
  },

  {
    id: 7,
    title: "Produk H",
    price: 20000,
    description: "Lorem ipsum",
    image: "https://cdn-icons-png.flaticon.com/512/4522/4522553.png",
  },
];

function CardList() {
  return (
    <Row xs={1} xl={4} sm={2} lg={3} md={3}>
      {dummyProducts.map((product) => (
        <Col key={product.id}>
          <CardItem item={product} />
        </Col>
      ))}
    </Row>
  );
}

export default CardList;
