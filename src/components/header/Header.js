import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						<em>Valley Craft</em>
					</strong>
					<br />Ванильный сервер Minecraft
				</h1>
				<div className="header__text">
					<p>Без приватов. Без грифов. Без доната</p>
				</div>
				<a href="https://discord.gg/KzuBT5vN4B" className="btn">
					Играть
				</a>
			</div>
		</header>
	);
}

export default Header;