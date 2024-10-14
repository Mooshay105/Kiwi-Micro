import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalNavBar from "./components/GlobalNavBar";
import GlobalFooter from "./components/GlobalFooter";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
	return (
		<div>
			<GlobalNavBar blur={true} />
			<Router>
				<Switch>
					<Route exact path="/">
						<Index />
					</Route>
					<Route path="/gallery">
						<Gallery />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
				</Switch>
			</Router>
			<GlobalFooter />
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
