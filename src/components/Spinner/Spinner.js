import React from 'react';
import Loader from 'react-loader-spinner';
import './Spinner.scss';

const Spinner = () => (
	<div className="Loader">
		<Loader
			type="ThreeDots"
			color="#00BFFF"
			height={200}
			width={200}
			timeout={250}
		/>
	</div>
);

export default Spinner;
