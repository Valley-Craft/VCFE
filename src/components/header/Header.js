import "./style.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						<em>Valley Craft</em>
					</strong>
					<br />Ванільний сервер Minecraft 1.20.1
				</h1>
				<div className="header__text">
					<p>mc.valleycraft.fun</p>
				</div>
				<NavLink to="/form" className="btn">
					Грати
				</NavLink>
			</div>
		</header>
	);
}

export default Header;
