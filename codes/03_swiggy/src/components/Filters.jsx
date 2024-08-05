import React from 'react';

const Filters = ({
	isTopRated,
	handleClick,
	setSelectedCost,
	setSelectedDeliveryTime,
	selectedCost,
	selectedDeliveryTime,
}) => {
	return (
		<div className='filter'>
			<button
				className='filter-btn'
				onClick={handleClick}>
				{isTopRated ? 'Show All Restaurants' : 'Top Rated Restaurants'}
			</button>
			<div className='filter-options'>
				<div className='filter-option'>
					<label htmlFor='cost'>Max Cost for Two:</label>
					<select
						id='cost'
						value={selectedCost}
						onChange={(e) => setSelectedCost(e.target.value)}>
						<option value=''>Any</option>
						<option value='200'>Up to ₹200</option>
						<option value='500'>Up to ₹500</option>
						<option value='1000'>Up to ₹1000</option>
					</select>
				</div>
				<div className='filter-option'>
					<label htmlFor='delivery-time'>Max Delivery Time (minutes):</label>
					<select
						id='delivery-time'
						value={selectedDeliveryTime}
						onChange={(e) => setSelectedDeliveryTime(e.target.value)}>
						<option value=''>Any</option>
						<option value='30'>Up to 30 minutes</option>
						<option value='45'>Up to 45 minutes</option>
						<option value='60'>Up to 60 minutes</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default Filters;
