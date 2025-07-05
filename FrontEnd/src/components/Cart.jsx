
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, removeFromCart } from "../redux/feature/cart/cartSlice";
import { getImageURL } from "../utils/getImageURL";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.newPrice, 0)
    .toFixed(2);

  return (
    <>
      <div className="flex mt-12 h-full flex-col overflow-hidden bg-white shadow-xl">
        {cartItems.length > 0 ? (
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="text-lg font-medium text-gray-900">
                Shopping cart
              </div>
              <div className="mt-4 sm:mt-0 ml-0 sm:ml-3 flex h-7 items-center ">
                <button
                  type="button"
                  onClick={handleClearCart}
                  className="relative -m-2 py-1 px-2 bg-red-500 text-white rounded-md hover:bg-secondary transition-all duration-200"
                >
                  <span className="">Clear Cart</span>
                </button>
              </div>
            </div>

            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {/* map on cartItems */}
                  {cartItems.map((item, index) => (
                    <li key={index} className="flex flex-col sm:flex-row py-6">
                      <div className="h-24 w-full sm:w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          alt=""
                          src={`${getImageURL(item?.coverImage)}`}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex flex-wrap justify-between text-base font-medium text-gray-900">
                            <h3>
                              <Link to="/">{item?.title}</Link>
                            </h3>
                            <p className="sm:ml-4">${item?.newPrice}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 capitalize">
                            <strong>Category:</strong> {item?.category}
                          </p>
                        </div>
                        <div className="flex flex-1 flex-wrap items-end justify-between space-y-2 text-sm">
                          <p className="text-gray-500">
                            <strong>Qty:</strong> 1
                          </p>

                          <div className="flex">
                            <button
                              onClick={() => {
                                handleRemoveCart(item);
                              }}
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <h1 className="text-gray-600 font-semibold text-2xl">
            No Items Available!
          </h1>
        )}

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${totalPrice}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <Link
              to="/checkout"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <Link to="/">
              or
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

