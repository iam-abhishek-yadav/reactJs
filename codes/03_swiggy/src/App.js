import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
	Header,
	Body,
	About,
	Contact,
	Error,
	RestaurantMenu,
} from './components';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const Grocery = lazy(() => import('./components/Grocery'));

const AppLayout = () => {
	return (
		<div className='app'>
			<Header />
			<Outlet />
		</div>
	);
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <Body />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/grocery',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Grocery />
					</Suspense>
				),
			},
			{
				path: '/restaurant/:id',
				element: <RestaurantMenu />,
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
