import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loader = () => {
	return (
		<div className="loadingIcon">
			<FontAwesomeIcon icon={faSpinner} pulse size="2x" />
		</div>
	);
};

export default Loader;
