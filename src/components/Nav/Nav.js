import React from 'react'
import styles from './Nav.module.css'
import { makeStyles } from '@material-ui/core/styles'
import { Tabs, Tab, AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'



const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}))


const Nav = () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />	
					</IconButton>
					<Typography variant="h6" className={classes.title}>Bistro</Typography>
					<Tabs>
						<Tab label='Home' to='/' component={Link} />} />
						<Tab label='Our Food' to='/our-food' component={Link} />
						<Tab label='Gallery' to='/gallery' component={Link} />
						<Tab label='Blog' to='/blog' component={Link} />
						<Tab label='Order Now' to='/order' component={Link} />
						<Tab label='Location' to='/location' component={Link} />
					</Tabs>
			</Toolbar>
			</AppBar>
		</div>
	)
}


export default Nav
