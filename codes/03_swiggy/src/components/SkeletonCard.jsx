import React from 'react';

const SkeletonCard = () => {
	return (
		<div className='skeleton-card'>
			<div className='skeleton-logo'></div>
			<div className='skeleton-text skeleton-text-large'></div>
			<div className='skeleton-text skeleton-text-medium'></div>
			<div className='skeleton-text skeleton-text-small'></div>
			<div className='skeleton-text skeleton-text-small'></div>
			<div className='skeleton-text skeleton-text-small'></div>
		</div>
	);
};

export default SkeletonCard;
