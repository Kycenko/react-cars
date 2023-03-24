import './assets/styles/global.scss'
import CartItem from "./components/CartItem/CartItem.jsx";
import {useEffect} from "react";
import MyModal from "./components/UI/modal/MyModal.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";

function App() {
	return (
		<div className="App">
			<Navigation/>
			<CartItem/>
		</div>
	)
}

export default App
