import { useContext } from 'react';
import ShoppingBag from '../../assets/ShoppingBag.png'; 
import emptyShoppingTrolley from '../../assets/empty-shopping-trolley.png';
import { SearchContext } from '../../context/SearchContext';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Navbar() {

  const { search, setSearch } = useContext(SearchContext);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  

  return (
    <div className="container mx-auto navbar ">
      {/* Logo */}
      <div className="flex-1 ">
        <a className="normal-case text-xl flex items-center">
          <img src={ShoppingBag} alt="Brand Logo" className="h-8 mr-2" />
          Martify
        </a>
      </div>

      {/* Search Bar */}
      <div className="flex-3 px-4 w-full">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="input input-bordered focus:outline-none w-full "
        />
      </div>

      <div className="flex-none mx-4">
        <ul className="menu menu-horizontal p-0">
          <li tabIndex={0} className="dropdown dropdown-hover">
            <a className="justify-between">
              Electronics
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100 dropdown-content absolute mt-1 shadow rounded-box w-52">
              <li>
                <a>Mobiles</a>
              </li>
              <li>
                <a>Laptops</a>
              </li>
              <li>
                <a>Accessories</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Clothing</a>
          </li>
          <li>
            <a>Home & Kitchen</a>
          </li>
        </ul>
      </div>

      {/* Currency Selector */}
      <div className="dropdown dropdown-end mx-2">
        <button className="btn btn-ghost btn-circle">
          <span className="text-sm">USD</span>
        </button>
        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-24 p-2 shadow">
          <li>
            <a>USD</a>
          </li>
          <li>
            <a>EUR</a>
          </li>
          <li>
            <a>BDT</a>
          </li>
        </ul>
      </div>

      {/* Cart */}
      <div className="dropdown dropdown-end mx-2">
        <div  className="btn btn-ghost btn-circle">
            <Link to="/cart">
          <div className="indicator">
              <img
                src={totalQuantity === 0 ? emptyShoppingTrolley : ShoppingBag}
                alt="Shopping Trolley"
                className="w-8"
              />
            <span className="badge badge-sm indicator-item">{totalQuantity}</span>
          </div>
            </Link>
        </div>
      </div>

      {/* User Account */}
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="User Avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex="-1"
          className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
        >
          <li>
            <a>Profile</a>
          </li>
          <li>
            <a>Orders</a>
          </li>
          <li>
            <a>Wishlist</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
