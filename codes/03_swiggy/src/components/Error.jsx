import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
	const error = useRouteError();

	return (
		<div className='error-container'>
			<h1>Something Went Wrong</h1>
			<p>We're sorry, but there was an error processing your request.</p>
			{error && (
				<div className='error-details'>
					<h2>Error Details:</h2>
					<p>
						<strong>Message:</strong> {error.error.message}
					</p>
					<p>
						<strong>Status:</strong> {error.status} {error.statusText}
					</p>
					{error.stack && (
						<details>
							<summary>Stack Trace</summary>
							<pre>{error.stack}</pre>
						</details>
					)}
				</div>
			)}

			<Link to='/'>Go Back Home</Link>
		</div>
	);
};

export default Error;
