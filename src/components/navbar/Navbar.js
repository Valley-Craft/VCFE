import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import './style.css';

const Navbar = () => {
	const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';

	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<NavLink to="/" className="logo">
						<strong>Valley Craft</strong>
					</NavLink>

					<BtnDarkMode />

					<ul className="nav-list">
						<li className="nav-list__item">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Головна
							</NavLink>
						</li>

						<li className="nav-list__item">
							<NavLink
								to="/form"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Анкета
							</NavLink>
						</li>

						<li className="nav-list__item">
							<NavLink
								to="/map"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Мапа
							</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink
								to="/contacts"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Контакти
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
