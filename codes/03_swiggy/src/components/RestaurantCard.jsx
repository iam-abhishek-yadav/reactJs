import { CDN_URL } from '../utils/constants';

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
				src={CDN_URL + cloudinaryImageId}
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
export default RestaurantCard;
