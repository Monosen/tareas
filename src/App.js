import { BrowserRouter, Switch, Route } from "react-router-dom";

//views
import Home from "./views/Home/Home";
import Error404 from "./views/Error/Error404.jsx";

//Styles
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="*">
					<Error404 />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
