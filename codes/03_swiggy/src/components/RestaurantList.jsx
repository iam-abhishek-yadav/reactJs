import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantList = ({
	restaurants,
	loading,
	SkeletonCard,
	RestaurantCard,
}) => {
	return (
		<div className='res-container'>
			{loading
				? Array.from({ length: 8 }).map((_, index) => (
						<SkeletonCard key={index} />
				  ))
				: restaurants.map((restaurant) => (
						<Link
							to={`/restaurant/${restaurant.info.id}`}
							key={restaurant.info.id}>
							<RestaurantCard restaurantInfo={restaurant.info} />
						</Link>
				  ))}
		</div>
	);
};

export default RestaurantList;
