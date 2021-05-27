import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import Logo from '../components/Logo';
import Spinner from '../components/Spinner';
import Notification from '../components/Notification';
import authSelectors from '../redux/auth/auth-selectors';


export default function LoginPage() {
	const dispatch = useDispatch();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const error = useSelector(authSelectors.getError);
	const isLoadingAuth = useSelector(authSelectors.getLoading);

	const handleChange = evt => {
		const { name, value } = evt.target;

		switch (name) {
			case 'name':
				setName(value);
				break;

			case 'email':
				setEmail(value);
				break;

			case 'password':
				setPassword(value);
				break;

			default:
				console.warn(`Тип поля ${name} не обрабатывается!`);
		}
	}

	const handleSubmit = evt => {
		evt.preventDefault();
		// alert(`${name}, ${email}, ${password}`);
		dispatch(authOperations.register({ name, email, password }));
		setName('');
		setEmail('');
		setPassword('');
	}

	return (
		<div>
			<Logo title="Enter your data" />

			<Notification
				message={error}
			/>

			{isLoadingAuth && <Spinner />}

			<form onSubmit={handleSubmit} className="Form" autoComplete="off">
				<label className="Label" htmlFor="name">
					Name
			  </label>
				<input
					type="text"
					name="name"
					className="Form__input"
					value={name}
					onChange={handleChange}
				/>

				<label className="Label" htmlFor="email">
					Email
			</label>
				<input
					type="email"
					name="email"
					className="Form__input"
					value={email}
					onChange={handleChange}
				/>

				<label className="Label" htmlFor="password">
					Password
			</label>
				<input
					type="password"
					name="password"
					className="Form__input"
					value={password}
					onChange={handleChange}
				/>

				<button type="submit" className="Form__button">
					Log in
			</button>
			</form>
		</div>)
}
// class RegisterPage extends Component {
// 	state = {
// 		name: '',
// 		email: '',
// 		password: '',
// 	};

// 	handleChange = ({ target: { name, value } }) => {
// 		this.setState({ [name]: value });
// 	};

// 	handleSubmit = e => {
// 		e.preventDefault();

// 		this.props.onRegister(this.state);

// 		this.setState({ name: '', email: '', password: '' });
// 	};

// 	render() {
// 		const { name, email, password } = this.state;

// 		return (
// 			<div>
// 				<Logo title="Enter your data" />

// 				<form onSubmit={this.handleSubmit} className="Form" autoComplete="off">
// 					<label className="Label" htmlFor="name">
// 						Name
//           </label>
// 					<input
// 						type="text"
// 						name="name"
// 						className="Form__input"
// 						value={name}
// 						onChange={this.handleChange}
// 					/>
// 					<label className="Label" htmlFor="email">
// 						Mail
//           </label>
// 					<input
// 						type="email"
// 						name="email"
// 						className="Form__input"
// 						value={email}
// 						onChange={this.handleChange}
// 					/>
// 					<label className="Label" htmlFor="password">
// 						Password
//           </label>{' '}
// 					<input
// 						type="password"
// 						name="password"
// 						className="Form__input"
// 						value={password}
// 						onChange={this.handleChange}
// 					/>
// 					<button type="submit" className="Form__button">
// 						Registration
//           </button>
// 				</form>
// 			</div>
// 		);
// 	}
// }

// const mapDispatchToProps = {
// 	onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterPage);
