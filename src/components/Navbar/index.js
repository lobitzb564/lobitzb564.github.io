import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/About'>
                        About
                    </NavLink>
                    <NavLink to='/projects'>
                        Projects
                    </NavLink>
                    <NavLink to='/resume'>
                        Resume
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;