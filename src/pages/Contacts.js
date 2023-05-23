import body from '../img/body.png'

const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Контакти</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">dinozzzzzawrikXD</h2>
						<img src={body} alt="dinozzzzzawrikXD" className="skin" />
						<h1>Автор проекту</h1>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;