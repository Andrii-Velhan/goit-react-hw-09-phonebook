import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification';
import { phoneBookSelectors, phoneBookOperations } from '../../redux/phoneBook';
import { useSelector, useDispatch } from 'react-redux';
export default function ContactForm() {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	const [message, setMessage] = useState(null);

	const items = useSelector(phoneBookSelectors.getAllItems);
	const onSubmit = (name, number) => dispatch(phoneBookOperations.addContact({ name, number }));

	const saveMessage = (note) => {
		setMessage(note);
		setTimeout(() => {
			setMessage(null);
		}, 2500);
	};

	const handleChange = evt => {
		const { name, value } = evt.target;

		switch (name) {
			case 'name':
				setName(value);
				break;

			case 'number':
				setNumber(value);
				break;

			default:
				console.warn(`Тип поля ${name} не обрабатывается!`);
		}
	}

	const handleSubmit = event => {
		event.preventDefault();

		if (name === '') {
			saveMessage('Enter concact name, please!');
			return;
		}

		if (number === '') {
			saveMessage('Enter concact phone number, please!');
			return;
		}

		if (name === '' && number === '') {
			saveMessage('Enter data to each of inputs: [name & number]!');
		}

		if (
			items.find((item) => item.name.toLowerCase() === name.toLowerCase())) {
			saveMessage(`Contact '${name}' is аlready exists!`);
			return;
		}

		onSubmit(name, number);
		setName('');
		setNumber('');
	};

	return (
		<>
			<Notification message={message} />
			<form
				className="Form"
				onSubmit={handleSubmit}
			// autoComplete="off"
			>
				<label className="Label" htmlFor="name">
					Name
		          </label>
				<input
					type="text"
					value={name}
					id="name"
					className="Form__input"
					name="name"
					onChange={handleChange}
					placeholder="Anton Cherny"
					autoFocus
				/>

				<label className="Label" htmlFor="number">
					Number
		          </label>
				<input
					type="tel"
					value={number}
					id="number"
					className="Form__input"
					name="number"
					// pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
					required
					onChange={handleChange}
					placeholder="+38 (066) 000-00-00"
				/>

				<button type="submit" className="Form__button">
					Add contact
		          </button>
			</form>
		</>
	);

}

ContactForm.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object),
	onSubmit: PropTypes.func,
};

//============ =============

// class ContactForm extends Component {
// 	state = {
// 		name: '',
// 		number: '',
// 		message: null,
// 	};

// 	static propTypes = {
// 		items: PropTypes.arrayOf(PropTypes.object),
// 		onSubmit: PropTypes.func,
// 	};

// 	static defaultProps = {};

// 	setMessage = note => {
// 		this.setState({ message: note });
// 		setTimeout(() => {
// 			this.setState({ message: null });
// 		}, 2500);
// 	};

// 	handleChange = event => {
// 		const { name, value } = event.target;
// 		this.setState({ [name]: value });
// 	};

// 	handleSubmit = event => {
// 		event.preventDefault();
// 		const { name, number } = this.state;

// 		if (name === '') {
// 			this.setMessage('Enter concact name, please!');
// 			return;
// 		}

// 		if (number === '') {
// 			this.setMessage('Enter concact phone number, please!');
// 			return;
// 		}

// 		if (name === '' && number === '') {
// 			this.setMessage('Enter data to each of inputs: [name & number]!');
// 		}

// 		if (
// 			this.props.items.find(
// 				item => item.name.toLowerCase() === name.toLowerCase(),
// 			)
// 		) {
// 			this.setMessage(`Contact '${name}' is аlready exists!`);
// 			return;
// 		}
// 		this.props.onSubmit(name, number);
// 		this.setState({
// 			name: '',
// 			number: '',
// 		});
// 	};

// 	render() {
// 		const { name, number, message } = this.state;
// 		return (
// 			<>
// 				<Notification message={message} />
// 				<form className="Form" onSubmit={this.handleSubmit}>
// 					<label className="Label" htmlFor="name">
// 						Name
//           </label>
// 					<input
// 						type="text"
// 						value={name}
// 						id="name"
// 						className="Form__input"
// 						name="name"
// 						onChange={this.handleChange}
// 						placeholder="Anton Cherny"
// 						autoFocus
// 					/>

// 					<label className="Label" htmlFor="number">
// 						Number
//           </label>
// 					<input
// 						type="tel"
// 						value={number}
// 						id="number"
// 						className="Form__input"
// 						name="number"
// 						// pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
// 						required
// 						onChange={this.handleChange}
// 						placeholder="+38 (066) 000-00-00"
// 					/>

// 					<button type="submit" className="Form__button">
// 						Add contact
//           </button>
// 				</form>
// 			</>
// 		);
// 	}
// }

// const mapStateToProps = state => ({
// 	items: phoneBookSelectors.getAllItems(state),
// });

// const mapDispatchToProps = dispatch => ({
// 	onSubmit: (name, number) =>
// 		dispatch(phoneBookOperations.addContact({ name, number })),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
