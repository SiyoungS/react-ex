import react from "react";
import { useState } from "react";

import style from "../Nav/Nav.module.scss"
import {  BrowserRouter as Router } from "react-router-dom";
import NavItem from "./navItem";

function Nav():JSX.Element {
  //console.log(param.items) test 넘어옴
  // const menuName = param.items;
  //const menuRocation = param.menuRocation;
  const [menuToggle, setMenuToggle] = useState<Boolean>(false);
  const menu = [
    { name: "Main", address: "/"}, 
    { name: "Home", address: "/Home"},
    
  ]
  return(
          <div className="menu__list">
            {menu.map((data) => (
              <NavItem
                data={data}
                key={data.address}
                offNav={() => setMenuToggle(false)}
                />
            ))}
          </div>
        )
}

export default Nav;