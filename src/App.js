import { BrowserRouter, Switch, Route } from "react-router-dom";

//views
import Home from "./views/Home/Home";

//Components
import Error404 from "./components/Error404.jsx";

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
