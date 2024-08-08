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
				<User />
			</div>
		);
	}
}

export default About;
