import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiMiniBars3CenterLeft,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import avatarImg from "../assets/assets/avatar.png";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { AppContext } from "../context/AuthContext";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { logOut, currentUser } = useContext(AppContext);
  const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: `/orders/${currentUser?.email}` },
    { name: "Cart Page", href: "/cart" },
    { name: "Check Out", href: "/checkout" },
  ];

  const token = false;

  const handleLogOut = () => {
    logOut();
    console.log("LogOut Success");
  };
  return (
    <div>
      <header className="max-w-screen-2xl mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          {/* left side */}
          <div className="flex items-center md:gap-16 gap-4">
            <Link to="/">
              <HiMiniBars3CenterLeft className="size-6" />
            </Link>

            {/* search input */}
            <div className="relative sm:w-72 w-40 space-x-2">
              <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />

              <input
                type="text"
                placeholder="Search here"
                className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
              />
            </div>
          </div>

          {/* rigth side */}
          <div className="relative flex items-center md:space-x-3 space-x-2">
            <div>
              {currentUser ? (
                <>
                  <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <img
                      src={avatarImg}
                      alt=""
                      className={`size-7 rounded-full ${
                        currentUser ? "ring-2 ring-blue-500" : ""
                      }`}
                    />
                  </button>
                  {/* show dropdowns */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                      <ul className="py-2">
                        {navigation.map((item) => (
                          <li
                            key={item.name}
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <Link
                              to={item.href}
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <button
                            onClick={handleLogOut}
                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              ) : token ? (
                <Link to="/dashboard" className="border-b-2 border-primary">
                  Dashboard
                </Link>
              ) : (
                <Link to="/login">
                  {" "}
                  <HiOutlineUser className="size-6" />
                </Link>
              )}
            </div>

            <Link to={`/orders/${currentUser?.email}`}>
              <button className="hidden sm:block">
                <HiOutlineHeart className="size-6" />
              </button>
            </Link>

            <Link
              to="/cart"
              className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
            >
              <HiOutlineShoppingCart className="" />

              {cartItems.length > 0 ? (
                <span className="text-sm font-semibold sm:ml-1">
                  {cartItems.length}
                </span>
              ) : (
                <span className="text-sm font-semibold sm:ml-1">0</span>
              )}
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

// import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import {
//   HiMiniBars3CenterLeft,
//   HiOutlineHeart,
//   HiOutlineShoppingCart,
// } from "react-icons/hi2";
// import { IoSearchOutline } from "react-icons/io5";
// import { HiOutlineUser } from "react-icons/hi";
// import avatarImg from "../assets/assets/avatar.png";
// import { useSelector } from "react-redux";
// import { AppContext } from "../context/AuthContext";

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const { logOut, currentUser } = useContext(AppContext);

//   const navigation = [
//     { name: "Dashboard", href: "/dashboard" },
//     { name: "Orders", href: `/orders/${currentUser?.email}` },
//     { name: "Cart Page", href: "/cart" },
//     { name: "Check Out", href: "/checkout" },
//   ];

//   // Simulate token presence if needed; here false means logged out by default
//   const token = false;

//   const handleLogOut = () => {
//     logOut();
//     console.log("LogOut Success");
//     setIsDropdownOpen(false);
//   };

//   return (
//     <header className="max-w-screen-2xl mx-auto px-4 py-6">
//       <nav className="flex justify-between items-center">
//         {/* Left side */}
//         <div className="flex items-center md:gap-16 gap-4">
//           <Link to="/">
//             {/* <HiMiniBars3CenterLeft className="w-6 h-6" /> */}
//             <img src="/booklogo.jpeg" alt="" />
//           </Link>

//           {/* Search input */}
//           <div className="relative sm:w-72 w-40">
//             <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
//             <input
//               type="text"
//               placeholder="Search here"
//               className="bg-[#EAEAEA] w-full py-1 md:pl-10 pl-9 rounded-md focus:outline-none"
//             />
//           </div>
//         </div>

//         {/* Right side */}
//         <div className="relative flex items-center md:space-x-4 space-x-2">
//           {/* User avatar or login */}
//           <div>
//             {currentUser ? (
//               <>
//                 <button
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                   aria-label="User menu"
//                 >
//                   <img
//                     src={avatarImg}
//                     alt="User Avatar"
//                     className={`w-8 h-8 rounded-full ring-2 ring-blue-500`}
//                   />
//                 </button>

//                 {/* Dropdown */}
//                 {isDropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
//                     <ul className="py-2">
//                       {navigation.map((item) => (
//                         <li
//                           key={item.name}
//                           onClick={() => setIsDropdownOpen(false)}
//                         >
//                           <Link
//                             to={item.href}
//                             className="block px-4 py-2 text-sm hover:bg-gray-100"
//                           >
//                             {item.name}
//                           </Link>
//                         </li>
//                       ))}
//                       <li>
//                         <button
//                           onClick={handleLogOut}
//                           className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
//                         >
//                           Logout
//                         </button>
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </>
//             ) : token ? (
//               <Link to="/dashboard" className="border-b-2 border-primary">
//                 Dashboard
//               </Link>
//             ) : (
//               <Link to="/login" aria-label="Login">
//                 <HiOutlineUser className="w-6 h-6" />
//               </Link>
//             )}
//           </div>

//           {/* Wishlist / Heart */}
//           <Link to={`/orders/${currentUser?.email}`}>
//             <button className="hidden sm:block" aria-label="Orders">
//               <HiOutlineHeart className="w-6 h-6" />
//             </button>
//           </Link>

//           {/* Cart */}
//           <Link
//             to="/cart"
//             className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm relative"
//             aria-label="Cart"
//           >
//             <HiOutlineShoppingCart className="w-6 h-6" />
//             <span className="text-sm font-semibold sm:ml-1 ml-0">
//               {cartItems.length > 0 ? cartItems.length : 0}
//             </span>
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;




// import { Link } from "react-router-dom";
// import {
//   HiOutlineHeart,
//   HiOutlineShoppingCart,
//   HiOutlineUser,
// } from "react-icons/hi2";
// import { IoSearchOutline } from "react-icons/io5";
// import avatarImg from "../assets/assets/avatar.png";
// import { useSelector } from "react-redux";
// import { AppContext } from "../context/AuthContext";







