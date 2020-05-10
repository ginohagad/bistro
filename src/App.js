import React, { Component } from 'react'
import { Nav, Main } from './components'
import Image from './img/resto-main2.jpg'
import styles from './App.module.css'


class App extends Component {

	render() {
		return(
			<div className={styles.container} style={{ backgroundImage: `url(${Image})`}}>
				<Nav />
				<Main />
			</div>
		)
	}
}


export default App
