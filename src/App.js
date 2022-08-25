import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CreateScreen from "./components/createscreen.component";
import ShowForm from "./components/showform.component";
import ShowResponses from "./components/showresponses.component";
import Error from "./components/error.component";
import Navbar from "./components/navbar.component";

function App() {
	return (
		<>
			{/* <nav>
				<h1 style={{ textAlign: "center" }}>anonyform</h1>
				<hr></hr>
			</nav> */}
			<Navbar />
			<Router>
				<Routes>
					<Route path="/" element={<CreateScreen />} />
					<Route path="/forms/:id" element={<ShowForm />} />
					<Route
						path="/forms/responses/:id/:token"
						element={<ShowResponses />}
					/>
					<Route path="*" element={<Error />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
