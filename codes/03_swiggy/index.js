import React from 'react';
import ReactDOM from 'react-dom/client';
import { restaurants } from './data';

const Header = () => {
	return (
		<div className='header'>
			<div className='logo-container'>
				<img
					className='logo'
					src='https://images.pexels.com/photos/7399830/pexels-photo-7399830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					alt='logo'
				/>
			</div>
			<div className='navItems'>
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};

const RestaurantCard = ({
	restaurantInfo: {
		cloudinaryImageId,
		name,
		cuisines,
		costForTwo,
		avgRatingString,
		sla: { deliveryTime },
	},
}) => {
	return (
		<div className='res-card'>
			<img
				className='res-logo'
				alt='res-logo'
				src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${cloudinaryImageId}`}
				onError={(e) => {
					e.target.onerror = null;
					e.target.src = 'https://via.placeholder.com/264x288';
				}}
			/>
			<h3 className='res-text'>{name}</h3>
			<h4 className='res-text cuisines'>{cuisines.join(', ')}</h4>
			<h4 className='res-text'>{costForTwo}</h4>
			<h4 className='res-text'>{avgRatingString} stars</h4>
			<h4 className='res-text'>{deliveryTime} mins</h4>
		</div>
	);
};

const Body = () => {
	return (
		<div className='body'>
			<div className='search'> Search </div>
			<div className='res-container'>
				{restaurants.map((restaurant) => (
					<RestaurantCard
						key={restaurant.info.id}
						restaurantInfo={restaurant.info}
					/>
				))}
			</div>
		</div>
	);
};

const AppLayout = () => {
	return (
		<div className='app'>
			<Header />
			<Body />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
