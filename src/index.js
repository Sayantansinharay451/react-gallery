import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllImages from "./Pages/AllImages";
import FavoriteImages from "./Pages/FavoriteImages";
import { ImageProvider } from "./Context/image-context";

ReactDOM.render(
	<React.StrictMode>
		<ImageProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />}>
						<Route index element={<AllImages />} />
						<Route path="favorite" element={<FavoriteImages />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ImageProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
