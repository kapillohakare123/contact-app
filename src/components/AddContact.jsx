import React from 'react';
import {Box} from 'rebass';
import Wrapper from './Wrapper';

class AddContact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			address: '',
			phone: '',
			email: '',
			notes: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}

	handleSubmit(event) {
		console.dir(this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<>
				<Box width={1 / 2}>
					<form onSubmit={this.handleSubmit}>
						<Wrapper label='Enter your name'>
							<input type="text" name="name" value={this.state.value.name} onChange={this.handleChange}/>
						</Wrapper>
						<Wrapper label='Enter your address'>
							<textarea name="address" value={this.state.value.address} onChange={this.handleChange}/>
						</Wrapper>
						<Wrapper label='Enter your phone'>
							<input type='phone' name="phone" value={this.state.value.phone}
								   onChange={this.handleChange}/>
						</Wrapper>
						<Wrapper label='Enter your email'>
							<input type='email' name="email" value={this.state.value.email}
								   onChange={this.handleChange}/>
						</Wrapper>
						<Wrapper label='Enter your notes'>
							<textarea name="notes" value={this.state.value.notes} onChange={this.handleChange}/>
						</Wrapper>
						<input type="reset" value="Reset"/>
						<input type="submit" value="Add Contact"/>
					</form>
				</Box>
			</>
		);
	}
}

export default AddContact;