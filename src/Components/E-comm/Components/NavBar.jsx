import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../Components/NavBar.css";
import logo from "../Assets/logo2_1.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AuthContext } from "../Context/Context";
import { useContext } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const NavBar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  const { setIsloggedIn } = useContext(AuthContext);
  //const navigate = useNavigate();

  const items = useSelector((state) => state.cart);
  return (
    <nav className="flexCenter paddings nav">
      <Link to="/home">
        <img src={logo} alt="" className="logo" />
      </Link>

      <OutsideClickHandler
        onOutsideClick={() => {
          setMenuOpened(false);
        }}
      >
        <div className="flexCenter links" style={getMenuStyles(menuOpened)}>
          <Link className="navLink" to="/home">
            Home
          </Link>
          <Link className="navLink" to="/cart">
            Cart
          </Link>
          <span className="cartCount">Cart items: {items.length}</span>
          <button
            onClick={() => {
              setIsloggedIn(false);
              //navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      </OutsideClickHandler>
      <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
        <BiMenuAltRight size={30} />
      </div>
    </nav>
  );
};

export default NavBar;
