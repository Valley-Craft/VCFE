import "./style.css";

import discord from './../../img/icons/discord.svg';

const Footer = () => {
    return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a href="https://discord.com/invite/KzuBT5vN4B">
								<img src={discord} alt="Link" className="discord" />
							</a>
						</li>
					</ul>
					<div className="copyright">
						<p>© 2023 valleycraft.fun</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;