import Header from './../components/header/Header'
import img1 from "../img/screens/img1.png";
import img2 from "../img/screens/img2.png";
import img3 from "../img/screens/img3.png";
import Players from "../components/players/Players";

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<Players/>
						<li className="content-list__item">
							<h2 className="title-2">Про сервер</h2>
							<p>
								Без донату.<br/>
								Без приватів.<br/>
								З гарним настроєм.
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Трішки скріншотів</h2>
							<img src={img1} alt="screenshot" className="screenshot" />
							<img src={img2} alt="screenshot" className="screenshot" />
							<img src={img3} alt="screenshot" className="screenshot" />
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;