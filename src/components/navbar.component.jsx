import React from "react";
import { StyledNavbar } from "./styles/navbar.styled";
const Navbar = () => {
	return (
		<StyledNavbar className="nav-container">
			<h1 className="logo">anonyform</h1>
			<p className="text">by Ankit D.</p>
		</StyledNavbar>
	);
};

export default Navbar;
