import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, Box } from '@material-ui/core'
import Specialties from './Specialties/Specialties'
import styles from './Home.module.css'


const useStyles = makeStyles((theme) => ({
	caption1: {
		textAlign: 'center',
		textTransform: 'uppercase',
		marginTop: theme.spacing(4),
	},
	caption2: {
		textAlign: 'center',
		textTransform: 'uppercase',
	},
	caption3: {
		textAlign: 'center',
	},
	highlight: {
		color: 'orange',
	},
	ctaButton: {
		justify: 'center',
		margin: theme.spacing(1),
	},
	gridContainer: {
		textAlign: 'center',
	},
}));




const Home = () => {

	const classes = useStyles();


	return (
		<div className={styles.container}>
			<Typography variant="h4" className={classes.caption1}>Delicious Bakery Items</Typography>
			<Typography variant="h3" className={classes.caption2}>Coconut with <span className={classes.highlight}>lemon grass</span></Typography>
			<Typography variant="h6" className={classes.caption3}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Voluptate facilis corrupti quidem quis.</Typography>
			<Box display="flex" justifyContent="center" m={2}>
				<Button className={classes.ctaButton} variant="contained" color="secondary">Learn More</Button>
				<Button className={classes.ctaButton} variant="contained" color="secondary">Order Now</Button>
			</Box>
			<Specialties />
		</div>
	)
}


export default Home 
