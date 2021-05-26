import React from 'react';
import { CSSTransition } from 'react-transition-group';

const styles = {
	container: {
		minHeight: 'calc(100vh - 50px)',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontWeight: 500,
		fontSize: 48,
		textAlign: 'center',
	},
};

const HomePage = () => (
	<CSSTransition
		in={true}
		appear={true}
		timeout={500}
		classNames="Title-SlideIn"
		unmountOnExit
	>
		<div style={styles.container}>
			<h1 style={styles.title}>
				Wellcome to your Phonebook{' '}
				<span role="img" aria-label="Иконка приветствия">
					💁‍♀️
      </span>
			</h1>
		</div>
	</CSSTransition>
);

export default HomePage;
