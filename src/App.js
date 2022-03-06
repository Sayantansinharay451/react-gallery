import { Outlet } from "react-router-dom";
import Message from "./Components/Message";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import wasmURL from "blurhash-as/build/optimized.wasm?url";
import * as blurhash from "blurhash-as/browser";

blurhash.setURL(wasmURL);
function App() {
	return (
		<>
			<NavBar />
			<div className="flex flex-col items-center w-full">
				<Outlet />
			</div>
		</>
	);
}

export default App;
