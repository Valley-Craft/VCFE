import "./styles/main.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Shop from "./pages/Shop";

import ScrollToTop from "./utils/scrollToTop"
import Map from "./components/map/Map";

function App() {
  return (
		<div className="App">
			<Router>
				<ScrollToTop />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/map" element={<Map />} />
					<Route path="/contacts" element={<Contacts />} />
				</Routes>
				<Footer />
			</Router>
		</div>
  );
}

export default App;
