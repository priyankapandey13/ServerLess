import { useEffect, useState } from "react";

const productsData = [
  {
    id: 1,
    name: "Fruits",
    imageURL:
      "https://www.kirbysproduce.com/wp-content/uploads/2020/04/produce-box.jpg",
    description: "Wonderful fruits from all over the world",
    price: "60",
    currency: "DKK",
  },
  {
    id: 2,
    name: "Vegetables",
    imageURL:
      "https://www.kirbysproduce.com/wp-content/uploads/2020/04/produce-box.jpg",
    description: "Wonderful vegetables from all over the world",
    price: "50",
    currency: "DKK",
  },
  {
    id: 3,
    name: "Juice Box",
    imageURL:
      "https://www.kirbysproduce.com/wp-content/uploads/2020/04/produce-box.jpg",
    description: "Great box for your juicer",
    price: "80",
    currency: "DKK",
  },
];

let initialProducts = productsData.map((item) => {
  return { ...item, selected: false };
});

function useProducts() {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [totalprice, setTotalprice] = useState([]);

  const addProduct = (product) => {
    let newCart = cart.concat(product);
    setCart(newCart);
  };

  const calculateSum = (product) => {
    let newtotal = cart.reduce((total, next) => {
      return total + parseInt(next.price);
    }, 0);
    setTotalprice(newtotal);
  };

  const removeProduct = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  useEffect(() => {
    calculateSum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return { products, cart, addProduct, removeProduct, totalprice };
}

export default useProducts;
