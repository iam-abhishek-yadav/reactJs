import React from 'react';

class User extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: {},
		};
	}

	async componentDidMount() {
		console.log(this.state.userInfo);
		const data = await fetch('https://api.github.com/users/iam-abhishek-yadav');
		this.setState({ userInfo: await data.json() });
	}

	componentDidUpdate() {
		console.log(this.state.userInfo);
	}

	componentWillUnmount() {
		console.log(this.state.userInfo);
		console.log('Component will unmount');
	}

	render() {
		const { name, location, avatar_url } = this.state.userInfo;
		return (
			<div className='user-card'>
				<h1>{name}</h1>
				<h3>{location}</h3>
				<img
					src={avatar_url}
					alt='user'
				/>
			</div>
		);
	}
}

export default User;
