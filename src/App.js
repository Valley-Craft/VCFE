import "./styles/main.css";

import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";

import ScrollToTop from "./utils/scrollToTop"
import Map from "./components/map/Map";
import Form from "./pages/Form";
import Rules from "./pages/Rules";

function App() {
  return (
		<div className="App">
			<Router>
				<ScrollToTop />
				<Navbar />
				<ToastContainer />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/form" element={<Form />} />
					<Route path="/map" element={<Navigate to="http://map.valleycraft.fun/" />} />
					<Route path="/rules" element={<Rules />} />
					<Route path="/contacts" element={<Contacts />} />
				</Routes>
				<Footer />
			</Router>
		</div>
  );
}

export default App;
