import React, { useState, Suspense } from "react";
import useProducts from "../hooks/useProducts";
import useNotification from "../hooks/useNotification";
import "../App.css";
const Modalbox = React.lazy(() => import("./Modalbox"));

function Products() {
  const { products, cart, addProduct, removeProduct, totalprice } =
    useProducts();
  const { notifications, createNotification } = useNotification();
  const [Emailaddress, SetEmailaddress] = useState(" Hello ");

  const animateButton = function (e) {
    // eslint-disable-next-line no-unused-expressions
    e.preventDefault;
    //reset animation
    e.target.classList.remove("animate");

    e.target.classList.add("animate");

    setTimeout(function () {
      e.target.classList.remove("animate");
      // modal-backdrop fade show
      const modalcontainer = document.getElementById("exampleModal");
      modalcontainer.style.display = "none";
      modalcontainer.classList.remove("show");
      document.querySelector(
        ".modal-backdrop"
      ).innerHTML = `<div class="danceanimation"><img src="https://i.pinimg.com/originals/57/e2/09/57e209296e586933febadf06e271a3d3.gif" alt="dancer" /></div>`;
    }, 300);
    setTimeout(function (e) {
      window.location.href = "/";
    }, 4000);
  };

  var classname = document.getElementsByClassName("confetti-button");
  for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener("click", animateButton, false);
  }
  console.log(cart);

  const isInCart = (product) => {
    return !cart.find((item) => item.id === product.id);
  };

  return (
    <div>
      <div className="row">
        {products.map((product) => {
          return (
            <div className="card col-md-4" key={product.id}>
              <div className="text-center">
                <img
                  style={{ width: "400px" }}
                  src={product.imageURL}
                  alt={product.name}
                />
              </div>
              <div className="card-body">
                <h2>{product.name}</h2>

                <p className="card-text">{product.description}</p>
                <p>
                  <strong>
                    price: {product.price} {product.currency}
                  </strong>
                </p>
                {isInCart(product) && (
                  <button
                    onClick={() => addProduct(product)}
                    className="btn btn-primary"
                  >
                    Select
                  </button>
                )}
                {!isInCart(product) && (
                  <button
                    onClick={() => removeProduct(product)}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <form>
        <div className="form-group mt-4 col-md-4">
          <p className="mt-4">You will be charged: ? {totalprice}</p>

          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => SetEmailaddress(e.target.value)}
          />

          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <button
          type="button"
          className="btn btn-primary mt-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => createNotification(totalprice)}
        >
          Buy now
        </button>
        <Suspense fallback={<div>Loading...</div>}>
          <Modalbox
            Emailaddress={Emailaddress}
            notifications={notifications}
            cart={cart}
            totalprice={totalprice}
          />
        </Suspense>
      </form>
    </div>
  );
}

export default Products;
