import React from 'react';
import Logo from '../assets/logo.png'
import { faFacebook, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { RiInstagramFill } from "react-icons/ri";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OutreachNav = () => {
	return (
		<nav>
			<div className="nav__container">

				<div className="nav-left">
					<div className="nav__logo__img-wrapper">
						<img src={Logo} alt="Outreach Logo" className="nav__logo__img" />
					</div>
					<div className="nav__page__links">
						<a href="" className="nav__page__link" >
							Events
						</a>
						<a href="" className="nav__page__link">
							Executives
						</a>
						<a href="" className="nav__page__link">
							Newsletter
						</a>
						<a href="" className="nav__page__link">
							Gallery
						</a>
						<a href="" className="nav__page__link">
							FAQ
						</a>
					</div>
				</div>

				<div className="nav-right">
					<div className="nav__social__links">
						<a href="https://www.instagram.com/bthsoutreach" className="nav__social__link" target="_blank">
							<RiInstagramFill className="nav__social__link-icon" />
						</a>
						<a href="https://www.facebook.com/groups/1731244133793834" className="nav__social__link-small" target="_blank">
							<FontAwesomeIcon icon={faFacebook} className="nav__social__link-icon" />
						</a>
						<a href="https://discord.com/invite/dSy9SBDxWc" className="nav__social__link-small" target="_blank">
							<FontAwesomeIcon icon={faDiscord} className="nav__social__link-icon" />
						</a>
						{/* <button className="login" >
							Login
						</button> */}
					</div>
				</div>
			</div>
		</nav>
	);
}

export default OutreachNav;
