import "./App.scss";
import Home from "./pages/Home";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects/:project" element={<Project />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
