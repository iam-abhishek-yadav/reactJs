import RestaurantCard from './RestaurantCard';
import { allRestaurants } from '../utils/data';
import { useState } from 'react';

const Body = () => {
	const [restaurants, setRestaurants] = useState(allRestaurants);
	const [isTopRated, setIsTopRated] = useState(false);

	const handleClick = () => {
		if (isTopRated) {
			setRestaurants(allRestaurants);
			setIsTopRated(false);
		} else {
			const topRated = allRestaurants.filter(
				(restaurant) => restaurant.info.avgRating >= 4.5
			);
			setRestaurants(topRated);
			setIsTopRated(true);
		}
	};

	return (
		<div className='body'>
			<div className='top-bar'>
				<div className='search'>
					<input
						type='text'
						placeholder='Search...'
					/>
					<button className='search-btn'>Search</button>
				</div>
				<div className='filter'>
					<button
						className='filter-btn'
						onClick={handleClick}>
						{isTopRated ? 'Show All Restaurants' : 'Top Rated Restaurants'}
					</button>
				</div>
			</div>
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

export default Body;
