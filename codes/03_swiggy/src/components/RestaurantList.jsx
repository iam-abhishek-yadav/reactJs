import React from 'react';

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
						<RestaurantCard
							key={restaurant.info.id}
							restaurantInfo={restaurant.info}
						/>
				  ))}
		</div>
	);
};

export default RestaurantList;
