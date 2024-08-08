import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchMenu from '../utils/useFetchMenu';

const RestaurantMenu = () => {
	const { id } = useParams();
	const { resInfo, menu, loading, error } = useFetchMenu(id);

	if (loading) {
		return (
			<div className='shimmer-wrapper'>
				<div className='shimmer'>
					<div className='shimmer-item large'></div>
					<div className='shimmer-item medium'></div>
					<div className='shimmer-item small'></div>
					<div className='shimmer-item small'></div>
				</div>
			</div>
		);
	}

	if (error) {
		return <div>Error fetching menu.</div>;
	}

	const { name, cuisines, costForTwoMessage, avgRating } = resInfo;

	return (
		<div className='restaurant-menu-container'>
			<h1>{name}</h1>
			<p>Cuisines: {cuisines?.join(', ')}</p>
			<p>{costForTwoMessage}</p>
			<p>Rating: {avgRating}</p>
			<h2>Menu</h2>
			{menu.length > 0 ? (
				menu.map((item) => (
					<div
						className='menu-item'
						key={item?.card?.info?.id}>
						<h3>{item?.card?.info?.name}</h3>
						<p>{item?.card?.info?.description}</p>
						<p className='price'>Rs. {item?.card?.info?.finalPrice / 100}</p>
					</div>
				))
			) : (
				<p>No menu items available.</p>
			)}
		</div>
	);
};

export default RestaurantMenu;
