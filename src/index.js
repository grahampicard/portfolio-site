import "./styles/app.scss";
import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./components/app";


const renderApp = (Component) =>
	render(
		<BrowserRouter>
			<Component />
		</BrowserRouter>,
		document.getElementById("root")
	);

renderApp(App);

//if (module.hot) module.hot.accept("./components/app", () => renderApp(App));
