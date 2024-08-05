import React, { useEffect, useState } from 'react';
import { RestaurantCard, SkeletonCard } from './index';
import { API_URL } from '../utils/constants';
import SearchBar from './SearchBar';
import Filters from './Filters';
import RestaurantList from './RestaurantList';

const Body = () => {
	const [restaurants, setRestaurants] = useState([]);
	const [allRestaurants, setAllRestaurants] = useState([]);
	const [isTopRated, setIsTopRated] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedCost, setSelectedCost] = useState('');
	const [selectedDeliveryTime, setSelectedDeliveryTime] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch(API_URL);
			const data = await response.json();
			const fetchedRestaurants =
				data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants || [];
			setRestaurants(fetchedRestaurants);
			setAllRestaurants(fetchedRestaurants);
		} catch (error) {
			console.error('Error fetching data:', error);
		} finally {
			setLoading(false);
		}
	};

	const handleClick = () => {
		if (isTopRated) {
			setRestaurants(allRestaurants);
			setIsTopRated(false);
			setSearchQuery('');
			setSelectedCost('');
			setSelectedDeliveryTime('');
		} else {
			const topRated = restaurants.filter(
				(restaurant) => restaurant?.info?.avgRating >= 4.5
			);
			setRestaurants(topRated);
			setIsTopRated(true);
		}
	};

	const handleSearch = () => {
		let filtered = allRestaurants.filter((restaurant) =>
			restaurant.info.name.toLowerCase().includes(searchQuery.toLowerCase())
		);

		if (selectedCost) {
			const costLimit = parseInt(selectedCost, 10);
			filtered = filtered.filter((restaurant) => {
				const costStr = restaurant.info.costForTwo;
				const costNum = parseInt(costStr.replace(/[^\d]/g, ''), 10);
				return costNum <= costLimit;
			});
		}

		if (selectedDeliveryTime) {
			filtered = filtered.filter(
				(restaurant) => restaurant.info.sla.deliveryTime <= selectedDeliveryTime
			);
		}

		setRestaurants(filtered);
	};

	return (
		<div className='body'>
			<div className='top-bar'>
				<SearchBar
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
					onSearch={handleSearch}
				/>
				<Filters
					isTopRated={isTopRated}
					handleClick={handleClick}
					setSelectedCost={setSelectedCost}
					setSelectedDeliveryTime={setSelectedDeliveryTime}
					selectedCost={selectedCost}
					selectedDeliveryTime={selectedDeliveryTime}
				/>
			</div>
			<RestaurantList
				restaurants={restaurants}
				loading={loading}
				SkeletonCard={SkeletonCard}
				RestaurantCard={RestaurantCard}
			/>
		</div>
	);
};

export default Body;
