import React, { Component } from 'react'
import { Nav, Home, OurFood, Order } from './components'
import Image from './img/background.jpg'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import styles from './App.module.css'


class App extends Component {

	render() {
		return(
			<Router>
				<div className={styles.container} style={{ backgroundImage: `url(${Image})`}}>
					<Nav />

					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/our-food">
							<OurFood />
						</Route>
						<Route path="/order">
							<Order />
						</Route>
					</Switch>
				</div>
			</Router>
		)
	}
}


export default App
