import { useState } from "react";

import { ReactComponent as CloseMenu } from "../assets/close.svg";
import { ReactComponent as SnackBar } from "../assets/snackbar.svg";
import { ReactComponent as MevoLogo } from  "../assets/mevologo-dark.svg";

const Nav = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="header">

      <div className="logo-nav" data-testid="mevo-logo">
        <div className="logo-container">
          <a href="https://mevo.co.nz/" target="_blank" rel="noreferrer">
            <MevoLogo className="logo" />
          </a>
        </div>        
      </div>
      
      <ul className={click ? "nav-options active" : "nav-options"} data-testid="nav-items">
        <li className="option" onClick={closeMobileMenu}>
          <a href="https://mevo.co.nz/wellington/free-floating" target="_blank" rel="noreferrer">About Mevo</a> 
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <a href="https://mevo.co.nz/wellington/home-zone" target="_blank" rel="noreferrer">Home Zones</a> 
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <a href="https://www.notion.so/Mevo-Front-End-Engineer-Exercise-Part-2-Working-as-a-Software-Engineer-e58a2816f877488cace482b8c28d4052" target="_blank" rel="noreferrer">Questions</a> 
        </li>
      </ul>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <SnackBar className="menu-icon" />
        )}
      </div>
    </nav>
  );
};

export default Nav;