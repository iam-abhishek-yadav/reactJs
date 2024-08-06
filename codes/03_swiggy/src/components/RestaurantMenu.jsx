import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RESTAURANT_URL } from '../utils/constants';

const RestaurantMenu = () => {
	const [resInfo, setResInfo] = useState({});
	const [menu, setMenu] = useState([]);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		try {
			const response = await fetch(`${RESTAURANT_URL + id}`);
			const data = await response.json();
			const info = data?.data.cards[2].card.card.info;
			const menu =
				data?.data.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
					?.card?.itemCards;

			setResInfo(info);
			setMenu(menu);
		} catch (error) {
			console.error('Error fetching menu:', error);
		} finally {
			setLoading(false);
		}
	};

	const { name, cuisines, costForTwoMessage, avgRating } = resInfo;

	return (
		<div className='restaurant-menu-container'>
			{loading ? (
				<div className='shimmer-wrapper'>
					<div className='shimmer'>
						<div className='shimmer-item large'></div>
						<div className='shimmer-item medium'></div>
						<div className='shimmer-item small'></div>
						<div className='shimmer-item small'></div>
					</div>
				</div>
			) : (
				<>
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
								<p className='price'>
									Rs. {item?.card?.info?.finalPrice / 100}
								</p>
							</div>
						))
					) : (
						<p>No menu items available.</p>
					)}
				</>
			)}
		</div>
	);
};

export default RestaurantMenu;
