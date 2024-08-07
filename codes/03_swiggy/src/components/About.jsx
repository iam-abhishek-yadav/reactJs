import React from 'react';
import User from './User';
import { Component } from 'react';

class About extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}
	render() {
		return (
			<div>
				<h1>About Us</h1>
				<User
					name='Abhishek'
					location='India'
					contact='123456789'
				/>
			</div>
		);
	}
}

export default About;
