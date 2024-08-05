import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const user = localStorage.getItem('user');
		setIsLoggedIn(!!user);
	}, []);

	const handleAuthClick = () => {
		if (isLoggedIn) {
			localStorage.removeItem('user');
			setIsLoggedIn(false);
		} else {
			localStorage.setItem('user', 'loggedIn');
			setIsLoggedIn(true);
		}
	};

	return (
		<div className='header'>
			<div className='logo-container'>
				<img
					className='logo'
					src={LOGO_URL}
					alt='logo'
				/>
			</div>
			<div className='navItems'>
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Cart</li>
					<li>
						<button
							className='auth-btn'
							onClick={handleAuthClick}>
							{isLoggedIn ? 'Logout' : 'Login'}
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
