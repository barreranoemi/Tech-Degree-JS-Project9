import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => (
	<nav className="main-nav"> 
		<ul>
			<li><NavLink to='/coffee'>Coffee</NavLink></li>
			<li><NavLink to='/fruit'>Fruit</NavLink></li>
			<li><NavLink to='/bread'>Bread</NavLink></li>
			<li><NavLink to='/search'>Search</NavLink></li>
		</ul>
	</nav>
)

export default Header; 