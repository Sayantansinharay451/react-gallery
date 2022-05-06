import { Outlet } from "react-router-dom";
import Message from "./Components/Message";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import wasmURL from "blurhash-as/build/optimized.wasm?url";
import * as blurhash from "blurhash-as/browser";
import { FavoriteImagesProvider } from "./Context/favorite-image-context";

blurhash.setURL(wasmURL);

function App() {
  return (
    <FavoriteImagesProvider>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex flex-col items-center py-20 flex-1 w-full dark:bg-neutral-900">
          <Outlet />
        </div>
      </div>
    </FavoriteImagesProvider>
  );
}

export default App;
