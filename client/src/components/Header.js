import React from 'react';
import { Link } from 'react-router-dom';
import GhibliLogo from '../Studio_Ghibli_logo';

const Header = () => {
	return (
		<header>
			<h1>
				<Link to={'/'}>
					<img src={GhibliLogo} alt='Studio Ghibli' />
				</Link>
			</h1>
		</header>
	);
};

export default Header;
