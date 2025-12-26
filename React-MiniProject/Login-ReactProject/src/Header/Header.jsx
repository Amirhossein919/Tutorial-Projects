import { GiHamburgerMenu } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import './Header.css'

function Header({ setShowNav }) {
  const navigate = useNavigate();

  return (
    <header>
      <GiHamburgerMenu
        className="hamburger"
        onClick={() => setShowNav((prev) => !prev)}
      />
      <input className="SearchBar" type="search" placeholder="Search"/>
      <MdAccountCircle
        className="profile"
        onClick={() => navigate("/login")}
      />
    </header>
  );
}

export default Header;